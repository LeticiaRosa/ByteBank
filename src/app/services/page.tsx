import Extrato from "../../components/banking/extrato/Extrato";
import NovaTransacao from "../../components/banking/NovaTransacao";
import CardInfo from "../../components/layout/CardInfo";

export default function Services() {
  return (
    <div className="container-page">
      <div className="flex flex-col gap-6 w-full">
        <CardInfo />
        <NovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
