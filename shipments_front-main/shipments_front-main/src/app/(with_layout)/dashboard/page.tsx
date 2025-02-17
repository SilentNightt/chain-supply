"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Input } from "@/widgets/components/ui/Input";
import Link from "next/link";
import { Footer } from "@/widgets/components/layout/Footer";

export default function Page() {
  const [select, setSelect] = useState("Поставщики");
  const [search, setSearch] = useState("");
  return (
    <>
      <div className={styles.bg__screen_block}>
        <h1>От немецкой идеи к производству в России</h1>
        <h4>
            Фабрике KENNER уже 15 лет
        </h4>
        <div className={styles.screen_block__btns}>
          <div className={styles.btn}>
            <Image
              src={"/assets/transport.svg"}
              alt="transport"
              width={20}
              height={18}
            />
            <h5>Вы поставщик</h5>
          </div>
          <div className={styles.btn}>
            <Image src={"/assets/cart.svg"} alt="cart" width={20} height={18} />
            <h5>Вы покупатель</h5>
          </div>
        </div>
        <div className={styles.search_block}>
          <div className={styles.block_input}>
            <input
              type="text"
              placeholder="Поиск"
              onChange={(e) => setSearch(e.currentTarget.value)}
              value={search}
            />
            <div className={styles.select_wrapper}>
              <select onChange={(e) => setSelect(e.currentTarget.value)}>
                <option value="Поставщики">Поставщики</option>
                <option value="Товары">Товары</option>
                <option value="Закупки">Закупки</option>
              </select>
            </div>
            <div className={styles.btn}>
              <Image
                src={"/assets/search.svg"}
                width={24}
                height={24}
                alt="search"
              />
              <h5>Найти</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.grid__block}>
        <div className={styles.block}>
          <Image
            src={"/assets/store-dashboard.svg"}
            alt="store"
            width={50}
            height={50}
          />
          <Link
            className={styles.block__text}
            href={"https://kennermebel.ru/collection/magaziny"}
          >
            <div className={styles.text__title}>
              <h3>Магазины</h3>
              <Image
                src={"/assets/arrow-right.svg"}
                width={20}
                height={20}
                alt="go"
              />
            </div>
            <p>
              Вы можете быть уверены, что приобрели качественную
              сертифицированную
            </p>
          </Link>
        </div>
        <div className={styles.block}>
          <Image
            src={"/assets/box-dashboard.svg"}
            alt="box"
            width={50}
            height={50}
          />
          <Link className={styles.block__text} href={"/shipments"}>
            <div className={styles.text__title}>
              <h3>Поставки</h3>
              <Image
                src={"/assets/arrow-right.svg"}
                width={20}
                height={20}
                alt="go"
              />
            </div>
            <p>
              Вы можете быть уверены, что приобрели качественную
              сертифицированную
            </p>
          </Link>
        </div>
        <div className={styles.block}>
          <Image
            src={"/assets/cart-dashboard.svg"}
            alt="box"
            width={50}
            height={50}
          />
          <Link
            className={styles.block__text}
            href={"https://kennermebel.ru/collection/sk"}
          >
            <div className={styles.text__title}>
              <h3>Товары</h3>
              <Image
                src={"/assets/arrow-right.svg"}
                width={20}
                height={20}
                alt="go"
              />
            </div>
            <p>
              Вы можете быть уверены, что приобрели качественную
              сертифицированную
            </p>
          </Link>
        </div>
        <div className={styles.block}>
          <Image
            src={"/assets/headphones.svg"}
            alt="box"
            width={50}
            height={50}
          />
          <Link
            className={styles.block__text}
            href={"https://kennermebel.ru/page/supplier"}
          >
            <div className={styles.text__title}>
              <h3>Помощь</h3>
              <Image
                src={"/assets/arrow-right.svg"}
                width={20}
                height={20}
                alt="go"
              />
            </div>
            <p>
              Вы можете быть уверены, что приобрели качественную
              сертифицированную
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
