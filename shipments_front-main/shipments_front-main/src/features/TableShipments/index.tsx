import React from "react";

import styles from "./styles.module.scss";
import { useShipmentsQuery } from "@/shared/lib/hooks/useShipmentsQuery";
import { formatDate } from "@/shared/lib/helpers/formatDate";
import { IDatePicker, IFilters } from "@/app/(with_layout)/shipments/page";
import { IShipment } from "@/shared/types/shipment.interface";
import Link from "next/link";

export function TableShipments({
  filters,
  pickerState,
}: {
  filters: IFilters;
  pickerState: IDatePicker;
}) {
  const { data } = useShipmentsQuery();
  console.log(filters);

  const dateFilter = (shipment: IShipment) => {
    const shipDate = new Date(shipment.shipmentDate).getTime();
    if (pickerState.startDate) {
      const startDate = new Date(pickerState.startDate).getTime();
      if (pickerState.endDate) {
        const endDate = new Date(pickerState.endDate).getTime();
        return startDate <= shipDate && endDate;
      } else {
        return startDate <= shipDate;
      }
    }
    return true;
  };
  const selectFilter = (shipment: IShipment) => {
    if (filters.status) {
      return shipment.status === filters.status;
    }
    if (filters.supplier.length > 0) {
      return filters.supplier.includes(shipment.supplier);
    }
    if (filters.category) {
      return shipment.category == filters.category;
    }
    return true;
  };
  const searchFilter = (shipment: IShipment) => {
    return Object.values(shipment).some((attr) => {
      if (typeof attr === "string") {
        return attr.toLowerCase().includes(filters.search.toLowerCase());
      }
      return false;
    });
  };
  console.log(data);
  return (
    <div className={styles.table_block}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название продукта</th>
            <th>Поставщик</th>
            <th>Дата отправки</th>
            <th>Текущий статус</th>
            <th>Местоположение</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data
            ?.filter(selectFilter)
            .filter(searchFilter)
            .filter(dateFilter)
            .map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.productName}</td>
                <td>{shipment.supplier}</td>
                <td>{formatDate(shipment.shipmentDate)}</td>
                <td>{shipment.status}</td>
                <td>{shipment.location}</td>
                <td>
                  <Link href={`/shipments/${shipment.id}`}>
                    Посмотреть детали
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
