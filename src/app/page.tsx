import { Card } from "../components/Card";
import NovaTransacao from "../components/Nova-transacao";

export default function Home() {
  return (
    <div className="flex flex-row items-start justify-center pt-4">
      <div className="flex flex-col gap-4">
        <Card />
        <NovaTransacao />
      </div>
    </div>
  );
}
