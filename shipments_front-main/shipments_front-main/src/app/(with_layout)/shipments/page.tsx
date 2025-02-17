"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { ShipmentsFiltersBlock } from "@/features/ShipmentsFiltersBlock";
import { TableShipments } from "@/features/TableShipments";

export interface IFilters {
  status: string;
  supplier: string[];
  category: string;
  date?: Date | null;
  search: string;
}

export interface IDatePicker {
  startDate?: Date;
  endDate?: Date;
  show?: boolean;
}

export default function Page() {
  const [filters, setFilters] = useState<IFilters>({
    status: "",
    supplier: [],
    category: "",
    search: "",
  });
  const [pickerState, setPickerState] = useState<IDatePicker>({
    show: false,
  });
  return (
    <div className={styles.shipments__block}>
      <ShipmentsFiltersBlock
        setPickerState={setPickerState}
        setFilters={setFilters}
        pickerState={pickerState}
        filters={filters}
      />
      <TableShipments pickerState={pickerState} filters={filters} />
    </div>
  );
}
