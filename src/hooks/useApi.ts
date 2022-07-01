import { useEffect, useState } from "react"
import axios from 'axios'


export const api = axios.create({
  baseURL: 'https://api-filmeteca.herokuapp.com/'
})


export const comentarios = () => ({


  novoComentario: async (texto: string, idFilme:number, token: string ) => {
    api.defaults.headers.common = {'Authorization': `Bearer ${token}`}

    const response = await api.post("comentario", {texto, idFilme})
    return response.data
  },

  excluirComentario: async (id: number, token: string) => {
    api.defaults.headers.common = {'Authorization': `Bearer ${token}`}

    const response = await api.delete("comentario", {data: {id}})

    return response.data
  },

  editarComentario: async (id: number, texto: string, token: string) => {
    api.defaults.headers.common = {'Authorization': `Bearer ${token}`}

    const response = await api.put("comentario", {id, texto})

    return response.data
  },

}
)


export const criarAutenticacao = () => ({

  login: async (email: string, senha: string) => {

    try{
      const response = await api.post("login", {email, senha})
      return response.data

    }catch(error) {
      if(error) {
        console.log(error.response.status)
      }
    }
      
  },

  recuperaUsuario: async (token:string) =>{

    api.defaults.headers.common = {'Authorization': `Bearer ${token}`}

    const response = await api.get("auth")

    return response.data
  },

  logout: async () => {
    const response = await api.post("logout")
    return response.data
  },

  cadastro: async (nome: string, email: string, senha:string) => {
    const response = await api.post("auth", {nome, email, senha})
    return response.data
  }

})


export function useApi< T = unknown>(url: string) {

  // Dados genericos recebido de uma API
  const [data, setData] = useState<T | null>(null)
  
  // Estado da requisição
  const [isFetching, setIsFetching] = useState(true)

  //Caso a requisição falhe é enviado um erro
  const [error, setError] = useState<Error | null>(null);
  

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data.results)
      })
      .catch ( err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, error, isFetching }

}



export function listarGeneros< T = unknown>(url: string) {

  // Dados genericos recebido de uma API
  const [data, setData] = useState<T | null>(null)
  
  // Estado da requisição
  const [isFetching, setIsFetching] = useState(true)

  //Caso a requisição falhe é enviado um erro
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data.genres)
      })
      .catch ( err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, error, isFetching }

}


export function infoFilme<T = unknown>(url: string, id: string) {

    // Dados genericos recebido de uma API
    const [data, setData] = useState<T | null>(null)
  
    // Estado da requisição
    const [isFetching, setIsFetching] = useState(true)
  
    //Caso a requisição falhe é enviado um erro
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api.get(`${url}${id}`)
      .then(response => {
        setData(response.data)
      })
      .catch ( err => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [id])


  return { data, error, isFetching }
}


