import { Sparkles, ChevronRight } from "lucide-react";
import productsData from "../../data/products";

export function FutureTab({ onPurchase, onOpenProductDetail }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        onClick={() => onOpenProductDetail(productsData.sourceCodes.future)}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 hover-lift cursor-pointer"
      >
        {productsData.sourceCodes.future.images &&
          productsData.sourceCodes.future.images.length > 0 && (
            <img
              src={productsData.sourceCodes.future.images[0]}
              alt={productsData.sourceCodes.future.name}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
          )}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 gradient-cyan-blue rounded-3xl flex items-center justify-center">
            <Sparkles size={32} className="text-white" />
          </div>
          <div>
            <h3 className="font-barlow text-2xl font-bold text-black dark:text-white">
              Signal Engine Source
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-400">
              OTC & News Signal Generator
            </p>
          </div>
        </div>
        <div className="mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              {productsData.sourceCodes.future.cutPrice && (
                <span className="font-inter text-lg text-gray-500 dark:text-gray-400 line-through">
                  ${productsData.sourceCodes.future.cutPrice}
                </span>
              )}
              <span className="font-inter text-5xl font-bold text-black dark:text-white">
                ${Math.round(productsData.sourceCodes.future.price)}
              </span>
            </div>
          <ul className="space-y-3 font-inter text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              OTC signal generation engine
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              News-based trading signals
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              Complete source code
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              Integration documentation
            </li>
          </ul>
        </div>
        <button
          onClick={() => onPurchase(productsData.sourceCodes.future)}
          className="w-full gradient-cyan-blue text-white py-4 rounded-3xl font-inter font-semibold hover:shadow-xl transition-all"
        >
          Purchase Signal Engine
        </button>
      </div>
    </div>
  );
}
