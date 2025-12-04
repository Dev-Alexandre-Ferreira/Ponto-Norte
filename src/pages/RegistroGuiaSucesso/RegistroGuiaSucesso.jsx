import '../RegistroGuiaSucesso/RegistroGuiaSucesso.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link } from 'react-router-dom';
function RegistroGuiaSucesso() {
  return (
    <>
      <main id="regula">
        <section className="pnRegistroGuiaSucessoEsq">
          <div className="pnRegistroGuiaSucessoImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroGuiaSucessoContainer">
          <section className="pnRegistroGuiaSucessoDir">
            <div className="pnRegistroGuiaSucesso">
              <h1>Registrar Guia</h1>

              <h2>Guia registrado com sucesso!</h2>
              <Link to="/Login">
                <button className="pnRegistrarGuiaSucessoButton" type="submit">
                  Voltar para Login
                </button>
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default RegistroGuiaSucesso;
