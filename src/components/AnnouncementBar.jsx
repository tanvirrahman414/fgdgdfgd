"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingMs, setRemainingMs] = useState(null);

  useEffect(() => {
    try {
      const key = 'blackfriday_end_ts';
      let endTs = Number(localStorage.getItem(key) || 0);
      if (!endTs || Number.isNaN(endTs)) {
        endTs = Date.now() + 30 * 60 * 60 * 1000; // 30 hours
        localStorage.setItem(key, String(endTs));
      }

      const tick = () => {
        const rem = endTs - Date.now();
        if (rem <= 0) {
          setRemainingMs(0);
          setIsVisible(false);
          try { localStorage.removeItem(key); } catch {}
          return;
        }
        setRemainingMs(rem);
      };

      tick();
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    } catch {}
  }, []);

  function formatRemaining(ms) {
    if (!ms || ms <= 0) return '00:00:00';
    const totalSec = Math.floor(ms / 1000);
    const hours = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-royal-indigo py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-black opacity-5 dark:opacity-10"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 relative z-10">
        {/* Zap icon removed per request */}
        <p className="font-inter text-sm md:text-base font-medium text-center text-black dark:text-white">
          🎡 Black Friday — <span className="font-bold">50% OFF</span> across everything!
          {remainingMs !== null && (
            <span className="ml-3 inline-block bg-white bg-opacity-10 dark:bg-opacity-20 px-3 py-1 rounded text-sm font-medium text-black dark:text-white">
              Offer ends in {formatRemaining(remainingMs)}
            </span>
          )}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto md:ml-4 p-1 hover:bg-white hover:bg-opacity-10 rounded-full transition-all flex-shrink-0 text-black dark:text-white"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
