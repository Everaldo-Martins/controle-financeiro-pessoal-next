import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "CFP - Controle Financeiro Pessoal",
  description: "Projeto de controle financeiro pessoal, para administrarção das contas mensais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">      
      <body className="w-full min-h-dvh antialiased">
        <Header />
        <main className="flex-1 w-full h-auto p-5 flex flex-col justify-start items-center gap-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
