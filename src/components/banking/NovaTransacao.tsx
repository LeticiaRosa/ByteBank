"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../ui/form/Button";
import Input from "../ui/form/Input";
import Label from "../ui/form/Label";
import Select from "../ui/form/Select";
import { z } from "zod";
import { TipoTransacao, TransacaoType } from "../../controllers/Conta";
import { useConta } from "../../contexts/ContaContext";
import { toast, ToastContainer } from "react-toastify";

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
  const { registrarTransacao } = useConta();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(formSchema), mode: "onBlur" });

  function handleOnSubmit(data: Inputs) {
    const novaTransacao: TransacaoType = {
      tipoTransacao: data.tipoTransacao as TipoTransacao,
      valor: data.valor,
      data: new Date(),
    };
    try {
      registrarTransacao(novaTransacao);
      toast("Transação Efetuada com Sucesso! ", {
        position: "top-right",
        type: "success",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,

        theme: "light",
      });
      reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : typeof error === "string"
          ? error
          : "Ocorreu um erro ao realizar a transação";

      if (
        errorMessage.toLowerCase().includes("saldo") ||
        errorMessage.toLowerCase().includes("valor")
      ) {
        setError("valor", {
          type: "manual",
          message: errorMessage,
        });
      } else {
        setError("tipoTransacao", {
          type: "manual",
          message: errorMessage,
        });
      }
    }
  }

  return (
    <section className="card gap-2">
      <h2 className="title">Nova transação</h2>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="pl-2">
        <div className="campo">
          <Select
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Processando..." : "Concluir transação"}
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}
