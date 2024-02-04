export enum ButtonTypes {
  "small" = "small",
  "large" = "large",
  "line" = "line",
  "simple" = "simple",
}

export interface ButtonProps {
  type: ButtonTypes;
  icon?: string;
  text: string;
  invertColors?: boolean;
  right?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface HotCardProps {
  image: string;
  hot?: boolean;
  sale?: boolean;
}

export interface ItemTabProps {
  active?: boolean;
  text: string;
}

export interface ProductCardProps {
  image: string;
  hot?: boolean;
  sale?: boolean;
  title: string;
  subtitle: string;
  price: string;
  discount?: string;
}

export interface SectionTitleProps {
  text: string;
}
