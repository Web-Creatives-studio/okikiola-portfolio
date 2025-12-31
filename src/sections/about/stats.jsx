export default function Stats() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects Done" },
    { value: "10+", label: "Happy Clients" },
    { value: "1K", label: "Followers" },
  ];

  return (
    <div className="bg-black h-full flex items-center justify-center p-6">
      <div className="grid grid-cols-2 border border-gray-700 w-full h-full">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`p-6 text-center ${
              index % 2 === 0 ? "border-r border-gray-700" : ""
            } ${
              index < 2 ? "border-b border-gray-700" : ""
            }`}
          >
            <h2 className="text-yellow-500 text-2xl font-bold">
              {stat.value}
            </h2>
            <p className="text-gray-300 text-sm mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
