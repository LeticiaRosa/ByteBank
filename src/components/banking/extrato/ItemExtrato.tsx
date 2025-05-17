import { Separador } from "../../ui/form/Separador";

export interface ItemExtratoProps {
  id: number;
  tipo: string;
  valor: number;
}

export default function ItemExtrato({ id, tipo, valor }: ItemExtratoProps) {
  return (
    <div
      key={id}
      className={` transacao-item ${
        tipo === "Depósito" ? "text-verde-light" : "text-laranja-grafico"
      }`}
    >
      <p>{tipo}</p>
      <h6>
        {tipo === "Depósito" ? "+" : "-"} R$ {valor}
      </h6>
      <Separador size="large" />
    </div>
  );
}
