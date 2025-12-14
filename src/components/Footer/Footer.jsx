import productsData from "../../data/products";
import urlfile from "../../urlfile";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div
          className="w-12 h-12 mx-auto mb-4 shadow-lg"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
            overflow: "hidden",
          }}
        >
          <img src={urlfile.footer_logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <h3 className="font-barlow text-xl font-bold text-black dark:text-white mb-2">
          {productsData.organization}
        </h3>
        <p className="font-inter text-gray-600 dark:text-gray-400 mb-4">
          © 2025 {productsData.organization}. Premium trading tools for
          professional traders.
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href={productsData.telegram.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-inter font-semibold"
          >
            Contact Us
          </a>
          <a
            href={productsData.telegram.channel}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-inter font-semibold"
          >
            Join Channel
          </a>
        </div>
      </div>
    </footer>
  );
}
