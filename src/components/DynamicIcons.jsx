import { DynamicIcon } from "lucide-react/dynamic";

export default function DynamicIcons({
  iconName,
  link,
  text,
  padding,
  bg,
  width,
  height,
}) {
  return (
    <a
      href={link}
      className={`flex flex-col gap-1 items-center ${padding} ${width} ${height} text-blue-950 ${bg}`}
    >
      <DynamicIcon name={iconName} size={24} />
      {text}
    </a>
  );
}
