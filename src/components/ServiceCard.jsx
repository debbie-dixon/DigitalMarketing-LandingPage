import DynamicIcons from "./DynamicIcons";
export default function ServiceCard({
  iconName,
  title,
  description,
  bullets,
  style,
}) {
  return (
    <div
      style={style}
      className="animate-fade-up flex w-full max-w-75 flex-col rounded-xl border-2 border-blue-950 shadow-md transition-transform duration-300 hover:scale-105"
    >
      <div className="rounded-xl bg-blue-50 w-12 h-12 items-center p-4 justify-center flex mx-auto mt-4">
        <DynamicIcons iconName={iconName} padding="py-4" />
      </div>

      <div className=" px-5 py-4 flex flex-col grow">
        <h3 className="font-sans font-bold text-2xl text-blue-950 mb-1 tracking-tight ">
          {title}
        </h3>

        <p className="font-sans text-black text-base leading-relaxed ">
          {description}
        </p>
        {bullets && (
          <ul className="space-y-3 mt-2 border-t border-gray-100 pt-4 pb-4">
            {bullets.map((bullet, index) => (
              <li
                key={index}
                className="font-sans text-black flex gap-3 items-start text-base leading-relaxed"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
