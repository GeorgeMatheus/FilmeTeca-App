import { useEffect, useState } from "react";
import { criarAutenticacao } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { Usuario } from "../../hooks/tipos";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [user, setUser] = useState<Usuario | null>(null)
  const api = criarAutenticacao();


  useEffect(() =>{
    const validarToken = async () => {
      const storageData = localStorage.getItem('authToken')

      if(storageData) {
        const data = await api.recuperaUsuario(storageData)

        if(data) {
          setUser(data)
        }
      }
    }
    validarToken()
  }, [])

  const login = async (email: string, senha: string) => {
    const token = await api.login(email, senha)

    if(token){
      const user = await api.recuperaUsuario(token)
      setUser(user)
      setToken(token)
      return true

    }

    return false
  }

  const logout = async () => {
    // await api.logout()
    setUser(null)
    setToken('')

  }

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token)
  }

  const cadastro = async (nome: string, email:string, senha:string) => {
    const cadastro = await api.cadastro(nome, email, senha)

    if(cadastro) {
      return true
    }

    return false
  }


  return (
    <AuthContext.Provider value={{user, login, logout, cadastro}}>
      {children}
    </AuthContext.Provider>
  )
}