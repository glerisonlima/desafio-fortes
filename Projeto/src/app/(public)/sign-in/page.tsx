'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/providers/UserContext";
import { createCookies } from "@/services/userActions";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"



export default function SignIn() {

    const { state } = useAppContext();
    const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const handleToggleLoading = async () => {
        setIsLoading(prev => !prev); // Atualiza com base no estado anterior
    };

    function handlerLogin() {        
        handleToggleLoading()
        event?.preventDefault()
        if (usuario && senha) {
            const login = state.users.find((u: { login: string; }) => u.login == usuario)
            if (login && login.senha == senha) {
                createCookies()
                router.push('/')
            } else {
                toast.error("Não foi possivel fazer login, verifique seu usuario e senha.")
            }
        } else {
            toast.error("Informe os dados de acesso corretamente.")
        }
        handleToggleLoading()
    }




    return (
        <main className="flex justify-center items-center h-screen">
            <Card className="w-[450px] bg--card-foreground text--card-foreground">
                <CardHeader>
                    <CardTitle>Bem Vindo</CardTitle>
                    <CardDescription>
                        Faça seu login usando os dados de acesso
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="gap-2 flex flex-col">
                            <div className="gap-2 flex flex-col">
                                <Label>Usuário</Label>
                                <Input
                                    value={usuario}
                                    onChange={e => setUsuario(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="gap-2 flex flex-col">
                                <Label>Senha</Label>
                                <Input type="password"
                                    value={senha}
                                    required
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </div>
                            <Button

                                className="w-full mt-6"
                                onClick={handlerLogin}
                            >
                                {
                                    isLoading && (<LoaderCircle className="animate-spin"/>)
                                }
                                Fazer Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}