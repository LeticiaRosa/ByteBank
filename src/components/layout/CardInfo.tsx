"use client";
import { useConta } from "../../contexts/ContaContext";

export default function CardInfo() {
  const { saldo } = useConta();
  const userName = "Joana da Silva Oliveira";
  return (
    <div className="card bg-verde flex flex-row w-full justify-between text-white rounded-lg">
      <div className="flex flex-col gap-2 p-4">
        <h2 className="title text-white text-nowrap">
          Olá, {userName.split(" ")[0]}! :)
        </h2>
        <p className="text-white text-size-14">
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 py-8 px-4">
        <h3 className="text-lg font-semibold">Saldo</h3>
        <hr className="w-34 h-0.5 border-0 rounded-sm bg-laranja-grafico" />
        <p className="text-size-14 text-nowrap">Conta Corrente</p>
        <p className="text-2xl text-nowrap">R$ {saldo}</p>
      </div>
    </div>
  );
}
