"use client";
import { redirect } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  setOpenMenu: () => void;
}

export function Header({ setOpenMenu }: HeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center bg-verde py-6 w-full overscroll-none">
      <div className="container max-w-250 justify-between flex-row max-xs:items-center ">
        <div className="flex items-center justify-between gap-6">
          <Image
            src="/menu.png"
            alt="Menu"
            width={32}
            height={32}
            className="xs:hidden"
            onClick={() => setOpenMenu()}
          />
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={2}
            className="xs:flex hidden"
            onClick={() => redirect("/home")}
          />
        </div>

        <div className="flex items-center justify-end gap-6 text-white ">
          <span className="text-size-14 xs:flex hidden">
            Joana da Silva Oliveira
          </span>
          <Image
            src="/Avatar.png"
            alt="Ícone de usuário"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
}
