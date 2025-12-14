import { TrendingUp, Code, Sparkles, Server, Bot, Brain } from "lucide-react";
import ServiceCard from "../ServiceCard";

export function ServicesGrid({ onNavigate }) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-barlow text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Our Premium Services
          </h2>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to succeed in trading, from indicators to
            AI-powered automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={TrendingUp}
            title="Trading Indicators"
            description="Premium MT4/MT5 indicators with 3-tier packages for every trading style"
            gradient="gradient-royal-indigo"
            onClick={() => onNavigate("indicators")}
          />
          <ServiceCard
            icon={Code}
            title="Source Codes"
            description="MQL4, Python, and custom trading system source codes for developers"
            gradient="gradient-purple-indigo"
            onClick={() => onNavigate("sourceCodes")}
          />
          <ServiceCard
            icon={Sparkles}
            title="AI Signal Generator"
            description="Real-time OTC, Forex, and news-based trading signals powered by AI"
            gradient="gradient-cyan-blue"
            onClick={() => onNavigate("aiGenerator")}
          />
          <ServiceCard
            icon={Server}
            title="RDP/VPS Hosting"
            description="24/7 cloud servers with admin access for uninterrupted trading"
            gradient="gradient-emerald"
            onClick={() => onNavigate("vps")}
          />
          <ServiceCard
            icon={Bot}
            title="Python Bots"
            description="Automated Telegram channel signal bots running 24/7"
            gradient="gradient-amber"
            onClick={() => onNavigate("pythonBots")}
          />
          <ServiceCard
            icon={Brain}
            title="AI Analysis Bots"
            description="Market analysis and candle prediction bots for informed decisions"
            gradient="gradient-rose"
            onClick={() => onNavigate("aiBots")}
          />
        </div>
      </div>
    </section>
  );
}
