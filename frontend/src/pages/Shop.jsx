import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';

const allProducts = [
  { id: 1, name: 'Tungsten Carbide Ring', price: 299, oldPrice: 499, image: '/images/122.webp', rating: 4.8, category: 'rings' },
  { id: 2, name: "Men's Silver Chain", price: 199, oldPrice: 349, image: '/images/121.webp', rating: 4.6, category: 'chains' },
  { id: 3, name: 'Leather Cuff Bracelet', price: 89, image: '/images/2.webp', rating: 4.5, category: 'bracelets' },
  { id: 4, name: 'Stainless Steel Watch', price: 599, oldPrice: 899, image: '/images/1.webp', rating: 4.9, category: 'watches' },
  { id: 5, name: 'Carbon Fiber Ring', price: 399, oldPrice: 599, image: '/images/6.jpg', rating: 4.7, category: 'rings' },
  { id: 6, name: 'Gold Plated Dog Tag', price: 149, image: '/images/4.jpg', rating: 4.7, category: 'chains' },
  { id: 7, name: 'Obsidian Stone Ring', price: 249, oldPrice: 399, image: '/images/3.jpg', rating: 4.8, category: 'rings' },
  { id: 8, name: 'Chronograph Watch', price: 799, oldPrice: 1299, image: '/images/76.jpg', rating: 4.9, category: 'watches' },
];

const categories = [
  { id: 'all', name: 'All Products', icon: 'M4 6h16M4 12h16M4 18h16' },
  { id: 'rings', name: 'Rings', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'chains', name: 'Chains', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { id: 'bracelets', name: 'Bracelets', icon: 'M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z' },
  { id: 'watches', name: 'Watches', icon: 'M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z' },
];

function Shop() {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  const filteredProducts = allProducts.filter(p => filter === 'all' || p.category === filter);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/15.webp"
            alt="Shop Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wider text-white">
            Our Collection
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover premium craftsmanship and timeless design
          </p>
          <div className="w-24 h-px bg-white/20 mx-auto mt-6" />
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 border-b border-white/10 sticky top-16 bg-black/95 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === cat.id
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/40 text-sm">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-white/40"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-white/40 text-sm">
                Showing <span className="text-white">{filteredProducts.length}</span> products
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 border-t border-white/10 bg-black">
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

export default Shop;