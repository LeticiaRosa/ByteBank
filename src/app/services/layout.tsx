"use client";
import { useState } from "react";
import HeaderServices from "../../components/layout/HeaderServices";
import { Menu } from "../../components/layout/Menu";

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
      <HeaderServices setOpenMenu={handleOpenMenu} />
      <div className="center">
        <div className="container pt-6 max-w-250">
          <Menu openMenu={openMenu} setOpenMenu={handleOpenMenu} />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
