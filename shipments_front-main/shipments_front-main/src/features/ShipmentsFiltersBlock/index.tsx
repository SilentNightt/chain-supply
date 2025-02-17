import styles from "./styles.module.scss";
import Image from "next/image";
import { Select } from "@/widgets/components/ui/Select";
import { DatePicker } from "@/widgets/components/ui/DatePicker";
import { Button } from "@/widgets/components/ui/Button";
import { IDatePicker, IFilters } from "@/app/(with_layout)/shipments/page";
import { MultiSelect, Option } from "@/widgets/components/ui/MultiSelect";

export const ShipmentsFiltersBlock = ({
  filters,
  setFilters,
  pickerState,
  setPickerState,
}: {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  pickerState: IDatePicker;
  setPickerState: React.Dispatch<React.SetStateAction<IDatePicker>>;
}) => {
  const MOBILE = window.matchMedia("(max-width: 1439px)").matches;

  return (
    <div className={styles.filters_block}>
      <div className={styles.filters}>
        <div className={styles.search}>
          <input
            className={styles.search_input}
            placeholder="Поиск"
            onChange={(e) =>
              setFilters((prev) => {
                return { ...prev, search: e.target.value };
              })
            }
          />
          <Image
            src={"/assets/grey-search.svg"}
            width={19}
            height={19}
            alt="search"
          />
        </div>
        <div className={styles.select}>
          <div className={styles.select_item}>
            <p>Статус заказа:</p>
            <Select
              value={"status"}
              setValue={setFilters}
              data={["В пути", "Ожидание", "Доставлено", "Задержка"]}
            />
          </div>
          <MultiSelect
            options={["Поставщик 1", "Поставщик 2"]}
            title="По поставщику:"
            setValue={setFilters}
            value={filters}
          />
          <div className={styles.select_item}>
            <p>Категория товара</p>
            <Select
              value={"category"}
              setValue={setFilters}
              data={["Столы", "Кресла", "Стулья"]}
            />
          </div>
          <div className={styles.select_date_item}>
            <div
              className={styles.select_item}
              onClick={() =>
                setPickerState({ ...pickerState, show: !pickerState.show })
              }
            >
              <p>Дата</p>
              <Image
                src={"/assets/picker.svg"}
                width={24}
                height={24}
                alt="date pick"
              />
            </div>
            <DatePicker
              pickerState={pickerState}
              setPickerState={setPickerState}
            />
          </div>
        </div>
        <div className={styles.btn_block}>
          <Button>
            {MOBILE ? "Поставка" : "Новая поставка"}
            <Image
              src={"/assets/white-plus.svg"}
              width={24}
              height={24}
              alt="add"
            />
          </Button>
        </div>
      </div>
      <div className={styles.select}>
        <div className={styles.select_item}>
          <p>Статус заказа:</p>
          <Select
            value={"status"}
            setValue={setFilters}
            data={["В пути", "Ожидание", "Доставлено", "Задержка"]}
          />
        </div>
        <MultiSelect
          options={["Поставщик 1", "Поставщик 2"]}
          title="По поставщику:"
          setValue={setFilters}
          value={filters}
        />
        <div className={styles.select_item}>
          <p>Категория товара</p>
          <Select
            value={"category"}
            setValue={setFilters}
            data={["Столы", "Кресла", "Стулья"]}
          />
        </div>
        <div className={styles.select_date_item}>
          <div
            className={styles.select_item}
            onClick={() =>
              setPickerState({ ...pickerState, show: !pickerState.show })
            }
          >
            <p>Дата</p>
            <Image
              src={"/assets/picker.svg"}
              width={24}
              height={24}
              alt="date pick"
            />
          </div>
          <DatePicker
            pickerState={pickerState}
            setPickerState={setPickerState}
          />
        </div>
      </div>
    </div>
  );
};
