"use client";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect } from "react";
import urlfile from "../urlfile";

export default function Navbar({ onNavigate, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "indicators", label: "Indicators" },
    { id: "sourceCodes", label: "Source Codes" },
    { id: "aiGenerator", label: "AI Signals" },
    { id: "vps", label: "RDP/VPS" },
    { id: "pythonBots", label: "Python Bots" },
    { id: "aiBots", label: "AI Bots" },
  ];

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        setIsDark(true);
        document.documentElement.classList.add('dark');
        return;
      }
      if (stored === 'light') {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
        return;
      }
      // No stored preference — default to dark mode
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer hover-lift"
            onClick={() => onNavigate("home")}
          >
            <div
              className="w-12 h-12 shadow-lg"
              style={{
                clipPath:
                  "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
                overflow: "hidden",
              }}
            >
              <img src={urlfile.footer_logo} alt="AIxTBT" className="w-full h-full object-cover" />
            </div>
            <span className="font-barlow text-2xl font-bold text-black dark:text-white">
              AIxTBT
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Theme toggle */}
            <button
              onClick={() => {
                const next = !isDark;
                setIsDark(next);
                try {
                  if (next) document.documentElement.classList.add('dark');
                  else document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', next ? 'dark' : 'light');
                } catch {}
              }}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-inter text-sm font-medium transition-all relative py-2 ${
                  activeSection === item.id
                    ? "text-[#0054B5] dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#0054B5] dark:hover:text-blue-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-royal-indigo rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-3xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700 fade-in">
            <div className="px-4 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isDark ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                )}
                <span className="font-inter text-sm text-gray-700 dark:text-gray-300">Theme</span>
              </div>
              <button
                onClick={() => toggleTheme()}
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 font-inter text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#0054B5] dark:text-blue-400 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
