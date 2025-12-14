import { urlfile } from '../../urlfile';

export function HeroSection({ onExploreProducts }) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-gunmetal-midnight opacity-95"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${urlfile.unsplash2})` }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 gradient-royal-indigo rounded-full blur-3xl opacity-50 floating"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 gradient-purple-indigo rounded-full blur-3xl opacity-50 floating"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <span className="bg-white bg-opacity-10 text-white px-6 py-2 rounded-full font-inter text-sm font-medium backdrop-blur-sm">
            Premium Trading Tools & Solutions
          </span>
        </div>

        <h1 className="font-barlow text-5xl md:text-7xl font-bold text-white mb-6">
          Elevate Your Trading
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            to New Heights
          </span>
        </h1>

        <p className="font-inter text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Professional indicators, source codes, AI-powered signals, and
          automated bots for serious traders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreProducts}
            className="gradient-royal-indigo text-white px-8 py-4 rounded-3xl font-inter font-semibold hover-lift shadow-xl"
          >
            Explore Products
          </button>
          <button
            onClick={() => window.open('https://t.me/AI_KOMBINER_PRO', '_blank')}
            className="bg-white bg-opacity-10 backdrop-blur-sm text-white px-8 py-4 rounded-3xl font-inter font-semibold hover:bg-opacity-20 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
