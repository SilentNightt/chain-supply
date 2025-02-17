import { FC } from "react";
import { ICheckbox } from "./types";

import styles from "./styles.module.scss";

export const Checkbox: FC<ICheckbox> = ({ checked, value, onChange }) => {
  return (
    <div className={`${styles.checkbox}`}>
      <input
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
