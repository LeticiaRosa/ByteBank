export default function Vantagens() {
  const vantagens = [
    {
      title: "Conta e cartão gratuitos",
      description:
        "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
    },
    {
      title: "Saques sem custo",
      description:
        "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
    },
    {
      title: "Programa de pontos",
      description:
        "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
    },
    {
      title: "Seguro Dispositivos",
      description:
        "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
    },
  ];

  return (
    <div>
      <p className="text-center font-semibold text-white">
        Vantagens do nosso banco:{" "}
      </p>
      <div className="flex flex-row items-center justify-center  gap-8">
        {vantagens.map((vantagem, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-10 text-center"
          >
            <p className="text-verde-claro">✔</p>
            <p className="text-verde-claro font-semibold">{vantagem.title}</p>
            <p className="text-xs text-cinza">{vantagem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
