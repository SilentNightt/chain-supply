import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import { Checkbox } from "../CheckBox";
import { IFilters } from "@/app/(with_layout)/shipments/page";

export const MultiSelect = ({
  options,
  title,
  setValue,
  value,
}: {
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<IFilters>>;
  value: IFilters;
  title: string;
}) => {
  const [show, setShow] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue((prevSelected) =>
      prevSelected.supplier.includes(value)
        ? {
            ...prevSelected,
            supplier: prevSelected.supplier.filter((item) => item !== value),
          }
        : { ...prevSelected, supplier: [...prevSelected.supplier, value] },
    );
  };

  return (
    <div className={styles.multiSelectWrapper}>
      <div className={styles.selectedList} onClick={() => setShow(!show)}>
        <p>{title}</p>
      </div>
      {show && (
        <div className={styles.selectContainer}>
          {options.map((option) => (
            <div key={option} className={styles.selectItem}>
              <Checkbox
                value={option}
                onChange={handleChange}
                checked={value.supplier.includes(option)}
              />
              <span className={styles.label}>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
