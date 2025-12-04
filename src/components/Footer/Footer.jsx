import PontoNorteLogo from '../../assets/PontoNorteLogo.png';
import { Link } from 'react-router-dom';
import './Footer.css';

function FooterPontoNorte() {
  return (
    <footer className="pnFooterSite">
      <div className="pnFooterContainer">
        <div className="pnInfoMarca">
          <img
            id="logoPnFooter"
            src={PontoNorteLogo}
            alt="Logo da Ponto Norte"
          />
        </div>
        <div className="pnFooterColum">
          <h2>Plataforma</h2>
          <ul>
            <li>
              <Link to="/Trilhas">Trilhas</Link>
            </li>
            <li>
              <Link to="/Plano">Planos</Link>
            </li>
            <li>
              <Link to="/Guias">Guias</Link>
            </li>
          </ul>
        </div>
        <div className="pnFooterColum">
          <h2>Ajuda</h2>
          <ul>
            <li>
              <Link to="/PerguntasFrequentes">Perguntas Frequentes</Link>
            </li>
            <li>
              <Link to="/TermosPrivacidade">Termos e Privacidade</Link>
            </li>
            <li>
              <Link to="/LGPD">LGPD</Link>
            </li>
          </ul>
        </div>
        <div className="pnFooterColum">
          <h2>Contatos</h2>
          <ul>
            <li>
              <Link to="">+55 (11)99999-9999</Link>
            </li>
            <li>
              <Link to="">suporte@pontonorte.com.br</Link>
            </li>
          </ul>
        </div>
        <div className="pnFooterColum">
          <ul>
            <li>
              <Link to="">Rua Tito, 54</Link>
            </li>
            <li>
              <Link to="">CEP 05051-000</Link>
            </li>
            <li>
              <Link to="">São Paulo, SP</Link>
            </li>

            <ul className="pnRedesSociais">
              <li>
                <Link
                  target="blank"
                  to="https://www.linkedin.com/company/ponto-norte-1/"
                >
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png"
                    alt="linkedin"
                  />
                </Link>
              </li>

              <li>
                <Link
                  target="blank"
                  to="https://www.instagram.com/ponto_norte_"
                >
                  <img
                    src="https://img.icons8.com/material-outlined/50/FFFFFF/instagram-new.png"
                    alt="instagram-new"
                  />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <p>Ponto Norte 2025. Todos os direitos reservados.</p>
    </footer>
  );
}

export default FooterPontoNorte;
