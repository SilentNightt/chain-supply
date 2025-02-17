"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export const Dropdown = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.dropdown_item} ${isOpen ? styles.active : ""}`}>
      <button
        className={styles.dropdown_btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={"/assets/dropdown.svg"}
          alt="Arrow"
          className={styles.arrow}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdown_content}>
          {items.map((item, index) => (
            <a href="#" key={index}>
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
