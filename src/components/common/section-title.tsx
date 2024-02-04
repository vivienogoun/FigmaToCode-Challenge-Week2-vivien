import { SectionTitleProps } from "../../utils/types";

function SectionTitle({ text }: SectionTitleProps) {
  return (
    <h2 className="font-[Roboto] font-medium text-2xl sm:text-5xl text-center capitalize">
      {text}
    </h2>
  );
}

export default SectionTitle;
