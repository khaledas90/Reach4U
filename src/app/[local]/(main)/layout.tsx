import { Footer } from "@/components/Layout/footer";
import { Header } from "@/components/Layout/header";
import React from "react";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed left-0 top-0 z-[1000] w-full bg-white">
        <Header />
      </div>
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
