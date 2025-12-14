import { Code, ChevronRight } from "lucide-react";
import productsData from "../../data/products";

export function PythonTab({ onPurchase, onOpenProductDetail }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        onClick={() => onOpenProductDetail(productsData.sourceCodes.python)}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 hover-lift cursor-pointer"
      >
        {productsData.sourceCodes.python.images &&
          productsData.sourceCodes.python.images.length > 0 && (
            <img
              src={productsData.sourceCodes.python.images[0]}
              alt={productsData.sourceCodes.python.name}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
          )}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 gradient-purple-indigo rounded-3xl flex items-center justify-center">
            <Code size={32} className="text-white" />
          </div>
          <div>
            <h3 className="font-barlow text-2xl font-bold text-black dark:text-white">
              Python Source Code
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-400">
              Auto-trading & Telegram Integration
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline gap-4 mb-4">
            {productsData.sourceCodes.python.cutPrice && (
              <span className="font-inter text-lg text-gray-500 dark:text-gray-400 line-through">
                ${productsData.sourceCodes.python.cutPrice}
              </span>
            )}
            <span className="font-inter text-5xl font-bold text-black dark:text-white">
              ${Math.round(productsData.sourceCodes.python.price)}
            </span>
          </div>
          <ul className="space-y-3 font-inter text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              Complete auto-trading system
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              Telegram bot integration
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              Full source code with documentation
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              Customization support
            </li>
          </ul>
        </div>
        <button
          onClick={() => onPurchase(productsData.sourceCodes.python)}
          className="w-full gradient-purple-indigo text-white py-4 rounded-3xl font-inter font-semibold hover:shadow-xl transition-all"
        >
          Purchase Python Code
        </button>
      </div>
    </div>
  );
}
