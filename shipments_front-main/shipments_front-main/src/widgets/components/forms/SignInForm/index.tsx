"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/widgets/components/ui/Input";
import Image from "next/image";
import { Checkbox } from "@/widgets/components/ui/CheckBox";
import { Button } from "@/widgets/components/ui/Button";
import { ISignInFormInput } from "./types";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormInput>();
  const onSubmit: SubmitHandler<ISignInFormInput> = (values) => {
    console.log(values);
    console.log(errors);
  };
  return (
    <form
      className={styles.form__box}
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
      }}
    >
      <h1>Вход</h1>
      <Input type="text" placeholder="Введите логин" {...register("login")} />
      <div className={styles.password_input}>
        <input
          {...register("password")}
          placeholder="Пароль"
          type={showPassword ? "text" : "password"}
          className={styles.password_input__input}
        />
        <Image
          src={"/assets/eye.svg"}
          width={24}
          height={24}
          alt="show password"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <div className={styles.checkbox__box}>
        <Checkbox />
        <h5>Запомнить меня</h5>
      </div>

      <Button type="submit">Войти</Button>
      <Button type="button" variant="outline">
        Забыли пароль
      </Button>

      <div className={styles.jwt__block}>
        <h5>Войти с помощью</h5>
        <div className={styles.jwt__block_btn}>
          <Image
            src={"/assets/jwt.svg"}
            width={71}
            height={21}
            alt="sign with jwt"
          />
          <h4>JSON Web Token</h4>
        </div>
      </div>
    </form>
  );
};
