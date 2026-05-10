import { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';

const API_URL = 'http://127.0.0.1:8000/api';

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // State for data from API
  const [banners, setBanners] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [soloBanner, setSoloBanner] = useState(null);
  const [newArrivals, setNewArrivals] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [features, setFeatures] = useState([]);

  // Fetch all data from API
  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const response = await fetch(`${API_URL}/home-data`);
      const result = await response.json();
      
      if (result.success) {
        setBanners(result.data.banners || []);
        setBestsellers(result.data.bestsellers || []);
        setSoloBanner(result.data.soloBanner);
        setNewArrivals(result.data.newArrivals || []);
        setTestimonials(result.data.testimonials || []);
        setFeatures(result.data.features || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Auto slide for banners
  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      nextBanner();
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Auto slide for testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextBanner = () => {
    if (isTransitioning || banners.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevBanner = () => {
    if (isTransitioning || banners.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToBanner = (index) => {
    if (isTransitioning || index === currentBanner || banners.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentBanner(index);
      setIsTransitioning(false);
    }, 300);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-white text-xl">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback data if API returns empty
  const displayBanners = banners.length > 0 ? banners : [
    { id: 1, image: '/images/15.webp', title: 'MENS LUXURY', subtitle: 'Discover the art of fine craftsmanship', button_text: 'Shop Rings' },
    { id: 2, image: '/images/43.jpg', title: 'TUNGSTEN RINGS', subtitle: 'Scratch-resistant | Hypoallergenic', button_text: 'Explore Rings' },
  ];

  const displayFeatures = features.length > 0 ? features : [
    { id: 1, title: 'Free Shipping', description: 'On orders over $500' },
    { id: 2, title: 'Secure Payment', description: '100% secure transactions' },
    { id: 3, title: 'Easy Returns', description: '30-day return policy' },
    { id: 4, title: '24/7 Support', description: 'Dedicated customer care' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Slider - Dynamic from API */}
      <section className="relative h-screen overflow-hidden">
        {displayBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1 
                className="animate-fadeInUp"
                style={{ 
                  color: '#FFFFFF', 
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  fontSize: 'clamp(2rem, 8vw, 5rem)',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  letterSpacing: '0.1em'
                }}
              >
                {banner.title}
              </h1>
              <p 
                className="animate-fadeInUp animation-delay-200"
                style={{ 
                  color: '#FFFFFF', 
                  textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                  marginBottom: '2rem',
                  maxWidth: '600px'
                }}
              >
                {banner.subtitle}
              </p>
              <button 
                className="animate-fadeInUp animation-delay-400 shadow-lg hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#E5E5E5';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {banner.button_text || 'Shop Now'}
              </button>
            </div>
          </div>
        ))}

        {displayBanners.length > 0 && (
          <>
            <button
              onClick={prevBanner}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextBanner}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
              {displayBanners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToBanner(index)}
                  className={`transition-all duration-500 ease-out ${
                    index === currentBanner 
                      ? 'w-10 h-1 bg-white rounded-full' 
                      : 'w-2 h-1 bg-white/40 rounded-full hover:bg-white/60 hover:w-4'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Bestsellers - Dynamic from API */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Bestsellers</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">Our most loved pieces, chosen by men</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Mid Banner - Dynamic from API */}
      {soloBanner && (
        <section className="relative py-24 px-4 overflow-hidden min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img src={soloBanner.image} alt={soloBanner.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem' }}>
              {soloBanner.title}
            </h2>
            <p style={{ color: '#FFFFFF', textShadow: '0 1px 5px rgba(0,0,0,0.5)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginBottom: '2rem' }}>
              {soloBanner.subtitle}
            </p>
            <button style={{ backgroundColor: '#FFFFFF', color: '#000000', padding: '12px 32px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}>
              {soloBanner.button_text || 'Discover Collection'}
            </button>
          </div>
        </section>
      )}

      {/* New Arrivals - Dynamic from API */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">New Arrivals</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">Fresh drops for the modern gentleman</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials - Dynamic from API */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What Our Customers Say</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">Join thousands of satisfied customers</p>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ease-in-out ${
                index === currentTestimonial ? 'opacity-100 block' : 'hidden opacity-0'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-white/80 text-center italic mb-8">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role || 'Verified Buyer'}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonials.length > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-500 ease-out ${
                    index === currentTestimonial 
                      ? 'w-8 h-1 bg-white rounded-full' 
                      : 'w-6 h-1 bg-white/30 rounded-full hover:bg-white/50 hover:w-7'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features - Dynamic from API */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {displayFeatures.map((feature) => (
            <div key={feature.id} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-white/50 mb-8">Subscribe to get exclusive offers and updates</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all duration-300" />
            <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;