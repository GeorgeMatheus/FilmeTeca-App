import { useParams } from "react-router-dom"
import { Navbar } from "../../components/Navbar/Navbar"
import { comentarios, infoFilme } from "../../hooks/useApi"
import './style.scss'
import { Filme, Data, Comentario } from '../../hooks/tipos'
import { FaHeart, FaBookmark, FaStar, FaPlay, FaTrashAlt, FaPencilAlt } from 'react-icons/fa'
import { StarRating } from "../../components/rating/StarRating"
import userImg from "../../assets/imagem_perfil.png"
import { useContext, useState, useRef } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"


export function DetalhesFilme() {


  const { id } = useParams()
  const image_path = 'https://image.tmdb.org/t/p/w500/'
  const image_path_original = 'https://image.tmdb.org/t/p/original/'
  const [comentario, setComentario] = useState("")
  const auth = useContext(AuthContext)
  const api = comentarios()

  console.log(auth.user)

  const { data: filme, isFetching } = infoFilme<Filme>("filme/", id)

  const [modalVisivel, setModalVisivel] = useState(false)
  const [editarComentario, setEditarComentario] = useState(null)
  const [novoComentario, setNovoComentario] = useState('')
  const [favoritar, setFavoritar] = useState(false)
  const [addLista, setAddLista] = useState(false)


  const handleFavoritar = () => {
    setFavoritar((prevState) => !prevState)

    console.log(favoritar)
  }



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const idFilme = parseInt(id)


    if (auth.user) {
      if (comentario) {
        const token = localStorage.getItem('authToken')

        const data = await api.novoComentario(comentario, idFilme, token)


        window.location.href = window.location.href
      }

    } else {
      alert("Faça login para comentar!")
    }
  }

  const handleApagarComentario = async (id: number) => {
    const token = localStorage.getItem('authToken')

    await api.excluirComentario(id, token)

    window.location.href = window.location.href
  }

  const handleModalEditarComentario = (comentario: object) => {
    console.log(comentario)
    setModalVisivel(true)
    setEditarComentario(comentario)
    setNovoComentario(comentario.texto)

  }

  const handleEditarComentario = async () => {
    const token = localStorage.getItem('authToken')

    await api.editarComentario(editarComentario.id, novoComentario, token)

    window.location.href = window.location.href
  }



  return (
    <>
      <Navbar />


      <div>
        {isFetching && <p>Carregando...</p>}

        <div className="container-Filme" style={{
          backgroundImage: `url(${image_path_original}${filme?.backdrop_path})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundColor: "rgba(0,0,0,0.8)", backgroundBlendMode: "darken"
        }}>


          <a><img src={`${image_path}${filme?.poster_path}`} alt="Foto de capa" /></a>

          <div className="container-infoFilme">
            <h1>{filme?.title}</h1>
            {/* <p>{filme?.vote_average}</p> */}


            <span className="lancamento">{`${filme?.release_date.slice(8, 10)}/${filme?.release_date.slice(5, 7)}/${filme?.release_date.slice(0, 4)}`}</span>

            <div className="generos">
              {(filme?.genres)?.map(genero => {
                return (
                  <li key={genero.id}>
                    {genero.name}
                  </li>
                )
              })}
            </div>

            <StarRating />

            <h3 className="tagline">{filme?.tagline}</h3>


            <div className="btn-media">

              <div>
                {/* <span className="btn-tooltip">Favoritar esse filme</span> */}
                <button className="btn" data-tooltip="Favoritar esse filme" onClick={handleFavoritar}><i><FaHeart /></i></button>
              </div>

              <div>
                {/* <span className="btn-tooltip">Adicionar a lista</span> */}
                <button className="btn" data-tooltip="Adicionar a Lista"><i><FaBookmark /></i></button>
              </div>

              <div>
                {/* <span className="btn-tooltip">Reproduzir trailer</span> */}
                <button className="btn" data-tooltip="Reproduzir trailer"><i><FaPlay /></i></button>
              </div>



            </div>

            <h2 className="title-sinopse">Sinopse</h2>
            <p className="sinopse">{filme?.overview}</p>
            {/* <span className="diretor"><strong>Diretor:</strong> {filme?.diretor.name}</span> */}

          </div>
        </div>
      </div>
      <div className="container-comentarios">
        <div className="area-principal">
          <div className="cabecalho-comentarios">
            <h1>Comentários</h1>

            <span className="qtd-comentarios">{filme?.comentarios?.length} Comentários</span>
          </div>

          <form className="novo-comentario" onSubmit={handleSubmit}>
            <div>
              <textarea onChange={e => setComentario(e.target.value)} placeholder="Participe da discussão..." />
            </div>
            <button>Comentar</button>
          </form>

          <div className="comentarios">

            {(filme?.comentarios)?.map(comentario => {
              return (
                <li key={comentario.id}>

                  <div className="usuario-comentario">
                    <img src={userImg} alt="imagem de perfil" />

                    <div className="area-info">
                      <a href="#" className="nome-usuario">{comentario.usuario.nome}</a>
                      <span className="data-comentario">{`${comentario.dataCadastro.slice(8, 10)}/${comentario.dataCadastro.slice(5, 7)}/${comentario.dataCadastro.slice(0, 4)}`}</span>
                      <span className="hora-comentario">{`${comentario.dataCadastro.slice(11, 16)}`}</span>
                      <p className="comentario">{comentario.texto}</p>

                    </div>
                    <div className="area-btn">

                      {(auth.user?.id == comentario.usuario.id) ? <button onClick={() => handleModalEditarComentario(comentario)}><i><FaPencilAlt /></i></button> : null}

                      {(auth.user?.id == comentario.usuario.id) ? <button onClick={() => handleApagarComentario(comentario.id)}><i><FaTrashAlt /></i></button> : null}

                    </div>
                  </div>
                </li>
              )
            })}
          </div>
        </div>
      </div>

      {modalVisivel ? <div className="modal-container">
        <div className="conteudo-modal">
          <button onClick={() => setModalVisivel(false)} className="btn-fecha-modal">X</button>
          <h2>Altere aqui o seu comentário</h2>
          <div>
            <textarea value={novoComentario} onChange={e => setNovoComentario(e.target.value)}>
              {editarComentario.texto}
            </textarea>
            <button className="btn-acao-modal" onClick={handleEditarComentario}>Alterar</button>
          </div>

        </div>
      </div> : null}

    </>
  )
}