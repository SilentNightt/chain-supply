"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { useShipmentsQuery } from "@/shared/lib/hooks/useShipmentsQuery";
import { use } from "react";
import { GoMap } from "@/features/GoMap";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { data } = useShipmentsQuery();
  const { id } = use(params);
  const shipment = data?.find((pred) => pred.id === id);
  return (
    <div className={styles.shipment_block}>
      <div className={styles.text_block}>
        <div className={styles.shipment_card}>
          <h3>Карточка заказа</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Название продукта</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{shipment?.id}</td>
                <td>{shipment?.productName}</td>
                <td>{shipment?.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.shipment_card}>
          <div className={styles.card_title}>
            <h3>История изменений</h3>
            <Image
              src={"/assets/reload.svg"}
              width={16}
              height={16}
              alt="reload"
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>Дата</th>
                <th>Кто внёс изменения</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03.02.2025</td>
                <td>Менеджер Фамилия И.О.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.shipment_card}>
          <div className={styles.card_title}>
            <h3>Информация о заказе</h3>
            <Image
              src={"/assets/reload.svg"}
              width={16}
              height={16}
              alt="reload"
            />
          </div>
          <table>
            <tbody>
              <tr>
                <th>Транспортная компания</th>
                <td>05.02.2025</td>
              </tr>
              <tr>
                <th>Ответственное лицо</th>
                <td>05.02.2025</td>
              </tr>
              <tr>
                <th>Контактный телефон для связи</th>
                <td>05.02.2025</td>
              </tr>
              <tr>
                <th>Ожидаемся дата доставки</th>
                <td>05.02.2025</td>
              </tr>
              <tr>
                <th>Стоимость доставки</th>
                <td>05.02.2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.map_block}>
        <GoMap />
      </div>
    </div>
  );
}
