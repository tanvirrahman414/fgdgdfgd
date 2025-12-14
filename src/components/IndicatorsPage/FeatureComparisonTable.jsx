const features = [
  { name: "TBT Kombiner 2019", lite: true, pro: true, elite: true },
  { name: "TBT Kombiner 2023", lite: true, pro: true, elite: true },
  { name: "Guru Old", lite: true, pro: true, elite: true },
  { name: "TBT V2", lite: false, pro: true, elite: true },
  { name: "Guru New", lite: false, pro: true, elite: true },
  { name: "TBT Scalper", lite: false, pro: true, elite: true },
  { name: "TBT Global", lite: false, pro: false, elite: true },
  { name: "Haxor V2", lite: false, pro: false, elite: true },
  { name: "Nexus Alpha", lite: false, pro: false, elite: true },
  { name: "TBT V3", lite: false, pro: false, elite: true },
  { name: "TBT Pro", lite: false, pro: false, elite: true },
  {
    name: "Falcon MT4 Reality",
    lite: false,
    pro: false,
    elite: true,
  },
];

export function FeatureComparisonTable() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl overflow-x-auto">
      <h3 className="font-barlow text-2xl font-bold text-black dark:text-white mb-6">
        Feature Comparison
      </h3>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left py-4 px-4 font-inter font-semibold text-black dark:text-white">
              Feature
            </th>
            <th className="text-center py-4 px-4 font-inter font-semibold text-black dark:text-white">
              Lite
            </th>
            <th className="text-center py-4 px-4 font-inter font-semibold text-black dark:text-white">
              Pro
            </th>
            <th className="text-center py-4 px-4 font-inter font-semibold text-black dark:text-white">
              Elite
            </th>
          </tr>
        </thead>
        <tbody className="font-inter text-sm">
          {features.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 dark:border-gray-700"
            >
              <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                {row.name}
              </td>
              <td className="text-center py-4 px-4 text-gray-700 dark:text-gray-200">{row.lite ? "✓" : "—"}</td>
              <td className="text-center py-4 px-4 text-gray-700 dark:text-gray-200">{row.pro ? "✓" : "—"}</td>
              <td className="text-center py-4 px-4 text-gray-700 dark:text-gray-200">{row.elite ? "✓" : "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
