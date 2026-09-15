export default function Header({ text, id, color, size = "text-3xl" }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1
          id={id}
          className={`text-center py-2 font-sans font-bold ${size} md:text-4xl mt-3 ${color}`}
        >
          {text}
        </h1>
        <div className="h-0.5 bg-gray-600 w-10 rounded-2xl"></div>
      </div>
    </>
  );
}
