
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/providers/UserContext";
import Image from "next/image";
import logo from "@/assets/logo_fortes.svg"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/theme-toggle";

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
        className={`${fontSans.variable} min-h-screen font-sans antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" >
        <AppProvider>
          <header className="w-full dark:bg-slate-100 h-16 flex justify-between items-center">
            <Image className="pl-10 " src={logo} sizes="32" alt="logo da empresa fortes" />
            <ThemeToggle />
          </header>
          <Toaster richColors />
          {children}
        </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
