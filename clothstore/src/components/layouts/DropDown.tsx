import { ChevronRight } from "lucide-react";
import DashedLine from "./DashedLine";

function Dropdown({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        onClick={onClick}
        className="flex items-center justify-between cursor-pointer"
      >
        <span className="text-lg font-bold tracking-widest">{title}</span>
        <ChevronRight
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        {children}
      </div>

      <DashedLine />
    </div>
  );
}

export default Dropdown;
