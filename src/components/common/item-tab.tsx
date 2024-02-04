import { ItemTabProps } from "../../utils/types";

function ItemTab({ active, text }: ItemTabProps) {
  return (
    <a
      className={`font-['Open_Sans'] font-semibold text-base ${
        !active && "text-[rgba(0,0,0,0.5)]"
      } hover:text-primary capitalize`}
    >
      {text}
    </a>
  );
}

export default ItemTab;
