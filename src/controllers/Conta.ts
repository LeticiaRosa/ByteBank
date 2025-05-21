import { ValidaDebito } from "../decorators/validaDebito";
import { ValidaDeposito } from "../decorators/validaDeposito";
import { Armazenador } from "./Armazenador";

export type TransacaoType = {
  tipoTransacao: TipoTransacao;
  valor: number;
  data: Date;
};

export type GrupoTransacao = {
  label: string;
  transacoes: TransacaoType[];
};

export enum TipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

export class Conta {
  protected nome: string;
  protected saldo: number = Number(Armazenador.obter<number>("saldo")) || 0;
  private transacoes: TransacaoType[] = (() => {
    try {
      const storedData = Armazenador.obter<string>(
        "transacoes",
        (key: string, value: unknown) => {
          if (key === "data" && typeof value === "string") {
            return new Date(value);
          }
          return value;
        }
      );

      return storedData && storedData.trim() !== ""
        ? JSON.parse(storedData)
        : [];
    } catch (error) {
      console.error("Erro ao carregar transações:", error);
      return [];
    }
  })();

  constructor(nome: string) {
    this.nome = nome;
  }

  getGruposTransacoes(): GrupoTransacao[] {
    const gruposTransacoes: GrupoTransacao[] = [];
    const listaTransacoes: TransacaoType[] = this.transacoes;
    const transacoesOrdenadas = listaTransacoes.sort(
      (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
    );

    let labelAtualGrupoTransacao: string = "";

    for (const transacao of transacoesOrdenadas) {
      const labelGrupoTransacao: string = new Date(
        transacao.data
      )?.toLocaleDateString("pt-br", {
        month: "long",
        year: "numeric",
      });
      if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
        labelAtualGrupoTransacao = labelGrupoTransacao;
        gruposTransacoes.push({
          label: labelGrupoTransacao,
          transacoes: [],
        });
      }
      const lastGroup = gruposTransacoes.at(-1);
      if (lastGroup) {
        lastGroup.transacoes.push(transacao);
      }
    }

    return gruposTransacoes;
  }

  getSaldo() {
    return this.saldo;
  }

  getDataAcesso(): Date {
    return new Date();
  }

  registrarTransacao(novaTransacao: TransacaoType): void {
    if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
      this.depositar(novaTransacao.valor);
    } else if (
      novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA ||
      novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO
    ) {
      this.debitar(novaTransacao.valor);
      novaTransacao.valor *= -1;
    } else {
      throw new Error("Tipo de Transação é inválido!");
    }
    this.transacoes.push(novaTransacao);
    Armazenador.salvar<string>("transacoes", JSON.stringify(this.transacoes));
  }

  @ValidaDebito
  debitar(valor: number): void {
    this.saldo -= valor;
    Armazenador.salvar<string>("saldo", this.saldo.toString());
  }

  @ValidaDeposito
  depositar(valor: number): void {
    this.saldo += valor;
    Armazenador.salvar<string>("saldo", this.saldo.toString());
  }
}

// export class ContaPremium extends Conta {
//   registrarTransacao(transacao: TransacaoType): void {
//     if (transacao.tipoTransacao === TipoTransacao.DEPOSITO) {
//       console.log("Ganhou um bonus de 0.50 centavois");
//       transacao.valor += 0.5;
//     }
//     super.registrarTransacao(transacao);
//   }
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default new Conta("Conta Corrente");
