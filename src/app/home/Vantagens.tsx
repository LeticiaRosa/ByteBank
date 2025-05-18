import Image from "next/image";

export default function Vantagens() {
  const vantagens = [
    {
      title: "Conta e cartão gratuitos",
      description:
        "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
      src: "/gift.svg",
    },
    {
      title: "Saques sem custo",
      description:
        "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
      src: "/hand-coins.svg",
    },
    {
      title: "Programa de pontos",
      description:
        "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
      src: "/sparkle.svg",
    },
    {
      title: "Seguro Dispositivos",
      description:
        "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
      src: "/devices.svg",
    },
  ];

  return (
    <div>
      <p className="text-center font-semibold text-white text-2xl mt-10">
        Vantagens do nosso banco:{" "}
      </p>
      <div className="flex flex-row items-center justify-center gap-8">
        {vantagens.map((vantagem, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 text-center pt-10"
          >
            <Image
              src={vantagem.src}
              alt={vantagem.title}
              width={50}
              height={50}
              className="text-verde-claro "
            />
            <p className="text-white font-semibold p-2">{vantagem.title}</p>
            <p className="text-xs text-cinza">{vantagem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
