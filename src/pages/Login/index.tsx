import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import './style.scss'
import { Navbar } from "../../components/Navbar/Navbar"
import { Layout } from "../../components/Layout"
import { Botao } from "../../components/Botao"


export function Login() {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const logado = await auth.login(email, senha)

    if(logado) {
      navigate('/perfil')
    }else{
      alert("Usuário ou senha errado")
    }
  }

  return (
    <>
      <Navbar />
      <Layout>
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title">Bem Vindo!</span>

          <div className="wrap-input">
            <input className={email != "" ? "input has-val" : "input"} type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input className={senha != "" ? "input has-val" : "input"} type="password" value={senha} onChange={e => setSenha(e.target.value)} />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>

          <div className="container-login-form-btn">
            <Botao>Entrar</Botao>

            {/* <button className="login-form-btn">Entrar</button> */}
          </div>

          <div className="novo-cadastro">
            <span className="realiza-cadastro">Não possui conta?</span>
            <Link to={`/cadastrar`} className="link-cria-cadastro">Criar Conta</Link>
          </div>

        </form>
      </Layout>
    </>

  );
}