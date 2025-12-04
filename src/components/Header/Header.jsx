import '../Header/Header.css';
import { Link } from 'react-router-dom';
import pnLogo from '../../assets/pnLogo.svg';
import { useAuth } from '../../contexts/AuthContext';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
function Header() {
  const { usuario } = useAuth();

  if (usuario) {
    return <HeaderLogado/>;
  } 
  return (
    <div>
      <header className="pnHeader">
        <div className="pnHeaderContainer">
          <Link to="/Home">
            <img src={pnLogo} className="logo" alt="" />
          </Link>

          <div className="pnHeaderPesquisa">
            <input
              type="text"
              className="pnHeaderBarraPesquisa"
              placeholder="Pesquise sua trilha aqui!"
            />

            <button>
              <i className="bxr  bx-search"></i>
            </button>
          </div>

          <nav className="pnHeaderNav">
            <nav aria-label="navegação primaria">
              <ul className="pnHeaderNavMenu">
                <li>
                  <Link className="pnHeaderLink" to="/Home">
                    Início
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/Trilhas">
                    Trilhas
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/Guias">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/Parceiros">
                    Parceiros
                  </Link>
                </li>
                <li>
                  <Link className="pnHeaderLink" to="/Plano">
                    Planos
                  </Link>
                </li>
              </ul>
            </nav>
          </nav>

          <div className="pnHeaderDados">
            <Link id="entrar" to="/Login">
              Entrar
            </Link>
            <Link id="cadastrar" to="/RegistroOpcoes">
              Cadastre-se
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
