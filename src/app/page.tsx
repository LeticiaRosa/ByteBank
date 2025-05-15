import { Card } from "../components/Card";
import { Extrato } from "../components/Extrato";
import NovaTransacao from "../components/Nova-transacao";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col gap-6">
        <Card />
        <NovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
