import { Brain, Sparkles, ChevronRight } from "lucide-react";
import productsData from "../../data/products";

export function AIBotsPage({ onPurchase }) {
  const { bundle } = productsData.aiBots;

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 fade-in">
      <div className="text-center mb-16">
        <h2 className="font-barlow text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          AI Analysis Bots
        </h2>
        <p className="font-inter text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Advanced AI bots for market analysis and candle pattern prediction
        </p>
      </div>

      {/* Bundle Images */}
      {bundle.images && bundle.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {bundle.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`AI Bot ${index + 1}`}
              className="w-full h-48 object-cover rounded-2xl hover-lift cursor-pointer"
            />
          ))}
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl hover-lift">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-rose text-white px-6 py-2 rounded-full font-inter text-sm font-semibold mb-6">
            Bundle Package
          </div>
          <h3 className="font-barlow text-3xl font-bold text-black dark:text-white mb-4">
            {bundle.name}
          </h3>
          <div className="flex items-baseline justify-center gap-3 mb-2">
            {bundle.cutPrice && (
              <span className="font-inter text-sm text-gray-500 line-through">
                ${bundle.cutPrice}
              </span>
            )}
            <span className="font-inter text-6xl font-bold text-black dark:text-white">
              ${bundle.price}
            </span>
            <span className="font-inter text-2xl text-gray-500 dark:text-gray-400">
              /{bundle.period}
            </span>
          </div>
          <p className="font-inter text-gray-600 dark:text-gray-400">
            {bundle.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {bundle.bots.map((bot, index) => (
            <div
              key={bot.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-3xl p-6"
            >
              {bot.images && bot.images.length > 0 && (
                <img
                  src={bot.images[0]}
                  alt={bot.name}
                  className="w-full h-32 object-cover rounded-2xl mb-4"
                />
              )}
              <div
                className={`w-14 h-14 ${index === 0 ? "gradient-royal-indigo" : "gradient-purple-indigo"} rounded-3xl flex items-center justify-center mb-4`}
              >
                {index === 0 ? (
                  <Brain size={28} className="text-white" />
                ) : (
                  <Sparkles size={28} className="text-white" />
                )}
              </div>
              <h4 className="font-barlow text-xl font-bold text-black dark:text-white mb-3">
                {bot.name}
              </h4>
              <div className="flex items-baseline justify-center gap-3 mb-3">
                {bot.cutPrice && (
                  <span className="font-inter text-sm text-gray-500 line-through">
                    ${Math.round(bot.cutPrice)}
                  </span>
                )}
                <span className="font-inter text-2xl font-bold text-black dark:text-white">
                  ${Math.round(bot.price)}
                </span>
              </div>
              <p className="font-inter text-sm text-gray-600 dark:text-gray-400 mb-4">
                {bot.description}
              </p>
              <ul className="space-y-2 font-inter text-sm text-gray-700 dark:text-gray-300">
                {bot.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <ChevronRight
                      size={14}
                      className={
                        index === 0 ? "text-blue-500" : "text-purple-500"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <button
                  onClick={() => onPurchase(bot)}
                  className="w-full gradient-royal-indigo text-white py-3 rounded-3xl font-inter font-semibold hover:shadow-xl transition-all"
                >
                  Get Bot for ${Math.round(bot.price)}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onPurchase(bundle)}
          className="w-full gradient-rose text-white py-4 rounded-3xl font-inter font-semibold text-lg hover:shadow-2xl transition-all"
        >
          Get Bundle for ${bundle.price}/{bundle.period}
        </button>
      </div>
    </div>
  );
}
