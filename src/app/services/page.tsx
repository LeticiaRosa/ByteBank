import { Card } from "../../components/Card";
import { Extrato } from "../../components/Extrato";
import NovaTransacao from "../../components/Nova-transacao";

export default function Services() {
  return (
    <div className="container-page">
      <div className="flex flex-col gap-6 w-full">
        <Card />
        <NovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
