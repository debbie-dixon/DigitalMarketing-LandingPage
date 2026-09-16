export default function Offers() {
  const offerings = [
    { value: "30k+", label: "projects" },
    { value: "500+", label: "clients" },
    { value: "100%", label: "satisfaction" },
  ];

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
              <span className="text-center font-sans text-blue-950">
                <strong className="text-2xl font-bold md:text-3xl">
                  {item.value}
                </strong>{" "}
                <span className="text-base font-normal md:text-lg">
                  {item.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
