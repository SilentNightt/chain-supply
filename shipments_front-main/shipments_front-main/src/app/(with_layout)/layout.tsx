import { Footer } from "@/widgets/components/layout/Footer";
import { Header } from "@/widgets/components/layout/Header";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
