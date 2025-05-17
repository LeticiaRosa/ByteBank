import Extrato from "../../components/banking/Extrato";
import NovaTransacao from "../../components/banking/Nova-transacao";
import CardInfo from "../../components/layout/CardInfo";

export default function Services() {
  return (
    <div className="container-page">
      <div className="flex flex-col gap-6 w-full">
        <CardInfo
          userName="Letícia Rosa de Oliveira"
          date={new Date()}
          balance={10000.0}
        />
        <NovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
