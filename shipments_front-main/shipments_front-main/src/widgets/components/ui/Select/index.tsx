import React from "react";

import styles from "./styles.module.scss";
import { IFilters } from "@/app/(with_layout)/shipments/page";

export const Select = (props: {
  data: string[];
  value: keyof IFilters;
  setValue: React.Dispatch<React.SetStateAction<IFilters>>;
}) => {
  return (
    <div className={styles.select_wrapper}>
      <select
        onChange={(e) =>
          props.setValue((prev: IFilters) => {
            return { ...prev, [props.value]: e.target.value };
          })
        }
      >
        <option value=""></option>
        {props.data.map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
