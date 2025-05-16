"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Menu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Início" },
    { href: "/transferencias", label: "Transferências" },
    { href: "/investimentos", label: "Investimentos" },
    { href: "/outros", label: "Outros Serviços" },
  ];

  return (
    <nav className="menu">
      <ul className="flex flex-row justify-between gap-2 md:flex-col md:gap-4">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className="flex text-center items-center justify-center md:flex-col md:items-center md:text-size-16  text-size-14 gap-4"
          >
            <div className="flex flex-col gap-2">
              <Link
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-verde font-semibold"
                    : "text-black"
                } transition-colors`}
              >
                {item.label}
              </Link>
              <hr
                className={` w-18 h-0.5 border-0 rounded-sm ${
                  pathname === item.href ? "bg-verde" : "bg-cinza"
                }`}
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
