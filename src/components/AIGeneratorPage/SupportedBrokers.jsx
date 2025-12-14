import productsData from "../../data/products";

export function SupportedBrokers() {
  const { brokers } = productsData.aiGenerator;

  return (
    <div className="bg-gradient-royal-indigo rounded-3xl p-8 md:p-12 text-white text-center">
      <h3 className="font-barlow text-3xl font-bold mb-4">Supported Brokers</h3>
      <p className="font-inter text-lg mb-8 opacity-90">
        Works seamlessly with {brokers.length} major trading platforms
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {brokers.map((broker, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-3xl font-inter font-semibold"
          >
            {broker}
          </div>
        ))}
      </div>
    </div>
  );
}
