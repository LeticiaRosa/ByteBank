"use client";
import { useState } from "react";
import { useConta } from "../../contexts/ContaContext";
import { Eye, EyeClosed } from "phosphor-react";
import { formatadorValor } from "../../utils/formatadorValor";

export default function CardInfo() {
  const { saldo } = useConta();
  const [showSaldo, setShowSaldo] = useState(false);
  const userName = "Joana da Silva Oliveira";
  const saldoFormatado = formatadorValor.format(saldo);

  return (
    <div className="card bg-verde flex flex-row w-full justify-between text-white rounded-lg">
      <div className="flex flex-col gap-2 p-2">
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
      <div className="flex flex-col items-start justify-center gap-2 py-4 px-2">
        <div className="flex flex-row items-center justify-between w-full">
          <h3 className="text-size-18 font-semibold">Saldo</h3>
          <p
            className="text-size-25 text-nowrap cursor-pointer"
            onClick={() => setShowSaldo(!showSaldo)}
          >
            {showSaldo ? <Eye /> : <EyeClosed />}
          </p>
        </div>

        <hr className="w-34 h-0.5 border-0 rounded-sm bg-laranja-grafico" />
        <p className="text-size-14 text-nowrap">Conta Corrente</p>
        {showSaldo ? (
          <span className="text-white text-size-20">{saldoFormatado}</span>
        ) : (
          <span className="text-white text-size-20">*****</span>
        )}
      </div>
    </div>
  );
}
