
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/UserContext";
import Image from "next/image";
import logo from "@/assets/logo_fortes.svg"
import { Toaster } from "@/components/ui/sonner"

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio-Fortes",
  description: "Sistema de cadastro de login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="pt-BR">
      <body
        className={`${fontSans.variable} min-h-screen font-sans antialiased dark`}
      >
        <AppProvider>
          <header className="w-full bg-slate-200 h-16 flex items-center">
            <Image className="pl-10" src={logo} sizes="32" alt="logo da empresa fortes" />
          </header>
          <Toaster richColors />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
