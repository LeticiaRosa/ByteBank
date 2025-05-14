export function Card() {
  return (
    <div className="card bg-white shadow-md rounded-lg flex flex-row items-center justify-center ">
      <div>
        <h2 className="text-xl font-bold ">Olá, Joana! :) </h2>
        <p className="text-gray-700">Quinta-feira, 13/05/2025</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Seu saldo:</h3>
        <p className="text-gray-700">Conta Corrente</p>
        <p className="text-2xl font-bold text-verde">R$ 1.500,00</p>
      </div>
    </div>
  );
}
