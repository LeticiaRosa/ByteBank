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
              <div
                key={transacao.id}
                className={` transacao-item ${
                  transacao.tipo === "Depósito"
                    ? "text-verde-claro"
                    : "text-laranja-grafico"
                }`}
              >
                <p>{transacao.tipo}</p>
                <h6>
                  {transacao.tipo === "Depósito" ? "+" : "-"} R${" "}
                  {transacao.valor}
                </h6>
                <hr className="w-40 h-0.5 border-0 bg-cinza my-2" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
