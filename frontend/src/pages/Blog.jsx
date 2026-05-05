import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const posts = [
  { 
    id: 1, 
    title: 'How to Choose the Perfect Ring', 
    date: 'Dec 15, 2024', 
    image: '/images/122.webp', 
    excerpt: 'A comprehensive guide to finding the ring that matches your style and personality. From material selection to sizing tips, everything you need to know.',
    category: 'Rings',
    readTime: '5 min read'
  },
  { 
    id: 2, 
    title: 'Caring for Your Silver Jewelry', 
    date: 'Dec 10, 2024', 
    image: '/images/121.webp', 
    excerpt: 'Essential tips to keep your silver pieces shining for years to come. Learn about proper storage, cleaning methods, and common mistakes to avoid.',
    category: 'Care',
    readTime: '4 min read'
  },
  { 
    id: 3, 
    title: 'Trending Styles This Season', 
    date: 'Dec 5, 2024', 
    image: '/images/44.jpg', 
    excerpt: 'Discover the hottest jewelry trends that are taking over this year. From minimalistic designs to bold statements, find what suits you best.',
    category: 'Trends',
    readTime: '6 min read'
  },
  { 
    id: 4, 
    title: 'The Art of Layering Chains', 
    date: 'Nov 28, 2024', 
    image: '/images/45.jpg', 
    excerpt: 'Master the art of layering chains for a stylish look. Tips on length combinations, thickness variations, and creating the perfect stack.',
    category: 'Style',
    readTime: '4 min read'
  },
  { 
    id: 5, 
    title: 'Understanding Ring Materials', 
    date: 'Nov 20, 2024', 
    image: '/images/6.jpg', 
    excerpt: 'A deep dive into tungsten, carbon fiber, obsidian, and other premium materials used in modern rings. Durability, appearance, and care instructions.',
    category: 'Education',
    readTime: '7 min read'
  },
  { 
    id: 6, 
    title: 'Watch Maintenance 101', 
    date: 'Nov 15, 2024', 
    image: '/images/1.webp', 
    excerpt: 'Keep your timepiece in perfect condition with these maintenance tips. Battery replacement, strap care, and professional servicing.',
    category: 'Watches',
    readTime: '5 min read'
  },
];

const categories = ['All', 'Rings', 'Chains', 'Watches', 'Style', 'Care', 'Trends'];

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/15.webp"
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider text-white">
            Our Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Insights, stories, and inspiration from the world of luxury
          </p>
          <div className="w-24 h-px bg-white/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 px-4 border-b border-white/10 sticky top-16 bg-black/95 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/40"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && searchTerm === '' && (
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>
            <div className="relative z-10 p-8 md:p-12 max-w-2xl">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-4">
                Featured • {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{featuredPost.title}</h2>
              <p className="text-white/70 mb-4 line-clamp-2">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-white/50 text-sm mb-6">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all hover:scale-105">
                Read Article →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No posts found.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-white/40 text-sm">
                Showing <span className="text-white">{filteredPosts.length}</span> articles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-black"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 group-hover:text-white/90 transition">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <button className="text-white/70 hover:text-white text-sm font-medium inline-flex items-center gap-1 transition-colors">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 border-t border-white/10 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/50 mb-8">Get the latest articles and exclusive offers straight to your inbox</p>
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

export default Blog;