import PricingCard from "../PricingCard";
import productsData from "../../data/products";

export function PythonBotsPage({ onPurchase }) {
  const { plans, images } = productsData.pythonBots;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 fade-in">
      <div className="text-center mb-16">
        <h2 className="font-barlow text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Python Signal Bots
        </h2>
        <p className="font-inter text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Automated 24/7 Telegram channel signal bots that never sleep
        </p>
      </div>

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Python Bot ${index + 1}`}
              className="w-full h-48 object-cover rounded-2xl hover-lift cursor-pointer"
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.id}
            name={plan.name}
            price={plan.price}
            cutPrice={plan.cutPrice}
            period={plan.period}
            features={plan.features}
            gradient={
              index === 0
                ? "gradient-amber"
                : index === 1
                  ? "gradient-royal-indigo"
                  : "gradient-purple-indigo"
            }
            popular={plan.popular}
            onSelect={() => onPurchase(plan)}
          />
        ))}
      </div>
    </div>
  );
}
