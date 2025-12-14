export default function ServiceCard({
  icon: Icon,
  title,
  description,
  gradient,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 hover-lift cursor-pointer overflow-hidden"
    >
      {/* Gradient Background Effect */}
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      <div className="relative z-10">
        <div
          className={`w-16 h-16 ${gradient} rounded-3xl flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon size={32} className="text-white" />
        </div>

        <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-3">
          {title}
        </h3>

        <p className="font-inter text-base text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
