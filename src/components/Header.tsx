import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-verde py-6 w-full">
      <div className="container items-end">
        <div className="flex items-center justify-center gap-6 text-white px-4">
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
