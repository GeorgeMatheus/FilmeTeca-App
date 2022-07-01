import React, { useContext } from "react";
import './styles.scss'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { AiFillCaretDown } from "react-icons/ai"




export function Navbar(){

  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.logout()
    navigate("/login")
  }

  

  return(
    <>
      <header>
        <nav>
          <Link to={`/`}><a href="" className="logo">Filmeteca</a></Link>
          <div>
            {!auth.user ? (<Link to={`/login`}><button className="btn-navbar">Entrar</button></Link>): (
              <>
                <label className="usuario-logado" htmlFor="btn">{auth.user.nome}
                  <span><AiFillCaretDown/></span>
                </label>
                <input type='checkbox' id="btn"></input>
                <ul className="menu-logado">
                  <li><Link to={`/perfil`}>Perfil</Link></li>
                  <li><span onClick={handleLogout}>Sair</span></li>
                </ul>
              </>
            )}


            {/* {!auth.user ? <Link to={`/login`}><button className="btn-navbar">Entrar</button></Link> : <span className="usuarioLogado">{auth.user.nome}</span>} */}
          </div>
        </nav>
      </header>
    </>
  )
}
