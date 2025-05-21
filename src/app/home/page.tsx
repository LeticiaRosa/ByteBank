import Image from "next/image";
import HeaderHome from "./components/HeaderHome";
import Vantagens from "./Vantagens";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <HeaderHome />
      <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-b from-white to-verde pb-4">
        <div className="container pt-6 max-w-250 flex flex-col items-center ">
          <div className="flex flex-col items-center justify-center text-center md:flex-row ">
            <div>
              <p className="text-3xl pt-10 font-semibold text-verde">
                Experimente mais liberdade no controle da sua vida financeira.
              </p>
              <p className="text-size-25 p-10 text-verde">
                Crie sua conta com a gente!
              </p>
            </div>
            <Image
              src="/image.png"
              alt="User Interaction"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg shadow-verde"
            />
          </div>
          <Vantagens />
        </div>
      </div>
      <Footer />
    </div>
  );
}
