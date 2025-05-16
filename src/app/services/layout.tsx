import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export default function OutrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="center">
        <div className="container pt-6 max-w-250">
          <Menu />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  );
}
