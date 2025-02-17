import { ChangeEvent } from "react";
export interface ICheckbox {
  checked?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
