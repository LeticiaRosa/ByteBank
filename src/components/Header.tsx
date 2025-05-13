import { UserCircle } from "phosphor-react";

interface HeaderProps {
  name: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className="flex flex-col items-center justify-center bg-verde h-24">
      <div className="container">
        <div className="flex items-center justify-center gap-2 text-white px-4">
          <span className="text-size-14">{props.name}</span>
          <UserCircle size={40} weight="thin" className="bg-verde" />
        </div>
      </div>
    </header>
  );
}
