import { X } from "lucide-react";

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all"
      >
        <X size={24} className="text-white" />
      </button>
      <img
        src={image}
        alt="Preview"
        className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
