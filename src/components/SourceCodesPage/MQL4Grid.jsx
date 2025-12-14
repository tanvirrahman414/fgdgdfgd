import { Code } from "lucide-react";
import productsData from "../../data/products";

export function MQL4Grid({ onPurchase, onOpenProductDetail }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {productsData.sourceCodes.mql4.map((item) => (
        <div
          key={item.id}
          onClick={() => onOpenProductDetail(item)}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 hover-lift cursor-pointer"
        >
          {item.images && item.images.length > 0 && (
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-40 object-cover rounded-2xl mb-4"
            />
          )}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-barlow text-xl font-bold text-black dark:text-white">
              {item.name}
            </h3>
            <Code size={24} className="text-blue-500" />
          </div>
          <div className="flex items-baseline gap-2 mb-6">
            {item.cutPrice && (
              <span className="font-inter text-sm text-gray-500 line-through">
                ${Math.round(item.cutPrice)}
              </span>
            )}
            <span className="font-inter text-3xl font-bold text-black dark:text-white">
              ${Math.round(item.price)}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPurchase(item);
            }}
            className="w-full gradient-royal-indigo text-white py-3 rounded-3xl font-inter font-semibold hover:shadow-xl transition-all"
          >
            Purchase Code
          </button>
        </div>
      ))}
    </div>
  );
}
