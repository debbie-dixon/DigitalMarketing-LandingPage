import DynamicIcons from "./DynamicIcons";
export default function Offers() {
  const offerings = ["30k+ projects", "500+ clients", "100% satisfaction"];

  return (
    <section className="w-full bg-white py-10 border-b md:rounded-b-5xl lg:rounded-b-5xl rounded-b-4xl shadow-sm border-slate-100 mb-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Responsive Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 justify-items-center">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full max-w-50"
            >
              <span className="font-sans font-semibold text-blue-950 text-lg md:text-2xl whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
