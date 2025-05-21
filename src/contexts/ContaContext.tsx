import { createContext, useContext, useEffect, useState } from "react";
import Conta, { GrupoTransacao } from "../controllers/Conta";
import { Transacao } from "../components/banking/NovaTransacao";

type ContaContextType = {
  saldo: number;
  gruposTransacoes: GrupoTransacao[];
  registrarTransacao: (transacao: Transacao) => void;
};

const ContaContext = createContext({} as ContaContextType);

export function ContaProvider({ children }: { children: React.ReactNode }) {
  const [saldo, setSaldo] = useState<number>(0);
  const [gruposTransacoes, setGruposTransacoes] = useState<GrupoTransacao[]>(
    []
  );

  // Usa useEffect para acessar localStorage apenas no cliente
  useEffect(() => {
    setSaldo(Conta.getSaldo());
    setGruposTransacoes(Conta.getGruposTransacoes());
  }, []);

  function registrarTransacao(transacao: Transacao) {
    Conta.registrarTransacao(transacao);
    setGruposTransacoes(Conta.getGruposTransacoes());
    setSaldo(Conta.getSaldo());
  }

  return (
    <ContaContext.Provider
      value={{
        saldo,
        gruposTransacoes,
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
