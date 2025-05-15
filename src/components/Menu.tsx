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
      <ul className="flex flex-col items-center justify-center gap-4">
        {menuItems.map((item) => (
          <li
            key={item.href}
            className="text-center flex flex-col items-center gap-4"
          >
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
              className={`w-24 h-0.5 border-0 rounded-sm  ${
                pathname === item.href ? "bg-verde" : "bg-cinza"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
