import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Navibar.module.css'

import Logo from '../../assets/img/logo.png'

//Context
import { Context } from '../../context/UseContext'

function Navbar() {
  
  const { authenticated, logout } = useContext(Context)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={ Logo } alt='Adote um Pet'></img>
        <h2>Adote um Pet</h2>
      </div>
      <ul>
        <li><Link to="/">Adotar</Link></li>
        {/* Rotas autenticadas - Nota: fragment para eliminar erros */}
        { authenticated ? (
            <> 
              <li><Link to="/pet/myadoptions">Minhas Adoções</Link></li>
              <li><Link to="/pet/mypets">Meus Pets</Link></li>
              <li><Link to="/user/profile">Meu Perfil</Link></li>
              <li onClick={logout}>Sair</li> 
            </>
          ) : (
          <>
            <li><Link to="/login">Entrar</Link></li>
            <li><Link to="/register">Cadastrar</Link></li>
          </>
        )}
      </ul>      
    </nav>
  )
}

export default Navbar