import { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';

const products = [
  {
    id: 1,
    name: 'Tungsten Carbide Ring',
    price: 299,
    oldPrice: 499,
    image: '/images/122.webp',
    rating: 4.8,
    category: 'Rings',
  },
  {
    id: 2,
    name: "Men's Silver Chain",
    price: 199,
    oldPrice: 349,
    image: '/images/121.webp',
    rating: 4.6,
    category: 'Chains',
  },
  {
    id: 3,
    name: 'Leather Cuff Bracelet',
    price: 89,
    image: '/images/2.webp',
    rating: 4.5,
    category: 'Bracelets',
  },
  {
    id: 4,
    name: 'Stainless Steel Watch',
    price: 599,
    oldPrice: 899,
    image: '/images/1.webp',
    rating: 4.9,
    category: 'Watches',
  },
  {
    id: 5,
    name: 'Carbon Fiber Ring',
    price: 399,
    oldPrice: 599,
    image: '/images/6.jpg',
    rating: 4.7,
    category: 'Rings',
  },
  {
    id: 6,
    name: 'Gold Plated Dog Tag',
    price: 149,
    image: '/images/4.jpg',
    rating: 4.7,
    category: 'Chains',
  },
  {
    id: 7,
    name: 'Obsidian Stone Ring',
    price: 249,
    oldPrice: 399,
    image: '/images/3.jpg',
    rating: 4.8,
    category: 'Rings',
  },
  {
    id: 8,
    name: 'Chronograph Watch',
    price: 799,
    oldPrice: 1299,
    image: '/images/76.jpg',
    rating: 4.9,
    category: 'Watches',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'James Wilson',
    role: 'Verified Buyer',
    text: 'The tungsten ring is exactly what I wanted. Premium quality and fits perfectly. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Repeat Customer',
    text: "Best men's accessories brand out there. The watch is stunning and the customer service is top notch.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: 3,
    name: 'Marcus Rodriguez',
    role: 'Luxury Collector',
    text: 'Absolutely love my new ring. The craftsmanship is remarkable and delivery was super fast.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
];

const bannerImages = [
  {
    id: 1,
    image: '/images/15.webp',
    title: 'MENS LUXURY',
    subtitle: 'Discover the art of fine craftsmanship',
    buttonText: 'Shop Rings',
  },
  {
    id: 2,
    image: '/images/43.jpg',
    title: 'TUNGSTEN RINGS',
    subtitle: 'Scratch-resistant | Hypoallergenic | Lifetime Warranty',
    buttonText: 'Explore Rings',
  },
  {
    id: 3,
    image: '/images/44.jpg',
    title: 'PREMIUM WATCHES',
    subtitle: 'Timeless elegance for the modern gentleman',
    buttonText: 'Shop Watches',
  },
  {
    id: 4,
    image: '/images/45.jpg',
    title: 'SILVER CHAINS',
    subtitle: '925 Sterling Silver | Handcrafted',
    buttonText: 'View Collection',
  },
  {
    id: 5,
    image: '/images/46.jpg',
    title: 'LEATHER BRACELETS',
    subtitle: 'Genuine leather | Magnetic clasp | Modern design',
    buttonText: 'Shop Bracelets',
  },
  {
    id: 6,
    image: '/images/12.jpg',
    title: 'LIMITED EDITION',
    subtitle: 'Exclusive designs crafted with precision',
    buttonText: 'Discover Now',
  },
];

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Slider - IMAGES PROPERLY FIT */}
      <section className="relative h-screen overflow-hidden">
        {bannerImages.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%'
              }}
            />
            
            {/* TEXT WITH INLINE CSS - PERMANENT WHITE */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h1 
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
                className="shadow-lg"
              >
                {banner.buttonText}
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`transition-all duration-300 ${
                index === currentBanner 
                  ? 'w-10 h-1 bg-white rounded-full' 
                  : 'w-2 h-1 bg-white/50 rounded-full'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Bestsellers</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">Our most loved pieces, chosen by men</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Mid Banner - WITH PROPER IMAGE FIT */}
      <section className="relative py-24 px-4 overflow-hidden min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/18.jpg"
            alt="Mid Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 style={{ color: '#FFFFFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem' }}>
            LUXURY REDEFINED
          </h2>
          <p style={{ color: '#FFFFFF', textShadow: '0 1px 5px rgba(0,0,0,0.5)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginBottom: '2rem' }}>
            Exclusive designs crafted with precision and passion for the modern man
          </p>
          <button style={{ backgroundColor: '#FFFFFF', color: '#000000', padding: '12px 32px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}>
            Discover Collection
          </button>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">New Arrivals</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">Fresh drops for the modern gentleman</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
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
              className={`transition-all duration-500 ${
                index === currentTestimonial ? 'opacity-100 block' : 'hidden opacity-0'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'w-8 h-1 bg-white rounded-full' 
                    : 'w-6 h-1 bg-white/30 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Free Shipping</h3>
            <p className="text-white/40 text-sm">On orders over $500</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Secure Payment</h3>
            <p className="text-white/40 text-sm">100% secure transactions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Easy Returns</h3>
            <p className="text-white/40 text-sm">30-day return policy</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M6 14h12M12 4v16" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
            <p className="text-white/40 text-sm">Dedicated customer care</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-white/50 mb-8">Subscribe to get exclusive offers and updates</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50"
            />
            <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all hover:scale-105">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;