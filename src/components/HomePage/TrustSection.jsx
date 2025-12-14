import { Shield, Star, Zap } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="w-16 h-16 gradient-royal-indigo rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-2">
              Secure & Reliable
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-400">
              Protected transactions and reliable service delivery
            </p>
          </div>
          <div className="p-8">
            <div className="w-16 h-16 gradient-purple-indigo rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Star size={32} className="text-white" />
            </div>
            <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-2">
              Premium Quality
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-400">
              Top-tier tools trusted by professional traders
            </p>
          </div>
          <div className="p-8">
            <div className="w-16 h-16 gradient-cyan-blue rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-white" />
            </div>
            <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-2">
              Instant Access
            </h3>
            <p className="font-inter text-gray-600 dark:text-gray-400">
              Immediate delivery after purchase confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
