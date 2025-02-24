'use client'

import { Button } from "@/components/ui/button";
import { deleteCookies } from "@/services/userActions";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";


export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()

  const handleSair = () => {
    deleteCookies()
    router.push('/sign-in')
  }

  return (
    <>
      <Button className="fixed right-0 m-10"
        onClick={handleSair}
      >
        <X />
        Sair
      </Button>
      {children}
    </>
  );
}
