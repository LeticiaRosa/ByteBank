"use client";
import Image from "next/image";
import { HeaderBase } from "./HeaderBase";

export default function HeaderHome() {
  return (
    <HeaderBase>
      <div className="flex items-center justify-between gap-6 text-white ">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={2}
          className="xs:flex hidden"
        />
        <p>Sobre</p>
        <p>Serviços</p>
      </div>

      <div className="flex items-center justify-end gap-6 text-white ">
        <span className="text-size-14 xs:flex hidden">Abrir minha conta</span>
        <span className="text-size-14 xs:flex hidden">Já tenho conta</span>
      </div>
    </HeaderBase>
  );
}
