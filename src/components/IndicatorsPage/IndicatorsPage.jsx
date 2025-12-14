import PricingCard from "../PricingCard";
import { FeatureComparisonTable } from "./FeatureComparisonTable";
import productsData from "../../data/products";

export function IndicatorsPage({ onPurchase }) {
  const { tiers } = productsData.indicators;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 fade-in">
      <div className="text-center mb-16">
        <h2 className="font-barlow text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Trading Indicators
        </h2>
        <p className="font-inter text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose the perfect tier for your trading needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {tiers.map((tier, index) => (
          <div key={tier.id}>
            {tier.images && tier.images.length > 0 && (
              <div className="mb-4">
                <img
                  src={tier.images[0]}
                  alt={tier.name}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            )}
            <PricingCard
              name={tier.name}
              price={tier.price}
              cutPrice={tier.cutPrice}
              features={tier.features}
              gradient={
                index === 0
                  ? "gradient-cyan-blue"
                  : index === 1
                    ? "gradient-royal-indigo"
                    : "gradient-purple-indigo"
              }
              popular={tier.popular}
              onSelect={() => onPurchase(tier)}
            />
          </div>
        ))}
      </div>

      <FeatureComparisonTable />
    </div>
  );
}
