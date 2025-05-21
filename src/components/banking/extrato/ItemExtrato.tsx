import { Pencil, Trash } from "phosphor-react";
import { Separador } from "../../ui/form/Separador";
import Button from "../../ui/form/Button";

export interface ItemExtratoProps {
  id: string;
  tipo: string;
  valor: number;
  data: string;
}

export default function ItemExtrato({
  id,
  tipo,
  valor,
  data,
}: ItemExtratoProps) {
  return (
    <div
      key={id}
      className={`transacao-item ${
        tipo === "Depósito" ? "text-verde-light" : "text-laranja-grafico"
      }`}
    >
      <div className="flex flex-row items-center gap-4 justify-between w-full">
        <p className=" text-nowrap">{tipo}</p>
        <p className="text-gray-500 text-xs ">
          {new Date(data).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <h6>R$ {valor}</h6>
        <div className="flex flex-row gap-2">
          <Button variant="icon">
            <Pencil />
          </Button>
          <Button variant="icon">
            <Trash />
          </Button>
        </div>
      </div>

      <Separador size="large" />
    </div>
  );
}
