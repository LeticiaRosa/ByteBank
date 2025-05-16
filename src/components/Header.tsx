"use client";
import Image from "next/image";

interface HeaderProps {
  setOpenMenu: () => void;
}

export function Header({ setOpenMenu }: HeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center bg-verde py-6 w-full overscroll-none">
      <div className="container max-xs:flex-row max-xs:items-center max-xs:justify-between">
        <Image
          src="/menu.png"
          alt="Menu"
          width={32}
          height={32}
          className="xs:hidden"
          onClick={() => setOpenMenu()}
        />
        <div className="flex items-center justify-end gap-6 text-white px-4">
          <span className="text-size-14">Joana da Silva Oliveira</span>
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
