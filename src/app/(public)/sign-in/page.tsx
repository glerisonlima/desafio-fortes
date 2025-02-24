'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/providers/UserContext";
import { createCookies } from "@/services/userActions";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignIn() {
    
    const { state, setState } = useAppContext();
    const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")   

    function handlerLogin(){
        event?.preventDefault()
        if(usuario && senha){
            const login = state.users.find((u: { login: string; }) => u.login == usuario)    
            if(login && login.senha == senha){
                createCookies()
                router.push('/')
            }
        }
    }
    

    return (
        <main className="flex justify-center items-center h-screen">
            <Card className="w-[450px]">
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
                                />
                            </div>
                            <div className="gap-2 flex flex-col">
                                <Label>Senha</Label>
                                <Input type="password"
                                    value={senha}
                                    onChange={e => setSenha(e.target.value)}
                                />
                            </div>
                            <Button 
                                 
                                className="w-full mt-6"
                                onClick={handlerLogin}
                                >Fazer Login</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}