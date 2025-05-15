export function Extrato() {
  return (
    <div className="card bg-white shadow-md rounded-lg flex flex-row items-start justify-center flex-1 min-w-20">
      <aside className="extrato">
        <h3 className="title font-semibold text-preto pb-4">Extrato</h3>
        <div className="registro-transacoes">
          <div className="transacoes-group">
            <p className="mes-group">Novembro</p>
            <p className="transacao-item">
              <span>Depósito</span>
              <h6>R$ 150</h6>
            </p>
          </div>
          <div className="transacoes-group">
            <p className="mes-group">Novembro</p>
            <p className="transacao-item">
              <span>Depósito</span>
              <h6>R$ 150</h6>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
