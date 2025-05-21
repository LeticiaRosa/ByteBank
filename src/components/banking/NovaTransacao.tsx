"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ui/form/Button";
import Input from "../ui/form/Input";
import Label from "../ui/form/Label";
import Select from "../ui/form/Select";
import { z } from "zod";
import Conta, { TipoTransacao, TransacaoType } from "../../controllers/Conta";

const formSchema = z.object({
  tipoTransacao: z.enum(["Depósito", "Transferência", "Pagamento de Boleto"], {
    message: "Tipo de transação é obrigatório",
  }),
  valor: z.coerce
    .number({
      message: "Valor inválido",
    })
    .min(0.01, { message: "O valor deve ser maior que zero" })
    .max(1000000, { message: "O valor deve ser menor que 1.000.000" }),
});

type Inputs = z.infer<typeof formSchema>;

export default function NovaTransacao() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(formSchema), mode: "onBlur" });

  function handleOnSubmit(data: Inputs) {
    const novaTransacao: TransacaoType = {
      tipoTransacao: data.tipoTransacao as TipoTransacao,
      valor: data.valor,
      data: new Date(),
    };
    Conta.registrarTransacao(novaTransacao);
  }

  return (
    <section className="card gap-2">
      <h2 className="title">Nova transação</h2>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="campo">
          <Select
            variant="primary"
            className="campo-input"
            options={[
              { value: "", label: "Selecione o tipo de transação" },
              { value: "Depósito", label: "Depósito" },
              { value: "Transferência", label: "Transferência" },
              { value: "Pagamento de Boleto", label: "Pagamento de Boleto" },
            ]}
            id="tipoTransacao"
            {...register("tipoTransacao")}
          />
          {errors.tipoTransacao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.tipoTransacao.message}
            </p>
          )}
        </div>
        <div className="campo">
          <Label htmlFor="valor">Valor:</Label>
          <Input
            type="number"
            id="valor"
            placeholder="0,00"
            step=".01"
            min="0.01"
            {...register("valor")}
          />
          {errors.valor && (
            <p className="text-red-500 text-sm mt-1">{errors.valor.message}</p>
          )}
        </div>

        <div className="campo">
          <Button type="submit">Concluir transação</Button>
        </div>
      </form>
    </section>
  );
}
