import { ReactNode } from "react";

export interface IButton {
  variant?: "outline" | "default";
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
  onClick?: () => void;
}
