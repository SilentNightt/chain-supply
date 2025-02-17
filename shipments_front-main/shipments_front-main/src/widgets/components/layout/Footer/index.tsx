import React from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "../../ui/Dropdown";

export const Footer = (props: {}) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_line}></div>
        <div className={styles.footer_block}></div>

        <div className={styles.footer_links}>
          <div className={styles.footer_links__block}>
            <p className={styles.block_title}>Каталог</p>
            <Link href="#" className={styles.block_item}>
              Столы кухонные
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы круглые
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы овальные
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы раскладные
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы маленькие
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы прямоугольные
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы металлические
            </Link>
            <Link href="#" className={styles.block_item}>
              Столы деревянные
            </Link>
            <Link href="#" className={styles.block_item}>
              Стулья мягкие
            </Link>
          </div>
          <div className={styles.footer_links__block}>
            <p className={styles.block_title}>Компания</p>
            <Link href="#" className={styles.block_item}>
              О компании
            </Link>
            <Link href="#" className={styles.block_item}>
              Контакты
            </Link>
            <Link href="#" className={styles.block_item}>
              Гарантия
            </Link>
            <Link href="#" className={styles.block_item}>
              Декларация
            </Link>
          </div>
          <div className={styles.footer_links__block}>
            <p className={styles.block_title}>Покупателям</p>
            <Link href="#" className={styles.block_item}>
              Доставка и сборка
            </Link>
            <Link href="#" className={styles.block_item}>
              Оплата и возврат
            </Link>
            <Link href="#" className={styles.block_item}>
              Инструкции
            </Link>
            <Link href="#" className={styles.block_item}>
              Памятка по эксплуатации
            </Link>
          </div>
          <div className={styles.footer_links__block}>
            <p className={styles.block_title}>Партнерам</p>
            <Link href="#" className={styles.block_item}>
              Стать партнёром
            </Link>
            <Link href="#" className={styles.block_item}>
              Поставщикам
            </Link>
            <Link href="#" className={styles.block_item}>
              Дизайнерам
            </Link>
            <Link href="#" className={styles.block_item}>
              Франчайзинг
            </Link>
          </div>
          <div className={styles.footer_join_block}>
            <h4>Присоединяйтесь:</h4>
            <div className={styles.images_block}>
              <div className={styles.dropdown_block}>
                <Dropdown title="КАТАЛОГ" items={["lorem2", "lorem3"]} />
                <Dropdown title="КОМПАНИЯ" items={["lorem2", "lorem3"]} />
                <Dropdown title="ПОКУПАТЕЛЯМ" items={["lorem2", "lorem3"]} />
                <Dropdown title="ПАРТНЁРАМ" items={["lorem2", "lorem3"]} />
                <div className={styles.end_line}></div>
              </div>
              <div className={styles.images}>
                <Link href="#">
                  <Image
                    src={"/assets/tg.svg"}
                    width={30}
                    height={30}
                    alt="tg"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/whatsapp.svg"}
                    width={30}
                    height={30}
                    alt="whatsapp"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/mail.svg"}
                    width={30}
                    height={30}
                    alt="mail"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/youtube.svg"}
                    width={30}
                    height={30}
                    alt="mail"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.numbers_block}>
              <h3>+7 (495) 183-40-17</h3>
              <p>интернет-магазин</p>
            </div>
            <div className={styles.numbers_block}>
              <h3>+7 (495) 183-40-17</h3>
              <p>дилерский магазин</p>
            </div>
          </div>
        </div>
        <div className={styles.logo_block}>
          <div className={styles.logo_line}></div>
          <div className={styles.logo}>
            <Link href={"/dashboard"}>
              <Image
                src={"/assets/black-logo.svg"}
                width={180}
                height={45}
                alt="logo"
              />
            </Link>
            <div className={styles.cards}>
              <Image src={"/assets/mir.svg"} width={80} height={25} alt="mir" />
              <Image
                src={"/assets/mastercard.svg"}
                width={68}
                height={40}
                alt="mir"
              />
              <Image
                src={"/assets/visa.svg"}
                width={80}
                height={25}
                alt="visa"
              />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.faq}>
        © 2024 KENNERMEBEL.RU Любое использование контента без письменного
        разрешения запрещено. Сайт KENNERMEBEL.RU носит исключительно
        информационный характер и ни при каких условиях не является публичной
        офертой. ООО "КЕННЕР" оставляет за собой право изменять комплектацию,
        условия сервиса, цены в любой период времени. Изображения изделий в
        каталоге и на сайте, в том числе цвет, рисунок на мебели и другие
        элементы, могут отличаться. Цена изделий может меняться в зависимости от
        выбранного региона. ООО "КЕННЕР" не несёт ответственности за услуги,
        предоставляемые сторонними организациями.
      </p>
    </>
  );
};
