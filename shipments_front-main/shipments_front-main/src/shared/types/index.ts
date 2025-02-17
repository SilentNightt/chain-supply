import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export type IInput<T extends FieldValues> = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  width?: string;
  borderColor?: string;
  checked?: boolean;
  bgcolor?: string;
  padding?: string;
  disabled?: boolean;
  height?: string;
  borderRadius?: string;
  value?: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  border?: string;
  hookFormData?: {
    register: UseFormRegister<T>;
    registerName: string;
    options?: RegisterOptions;
  };
};
