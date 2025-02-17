import React, { useState, useCallback } from "react";
import { DatePicker as DP } from "@mui/x-date-pickers";
import { Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import styles from "./styles.module.scss";
import { IDatePicker } from "@/app/(with_layout)/shipments/page";

export const DatePicker = ({
  pickerState,
  setPickerState,
}: {
  pickerState: IDatePicker;
  setPickerState: React.Dispatch<React.SetStateAction<IDatePicker>>;
}) => {
  const handleClose = useCallback(() => {
    setPickerState({ startDate: undefined, endDate: undefined, show: false });
  }, []);

  return (
    <div
      className={`${styles.date_picker} ${pickerState.show === false && styles.hidden}`}
    >
      <h5>Select date</h5>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className={styles.pickers_block}>
          <DP
            label="Date"
            name="d"
            value={pickerState.startDate}
            className={styles.picker}
            onChange={(newValue) =>
              setPickerState((prev: IDatePicker) => {
                return { ...prev, startDate: newValue ?? undefined };
              })
            }
          />
          <DP
            label="Добавить"
            name="d"
            value={pickerState.endDate}
            className={styles.picker}
            onChange={(newValue) =>
              setPickerState((prev: IDatePicker) => {
                return { ...prev, endDate: newValue ?? undefined };
              })
            }
          />
        </div>
        <div className={styles.btns}>
          <Button color="inherit" onClick={() => handleClose()}>
            Назад
          </Button>
          <Button
            color="inherit"
            onClick={() =>
              setPickerState((prev: IDatePicker) => {
                return { ...prev, show: !prev.show };
              })
            }
          >
            ОК
          </Button>
        </div>
      </LocalizationProvider>
    </div>
  );
};
