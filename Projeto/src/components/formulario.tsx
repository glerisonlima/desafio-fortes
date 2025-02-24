import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Usuario from "@/data/model/Usuario";
import { useEffect } from "react";
import { toast } from "sonner"

export interface FormularioProps {
  usuario: Partial<Usuario | null>;
  openForm: boolean;
  cancelar: () => void;
  abrirForm: () => void;
  salvarUsuario: (u: Usuario) => void;
}


export default function Formulario({ usuario, openForm, cancelar, abrirForm, salvarUsuario }: FormularioProps) {


  const { register, handleSubmit, setValue } = useForm<Usuario>()

  useEffect(() => {
    if (usuario) {
      setValue("id", usuario?.id ?? "")
      setValue("login", usuario?.login ?? "")
      setValue("email", usuario?.email ?? "")
      setValue("senha", usuario?.senha ?? "")
      setValue("status", usuario?.status ?? "")
      setValue("data_cadastro", usuario?.data_cadastro ?? "")
    } else {
      setValue("id", "")
      setValue("login", "")
      setValue("email", "")
      setValue("senha", "")
      setValue("senha", "")
      setValue("senha", "")
    }
  }, [usuario])

  const handleSalvar = (data: Usuario) => {
    salvarUsuario(data)
  }


  return (
    <div>
      <h1 className="text-2xl">Cadastro de Usuários</h1>
      <Sheet open={openForm}>
        <SheetTrigger asChild>
          <Button className="mt-6" onClick={abrirForm}>
            <CirclePlus />
            Cadastrar Usuário
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Novo Cadastro</SheetTitle>
            <SheetDescription>
              Informe os dados para cadastrar o usuário.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit(handleSalvar, (erros) => toast.error("Erro ao preencher o formulario."))}>
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <Input className="hidden"
                  {...register('id')}
                />
              </div>
              <div>
                <Input className="hidden"
                  {...register('status')}
                />
              </div>
              <div>
                <Input className="hidden"
                  {...register('data_cadastro')}
                />
              </div>
              <div>
                <Label>E-mail</Label>
                <Input
                  type="email"
                  {...register('email', { required: true })}

                />
              </div>
              <div>
                <Label>Login</Label>
                <Input
                  type="text"
                  {...register('login', { required: true })}
                />
              </div>
              <div>
                <Label>Senha</Label>
                <Input
                  type="password"
                  {...register('senha', { required: true })}
                />
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={cancelar}
              >Cancelar</Button>
              <SheetClose asChild>
                <Button type="submit">Salvar</Button>
              </SheetClose>
            </div>
          </form>
          <SheetFooter>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}