import { ChevronRight } from "lucide-react";

export function VPSFeatures() {
  const features = [
    "Full administrator access to customize your environment",
    "Ultra-low latency for lightning-fast trade execution",
    "99.9% uptime SLA for reliable 24/7 operation",
    "Pre-installed MT4/MT5 ready to use instantly",
  ];

  return (
    <div className="mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
      <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-6 text-center">
        Why Choose Our VPS?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter text-gray-700 dark:text-gray-300">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <ChevronRight
              size={20}
              className="text-green-500 flex-shrink-0 mt-1"
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
