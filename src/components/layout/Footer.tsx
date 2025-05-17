export default function Footer() {
  return (
    <footer className="bg-black text-white flex bottom-0 w-full ">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="flex flex-row items-center justify-between">
          <div className="p-4">
            <p>Serviços</p>
            <p>Conta corrente</p>
            <p>Conta PJ</p>
            <p>Cartão de crédito</p>
          </div>
          <div className="p-4">
            <p>Contato</p>
            <p>0800 004 250 08</p>
            <p>meajuda@bytebank.com.br</p>
            <p>ouvidoria@bytebank.com.br</p>
          </div>
          <div className="p-4">
            <p>Desenvolvido por Alura</p>
            <p>0800 004 250 08</p>
            <p>icons</p>
            <p> rede sociais</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
