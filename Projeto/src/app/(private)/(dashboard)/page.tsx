'use client'

import { DataTable } from "./data-table";
import { useMemo, useState } from "react";
import Formulario from "@/components/formulario";
import Usuario from "@/data/model/Usuario";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { MoreHorizontal, UserMinus, UserPen } from "lucide-react";
import { useAppContext } from "@/providers/UserContext";
import { v4 as uuid } from 'uuid';
import { toast } from "sonner"

export default function Home() {
  const { state, setState } = useAppContext();
  const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(null)
  const [isOpenForm, setIsOpenForm] = useState(false)

  // Função para remover um usuário
  const handleDelete = (id: string) => {
    setState({ ...state, users: state.users.filter((u) => u.id !== id) });
    toast.success("Usuario removido.")
  };

  // Função para editar um usuário 
  const handleEdit = (user: Usuario) => {
    setUsuarioAtual(user)
    setIsOpenForm(!isOpenForm)
  };

  const handleSalvar = async (data: Usuario) => {

    const usuarioExistente = state.users.find((u) => u.id === data?.id)

    if (usuarioExistente) {
      const novosUsuarios = state.users.map((u) => {
        return u.id === data.id ? data : u;
      })
      setState({ ...state, users: novosUsuarios })
      toast.success("Usuario Alterado.")
    } else {
      data.id = uuid()
      data.status = "ativo"
      data.data_cadastro = new Date().toLocaleDateString()
      setState({ ...state, users: [...state.users, data as Usuario] })
      toast.success("Usuario Cadastrado.")
    }

    setIsOpenForm(!isOpenForm)
    setUsuarioAtual(null)

  }

  const handleCancelar = () => {
    setIsOpenForm(!isOpenForm)
    setUsuarioAtual(null)
  }

  const handleOpenForm = () => {
    setIsOpenForm(!isOpenForm)
    setUsuarioAtual(null)
  }

  // Definição das colunas da tabela
  const columns = useMemo<ColumnDef<Usuario>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "login", header: "Login" },
      { accessorKey: "email", header: "E-mail" },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "data_cadastro", header: "Data de Cadastro" },
      {
        header: "Ações",
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => handleEdit(row.original)}
              >
                <UserPen />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(row.original.id)}
              >
                <UserMinus />
                Remover
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );


  return (
    <>
      <div className="container mx-auto p-10">
        <Formulario
          usuario={usuarioAtual}
          openForm={isOpenForm}
          cancelar={handleCancelar}
          abrirForm={handleOpenForm}
          salvarUsuario={handleSalvar}
        />
        <DataTable columns={columns} data={state.users} />
      </div>
    </>
  );
}
