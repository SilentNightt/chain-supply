"use client";
import React from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/Button";
import { useRouter } from "next/navigation";

export const Header = (props: {}) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.header__links_block}>
        <div className={styles.links_block}>
          <Link href={"/dashboard"}>
            <h5>Каталог</h5>
          </Link>
          <Link href={"/dashboard"}>
            <h5>Магазины</h5>
          </Link>
          <Link href={"/dashboard"}>
            <h5>Новинки</h5>
          </Link>
          <Link href={"/dashboard"}>
            <h5>Распродажа</h5>
          </Link>
          <Link href={"/dashboard"}>
            <h5>Партнерам</h5>
          </Link>
        </div>
        <div className={styles.contact_block}>
          <h5>График работы пн-пт с 09:00 до 18:00</h5>
          <h5>+7 (495) 183-40-17</h5>
        </div>
      </div>
      <div className={styles.header__logo_block}>
        <Image
          src={"/assets/menu.svg"}
          alt="menu"
          width={24}
          height={24}
          className={styles.menu_btn}
        />
        <Link href={"/dashboard"}>
          <Image
            src={"/assets/red-logo.svg"}
            alt="logo"
            width={180}
            height={45}
            priority
          />
        </Link>
        <div className={styles.btn__block}>
          <Button variant="outline" onClick={() => router.push("/login")}>
            Зарегистрироваться
          </Button>

          <Button onClick={() => router.push("login")}>Войти</Button>
        </div>
        <Image
          src={"/assets/sign-out.svg"}
          alt="menu"
          width={24}
          height={24}
          className={styles.menu_btn}
        />
      </div>
    </header>
  );
};
