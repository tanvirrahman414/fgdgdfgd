import { Check } from "lucide-react";

export default function PricingCard({
  name,
  price,
  cutPrice,
  period = "",
  features,
  gradient,
  popular = false,
  onSelect,
}) {
  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 hover-lift cursor-pointer ${
        popular ? "ring-4 ring-blue-500 ring-opacity-50" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-royal-indigo text-white px-6 py-2 rounded-full text-sm font-inter font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-2">
          {name}
        </h3>
        <div className="flex items-baseline justify-center gap-3">
          {cutPrice && (
            <span className="font-inter text-sm text-gray-500 line-through">
              ${Math.round(cutPrice)}
            </span>
          )}
          <span className="font-inter text-5xl font-bold text-black dark:text-white">
            ${Math.round(price)}
          </span>
          {period && (
            <span className="font-inter text-lg text-gray-500 dark:text-gray-400">
              /{period}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`w-6 h-6 ${gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              <Check size={14} className="text-white" />
            </div>
            <span className="font-inter text-sm text-gray-700 dark:text-gray-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={`w-full py-4 rounded-3xl font-inter font-semibold text-white transition-all hover:shadow-xl ${gradient}`}
      >
        Get Started
      </button>
    </div>
  );
}
