"use client";
import { useConta } from "../../../contexts/ContaContext";
import ItemExtrato from "./ItemExtrato";

export default function Extrato() {
  const { gruposTransacoes } = useConta();
  return (
    <aside className="card max-md:items-center">
      <h3 className="title pb-8">Extrato</h3>
      <div className="transacoes">
        {gruposTransacoes.map((transacao) => (
          <div key={transacao.label}>
            <h4 className="mes-group">{transacao.label}</h4>
            {transacao.transacoes.map((tran) => (
              <ItemExtrato
                id={tran.data.toString()}
                key={tran.data.toString()}
                tipo={tran.tipoTransacao}
                valor={tran.valor}
                data={tran.data.toString()}
              />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
