import Button from "../ui/form/Button";
import Input from "../ui/form/Input";
import Label from "../ui/form/Label";
import Select from "../ui/form/Select";

export default function NovaTransacao() {
  return (
    <section className="card gap-2">
      <h2 className="title">Nova transação</h2>
      <form>
        <div className="campo">
          <Select
            variant="primary"
            options={[
              { value: "", label: "Selecione o tipo de transação" },
              { value: "Depósito", label: "Depósito" },
              { value: "Transferência", label: "Transferência" },
              { value: "Pagamento de Boleto", label: "Pagamento de Boleto" },
            ]}
            id="tipoTransacao"
            name="tipoTransacao"
          />
        </div>
        <div className="campo">
          <Label htmlFor="descricao">Valor:</Label>
          <Input
            type="number"
            name="valor"
            id="valor"
            placeholder="0,00"
            step=".01"
            min="0"
            required
          />
        </div>

        <div className="campo">
          <Button type="submit">Concluir transação</Button>
        </div>
      </form>
    </section>
  );
}
