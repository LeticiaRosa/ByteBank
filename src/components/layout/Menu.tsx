"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkButton from "../ui/form/Link";
import { Separador } from "../ui/form/Separador";
import { X } from "phosphor-react";

interface MenuProps {
  openMenu: boolean;
  setOpenMenu: (action?: string) => void;
}

export function Menu({ openMenu, setOpenMenu }: MenuProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/services", label: "Início" },
    {
      href: "/services/transferencias",
      label: "Transferências",
    },
    {
      href: "/services/investimentos",
      label: "Investimentos",
    },
    {
      href: "/services/outros",
      label: "Outros Serviços",
    },
  ];

  return (
    <>
      {openMenu && <div className="modal" onClick={() => setOpenMenu()}></div>}
      <nav id="menu" className={`menu  ${openMenu ? "menu-open" : ""}`}>
        <ul className="flex place-content-between md:flex-col md:gap-4">
          <div className="flex items-end justify-end">
            <button
              className={`${openMenu ? "flex " : "hidden"}`}
              onClick={() => setOpenMenu()}
            >
              <X />
            </button>
          </div>
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="flex text-center items-center justify-center md:flex-col md:items-center md:text-size-16 text-size-14 px-4"
              onClick={() => setOpenMenu("open")}
            >
              <div className="flex flex-col gap-2 items-center text-nowrap">
                <LinkButton
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-verde font-semibold"
                      : "text-black"
                  } transition-colors`}
                >
                  {item.label}
                </LinkButton>

                <Separador
                  size="small"
                  variant={pathname === item.href ? "secondary" : "primary"}
                />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
