import React, { useState } from "react";
import './styles.scss'
import { FaSearch } from 'react-icons/fa'
import { useApi } from "../../hooks/useApi";
import { Filme } from "../../hooks/tipos";

export function Formulario() {

  const [pesquisa, setPesquisa] = useState("")
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(pesquisa)

    const { data: filmes, isFetching } = useApi<Filme[]>(`filme/search/${pesquisa}`)

    return filmes
  }


  return (
    <>
      <form className="search-box" onSubmit={handleSubmit}>
        <input placeholder="Pesquise um filme" type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)}/>

        <button type="submit">
          <FaSearch />
        </button>

      </form>

      <div className="resultados-busca">

      </div>
    </>



  )
}