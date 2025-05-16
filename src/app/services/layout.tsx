"use client";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu(action?: string) {
    if (action === "open") {
      setOpenMenu(false);
    } else {
      setOpenMenu(!openMenu);
    }
  }

  return (
    <>
      <Header setOpenMenu={handleOpenMenu} />
      <div className="center">
        <div className="container pt-6 max-w-250">
          <Menu openMenu={openMenu} setOpenMenu={handleOpenMenu} />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
