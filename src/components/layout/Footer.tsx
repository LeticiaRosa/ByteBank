import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex bottom-0 w-full ">
      <div className="container max-w-250 justify-between mx-auto flex flex-col ">
        <div className="grid grid-cols-1 xs:grid-cols-3 place-items-stretch text-md xs:text-xs md:text-lg pl-6">
          <div className="flex flex-col p-4 gap-2 ">
            <p className="font-bold">Serviços</p>
            <p>Conta corrente</p>
            <p>Conta PJ</p>
            <p>Cartão de crédito</p>
          </div>
          <div className="flex flex-col p-4 gap-2  xs:px-0">
            <p className="font-bold">Contato</p>
            <p>0800 004 250 08</p>
            <p>meajuda@bytebank.com.br</p>
            <p>ouvidoria@bytebank.com.br</p>
          </div>
          <div className="flex flex-col p-4 gap-2 xs:px-0">
            <p className="font-bold">Desenvolvido por Alura</p>
            <Image src="/logo.png" alt="Logo" width={200} height={2} />
            {/* <p> rede sociais</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
