import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Micael Contador",
  description: "Sou Micael, tenho 23 anos e sou formado em contabilidade pela Universidade Estadual da Bahia (UNEB). Atualmente, trabalho como contador em uma empresa de gestão do agronegócio, atuando como  consultor e, também, atuo atendendo e ajudando empresários, ajudando-os a crescer e descomplicar sua vida tributária!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
