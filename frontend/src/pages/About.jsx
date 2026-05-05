import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/15.webp"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider text-white">
            About LUXE
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
            Crafting excellence since 2024
          </p>
          <div className="w-24 h-px bg-white/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Story</h2>
            <div className="w-16 h-px bg-white/20" />
            <p className="text-white/60 leading-relaxed">
              Founded with a passion for exceptional craftsmanship, LUXE brings you premium quality products 
              that blend timeless elegance with modern design. What started as a small workshop has now become 
              a symbol of luxury and sophistication.
            </p>
            <p className="text-white/60 leading-relaxed">
              Each piece in our collection is carefully curated to ensure the highest standards of quality 
              and authenticity. We believe that luxury should be accessible without compromising on excellence.
            </p>
            <p className="text-white/60 leading-relaxed">
              Our mission is to provide our customers with products that not only look beautiful but also 
              stand the test of time. From materials to manufacturing, every step is meticulously monitored.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/44.jpg"
              alt="Our Workshop"
              className="rounded-xl w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">By the Numbers</h2>
            <div className="w-20 h-px bg-white/20 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
              <p className="text-white/40 text-sm uppercase tracking-wider">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <p className="text-white/40 text-sm uppercase tracking-wider">Exclusive Designs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <p className="text-white/40 text-sm uppercase tracking-wider">Expert Craftsmen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <p className="text-white/40 text-sm uppercase tracking-wider">Authenticity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Values</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">What makes us different</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-black">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Quality First</h3>
            <p className="text-white/40 text-sm">Only the finest materials and meticulous craftsmanship</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-black">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Passion</h3>
            <p className="text-white/40 text-sm">Driven by love for what we create</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-black">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Timeless Design</h3>
            <p className="text-white/40 text-sm">Classic elegance that never goes out of style</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-white/10 border-b border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet Our Team</h2>
          <div className="w-20 h-px bg-white/20 mx-auto" />
          <p className="text-white/50 mt-4">The masterminds behind LUXE</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white font-semibold text-xl">Alexander Reynolds</h3>
            <p className="text-white/40 text-sm">Founder & Creative Director</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300"
                alt="Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white font-semibold text-xl">Marcus Chen</h3>
            <p className="text-white/40 text-sm">Master Jeweler</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                alt="Manager"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white font-semibold text-xl">Isabella Moore</h3>
            <p className="text-white/40 text-sm">Operations Manager</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/15.webp"
            alt="CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Ready to Elevate Your Style?</h2>
          <p className="text-xl text-white/80 mb-8">Discover our exclusive collection of premium accessories</p>
          <button className="px-10 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;