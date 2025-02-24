"use client";

import Usuario from "@/data/model/Usuario";
import { createContext, useState, ReactNode, useContext } from "react";
import todosOsUsuarios from '@/data/constants/usuarios'

// Tipagem do estado global
interface AppState {
  user: string | null;
  theme: "light" | "dark";
  isAuthenticated: boolean;
  users: Usuario[];
}

// Tipagem do contexto
interface AppContextType {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

// Criando o contexto com um valor inicial vazio (será preenchido no Provider)
const AppContext = createContext<AppContextType | undefined>(undefined);

// Criando o Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Estado inicial
  const [state, setState] = useState<AppState>({
    user: null,
    theme: "light",
    isAuthenticated: false,
    users: todosOsUsuarios
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para facilitar o uso do contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
