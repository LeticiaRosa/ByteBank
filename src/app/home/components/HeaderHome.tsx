"use client";
import Image from "next/image";
import { HeaderBase } from "../../../components/layout/HeaderBase";
import Button from "../../../components/ui/form/Button";
import LinkButton from "../../../components/ui/form/Link";

export default function HeaderHome() {
  return (
    <HeaderBase>
      <div className="flex items-center justify-between gap-6 text-white ">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={2}
          className="xs:hidden md:flex hidden"
        />
        <Image
          src="/logo-icone.png"
          alt="Logo"
          width={40}
          height={40}
          className="md:hidden flex"
        />

        <LinkButton href="/sobre">Sobre</LinkButton>
        <LinkButton href="/">Serviços</LinkButton>
      </div>

      <div className="flex items-center justify-end gap-6 text-white">
        <Button variant="secondary">Abrir minha conta</Button>
        <Button variant="outline">Já tenho conta</Button>
      </div>
    </HeaderBase>
  );
}
