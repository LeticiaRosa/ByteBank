"use client";
import Conta from "../../../controllers/Conta";
import ItemExtrato from "./ItemExtrato";

interface Transacao {
  id: number;
  tipo: string;
  valor: number;
  data: string;
}

interface Extrato {
  mes: [
    {
      id: number;
      tipo: string;
      valor: number;
      data: string;
    }
  ];
}

export default function Extrato() {
  console.log("Extrato");
  const transacoes = Conta.getGruposTransacoes();
  console.log(transacoes);
  const extrato: Transacao[] = [
    {
      id: 1,
      tipo: "Depósito",
      valor: 150,
      data: "2023-11-01",
    },
    {
      id: 2,
      tipo: "Saque",
      valor: 50,
      data: "2023-11-02",
    },
    {
      id: 3,
      tipo: "Transferência",
      valor: 100,
      data: "2023-12-03",
    },
    {
      id: 4,
      tipo: "Depósito",
      valor: 200,
      data: "2023-11-04",
    },
    {
      id: 5,
      tipo: "Saque",
      valor: 75,
      data: "2023-12-05",
    },
  ];

  const reduceMes: Record<string, Transacao[]> = extrato.reduce<
    Record<string, Transacao[]>
  >((acc, transacao) => {
    const mes = transacao.data.split("-")[1];
    if (!acc[mes]) {
      acc[mes] = [];
    }
    acc[mes].push(transacao);
    return acc;
  }, {});

  return (
    <aside className="card max-md:items-center">
      <h3 className="title pb-8">Extrato</h3>
      <div className="transacoes">
        {Object.entries(reduceMes).map(([mes, transacoes]) => (
          <div key={mes}>
            <p className="mes-group">
              {new Intl.DateTimeFormat("pt-BR", {
                month: "long",
                year: "numeric",
              }).format(new Date(`2023-${mes}-01`))}
            </p>
            {transacoes.map((transacao) => (
              <ItemExtrato
                key={transacao.id}
                id={transacao.id}
                tipo={transacao.tipo}
                valor={transacao.valor}
              />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
