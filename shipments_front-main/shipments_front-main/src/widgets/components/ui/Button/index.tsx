import React, { FC } from "react";
import { IButton } from "./types";

import styles from "./styles.module.scss";

export const Button: FC<IButton> = ({
  variant = "default",
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variant == "default" ? styles.button_default : styles.button_outline} `}
    >
      {children}
    </button>
  );
};
