export default function NovaTransacao() {
  return (
    <section className="card">
      <h2 className="title">Nova transação</h2>
      <form>
        <div className="campo">
          <select
            name="tipoTransacao"
            id="tipoTransacao"
            className="campo-input"
            required
          >
            <option value="">Selecione o tipo de transação</option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
            <option value="Pagamento de Boleto">Pagamento de Boleto</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="valor">Valor:</label>
          <br />
          <input
            type="number"
            name="valor"
            id="valor"
            className="campo-input"
            placeholder="0,00"
            step=".01"
            min="0"
            required
          />
        </div>

        <div className="campo">
          <button type="submit" className="btn">
            Concluir transação
          </button>
        </div>
      </form>
    </section>
  );
}
