"use client";
import { sendMetric } from "@/shared/config/firebase";
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
  const [pickerState, setPickerState] = useState<IDatePicker>({ show: false });

  const handleSendMetric = async () => {
    const expenseData = {
      timestamp: new Date().toISOString(),
      amount: Math.floor(Math.random() * 5000) + 1000, // случайные расходы
      shipmentId: Math.floor(Math.random() * 10) + 1, // ID поставки
    };

    const confirmationData = {
      timestamp: new Date().toISOString(),
      shipmentId: Math.floor(Math.random() * 10) + 1,
      confirmationTime: Math.floor(Math.random() * 120) + 5, // время подтверждения
    };

    await sendMetric("expenses", expenseData);
    await sendMetric("confirmations", confirmationData);

    alert("Метрики отправлены в Firebase!");
  };

  return (
    <div className={styles.shipments__block}>
      <ShipmentsFiltersBlock
        setPickerState={setPickerState}
        setFilters={setFilters}
        pickerState={pickerState}
        filters={filters}
      />
      <TableShipments pickerState={pickerState} filters={filters} />
      
      {/* Кнопка для тестирования метрик */}
      <button className={styles.metricButton} onClick={handleSendMetric}>
        Отправить тестовые метрики
      </button>
    </div>
  );
}
