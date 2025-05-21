import { createContext, useContext, useState } from "react";
import Conta, { GrupoTransacao, TransacaoType } from "../controllers/Conta";

type ContaContextType = {
  saldo: number;
  grupoTransacoes: GrupoTransacao[];
  registrarTransacao: (transacao: TransacaoType) => void;
};

const ContaContext = createContext({} as ContaContextType);

export function ContaProvider({ children }: { children: React.ReactNode }) {
  const [saldo, setSaldo] = useState<number>(Conta.getSaldo());
  const [grupoTransacoes, setGrupoTransacoes] = useState<GrupoTransacao[]>(
    Conta.getGruposTransacoes()
  );

  function registrarTransacao(transacao: TransacaoType) {
    Conta.registrarTransacao(transacao);
    setGrupoTransacoes(Conta.getGruposTransacoes());
    setSaldo(Conta.getSaldo());
  }

  return (
    <ContaContext.Provider
      value={{
        saldo,
        grupoTransacoes,
        registrarTransacao,
      }}
    >
      {children}
    </ContaContext.Provider>
  );
}

export function useConta() {
  const context = useContext(ContaContext);
  if (!context) {
    throw new Error("useConta deve ser usado dentro de um ContaProvider");
  }
  return context;
}
