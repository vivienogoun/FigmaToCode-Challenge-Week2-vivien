import { ButtonProps, ButtonTypes } from "../../utils/types";

function Button({
  icon,
  text,
  type,
  invertColors,
  right,
  onClick,
}: ButtonProps) {
  return (
    <button className="group" onClick={onClick}>
      <div
        className={`flex ${
          right && "flex-row-reverse"
        } items-center gap-2 transition ease-out delay-200 duration-150 hover:scale-110 
  ${type === ButtonTypes.small && "py-1 px-4"}
  ${type === ButtonTypes.large && "p-4"}
  ${type === ButtonTypes.line && "py-0 px-2"}
  ${
    (type === ButtonTypes.small || type === ButtonTypes.large) &&
    `${invertColors ? "bg-white" : "bg-[#1e2832]"} hover:bg-primary`
  }
  ${
    (type === ButtonTypes.line || type === ButtonTypes.simple) &&
    "hover:text-primary"
  }`}
      >
        {icon != null && <img src={icon} alt={text} />}
        <span
          className={`font-['Open_Sans']
        ${type === ButtonTypes.large && "text-3xl"}
        ${type === ButtonTypes.line && "uppercase"}
        ${
          (type === ButtonTypes.small || type === ButtonTypes.large) &&
          `${invertColors ? "text-black" : "text-white"}`
        }
        ${(type === ButtonTypes.large || ButtonTypes.simple) && "capitalize"}`}
        >
          {text}
        </span>
      </div>
      {type === ButtonTypes.line && (
        <hr className="text-black group-hover:text-primary mt-2" />
      )}
    </button>
  );
}

export default Button;
