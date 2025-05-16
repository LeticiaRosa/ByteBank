import type { Metadata } from "next";
import "../../styles/globals.css";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

export const metadata: Metadata = {
  title: "Byte Bank",
  description: "Seu banco digital",
  keywords: "banco, digital, byte bank",
  creator: "Letícia Rosa",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full w-full">
      <body>
        <Header />
        <div className="center">
          <div className="container pt-6 max-w-250">
            <Menu />
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
