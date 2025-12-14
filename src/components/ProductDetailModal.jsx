"use client";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const TELEGRAM_CONTACT = "https://t.me/AIxTBT";

export default function ProductDetailModal({ product, onClose, onPurchase }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const images = product.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all"
          >
            <X size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          <h2 className="font-barlow text-3xl font-bold text-black dark:text-white pr-12">
            {product.name}
          </h2>
          <div className="flex items-baseline gap-3 mt-2">
            {product.cutPrice && (
              <span className="font-inter text-sm text-gray-500 line-through">
                ${Math.round(product.cutPrice)}
              </span>
            )}
            <span className="font-inter text-4xl font-bold text-black dark:text-white">
              ${Math.round(product.price)}
            </span>
          </div>
        </div>

        {/* Image Gallery */}
        {images.length > 0 && (
          <div className="relative bg-gray-100 dark:bg-gray-900 h-80 md:h-96">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 bg-opacity-90 hover:bg-opacity-100 flex items-center justify-center transition-all shadow-lg"
                >
                  <ChevronLeft
                    size={24}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 bg-opacity-90 hover:bg-opacity-100 flex items-center justify-center transition-all shadow-lg"
                >
                  <ChevronRight
                    size={24}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Description */}
          {product.description && (
            <div className="mb-6">
              <h3 className="font-barlow text-xl font-bold text-black dark:text-white mb-3">
                Description
              </h3>
              <p className="font-inter text-gray-700 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-6">
              <h3 className="font-barlow text-xl font-bold text-black dark:text-white mb-3">
                Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 gradient-royal-indigo rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <span className="font-inter text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Purchase Button */}
          <button
            onClick={() => onPurchase(product)}
            className="w-full gradient-royal-indigo text-white py-4 rounded-3xl font-inter font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            Purchase on Telegram
            <ExternalLink size={20} />
          </button>

          {/* Contact Info */}
          <div className="mt-4 text-center">
            <p className="font-inter text-sm text-gray-600 dark:text-gray-400">
              Contact us:{" "}
              <a
                href={TELEGRAM_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                @AIxTBT
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
