import { useState } from "react";
import { MQL4Grid } from "./MQL4Grid";
import { PythonTab } from "./PythonTab";
import { FutureTab } from "./FutureTab";

export function SourceCodesPage({ onPurchase, onOpenProductDetail }) {
  const [activeTab, setActiveTab] = useState("mql4");

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 fade-in">
      <div className="text-center mb-16">
        <h2 className="font-barlow text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Source Codes
        </h2>
        <p className="font-inter text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Professional source codes for traders and developers
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["mql4", "python", "future"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 rounded-3xl font-inter font-semibold transition-all ${
              activeTab === tab
                ? "gradient-royal-indigo text-white shadow-xl"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {tab === "mql4"
              ? "MQL4 Grid"
              : tab === "python"
                ? "Python"
                : "Future Signals"}
          </button>
        ))}
      </div>

      {activeTab === "mql4" && (
        <MQL4Grid
          onPurchase={onPurchase}
          onOpenProductDetail={onOpenProductDetail}
        />
      )}

      {activeTab === "python" && (
        <PythonTab
          onPurchase={onPurchase}
          onOpenProductDetail={onOpenProductDetail}
        />
      )}

      {activeTab === "future" && (
        <FutureTab
          onPurchase={onPurchase}
          onOpenProductDetail={onOpenProductDetail}
        />
      )}
    </div>
  );
}
