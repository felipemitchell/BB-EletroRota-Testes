
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';


export default function Navbar({ usuario, setUsuario }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/home', { replace: true });
  };


  return (


// Navbar.jsx


    <nav className="navbar">

      <h1 className="logo">BB EletroRota</h1>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Início
          </Link>
        </li>

        <li>
          <Link to="/gerenciar" className="nav-link">
            Gerenciar Usuários
          </Link>
        </li>

        <li>
          <Link to="/mapas" className="nav-link">
            Mapas
          </Link>
        </li>
      </ul>

      <div className="usuarioLogado-container">

        {usuario ? (
          <>
            <Link
              to="/editarPerfil"
              className="usuarioLogado"
            >
              Bem vindo, <strong>{usuario.nome}</strong>
            </Link>

            <button
              onClick={handleLogout}
              className="btn-logout"
            >
              Sair
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn-login"
          >
            Login
          </Link>
        )}

      </div>

    </nav>
  );
}