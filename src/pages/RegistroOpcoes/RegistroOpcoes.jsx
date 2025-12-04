import '../RegistroOpcoes/RegistroOpcoes.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link } from 'react-router-dom';
function RegistroOpcoes() {
  return (
    <>
      <main id="regula">
        <section className="pnRegistroOpcEsquerdo">
          <div className="pnRegistroOpcImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroOpcContainer">
          <section className="pnRegistroOpcDireito">
            <div className="pnRegistroOpcConteudo">
              <h1>Registrar</h1>
              <Link to="/RegistroTrilheiro">
                <button className="pnRegistroOpcBtn1" type="submit">
                  Registrar Trilheiro
                </button>
              </Link>
              <Link to="/RegistroGuia">
                <button className="pnRegistroOpcBtn2" type="submit">
                  Registrar Guia
                </button>
              </Link>
              <div className="pnRegistroOpcLinkVoltar">
                <Link to="/Home">
                  {' '}
                  <a href="">Voltar</a>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default RegistroOpcoes;
