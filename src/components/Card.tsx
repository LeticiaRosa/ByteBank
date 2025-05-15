export function Card() {
  return (
    <div className="card bg-verde shadow-md rounded-lg flex flex-row items-start justify-center min-h-50 text-white gap-40">
      <div className="flex flex-col gap-2">
        <h2 className="title text-white">Olá, Joana! :) </h2>
        <p className="text-white text-size-14">Quinta-feira, 13/05/2025</p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 p-8">
        <h3 className="text-lg font-semibold">Saldo</h3>
        <hr className="w-34 h-0.5 border-0 rounded-sm bg-laranja-grafico" />
        <p className=" text-size-14">Conta Corrente</p>
        <p className="text-2xl">R$ 1.500,00</p>
      </div>
    </div>
  );
}
