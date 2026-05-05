import { useState } from 'react';
import ProductModal from './ProductModal';

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              {product.oldPrice ? (
                <>
                  <span className="text-white font-bold">${product.price}</span>
                  <span className="text-gray-500 line-through text-sm ml-2">${product.oldPrice}</span>
                </>
              ) : (
                <span className="text-white font-bold">${product.price}</span>
              )}
            </div>
            {product.rating && (
              <div className="flex items-center">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="text-gray-400 text-sm ml-1">{product.rating}</span>
              </div>
            )}
          </div>

          {/* 3 Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-white/5 border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist
            </button>
            <button className="flex-1 py-2 bg-white/5 border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 15v6" />
              </svg>
              Cart
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="py-2 px-3 bg-white/5 border border-white/20 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal product={product} isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default ProductCard;