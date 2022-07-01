import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Botao } from "../../components/Botao"
import { Navbar } from "../../components/Navbar/Navbar"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Filme } from "../../hooks/tipos"
import { infoFilme } from "../../hooks/useApi"



export function Perfil() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [favoritoUsuario, setFavoritosUsuario] = useState<Filme | null>(null)

 

  const gerarLista = async (id: number) => {
    
    const {data, isFetching} = await infoFilme<Filme>("filme/", id)

    return data

  }

  (auth.user?.favoritos)?.map(favorito => {
    console.log(gerarLista(favorito.idFIlme))
  })
  

  const handleLogout = async () => {
    await auth.logout()
    navigate("/login")
  }

  return (
    <>
      <Navbar />
      <h1>Ola, {auth.user?.nome}</h1>
      <h3>Aqui você pode gerenciar os seus interesses e filmes favoritos</h3>

      {/* <div>
        {(auth.user?.favoritos)?.map(favorito =>{

          return (
            
            <li key={favorito.idFilme}>
              <p>{data?.title}</p>

            </li>
            // {data, isFetching} = infoFilme<Filme>("filme/", favorito.idFilme)

          )
        })
        
        }

      </div> */}


     
    </>

  )
}