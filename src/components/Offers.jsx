import DynamicIcons from "./DynamicIcons";
export default function Offers() {
  const offerings = ["30k+ projects", "500+ clients", "100% satisfaction"];

  return (
    <section className="w-full bg-white py-10 border-b md:rounded-b-5xl lg:rounded-b-5xl rounded-b-4xl shadow-sm border-slate-100 mb-8">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* Responsive Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex w-full max-w-50 items-center justify-center gap-3"
            >
              <span className="text-center font-sans text-lg font-semibold text-blue-950 md:text-2xl">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
