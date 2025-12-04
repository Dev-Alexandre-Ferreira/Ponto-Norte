import '../RegistroTrilheiroSucesso/RegistroTrilheiroSucesso.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link } from 'react-router-dom';
function RegistroTrilheiroSucesso() {
  return (
    <>
      <main id="regula">
        <section className="pnRegistroTrilheiroSucessoEsq">
          <div className="pnRegistroTrilheiroSucessoImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroTrilheiroSucessoContainer">
          <section className="pnRegistroTrilheiroSucessoDir">
            <div className="pnRegistroTrilheiroSucesso">
              <h1>Registrar Trilheiro</h1>

              <h2>Trilheiro registrado com sucesso!</h2>

              <Link to="/Login">
                <button className="pnRegistrarTrilheiroSucessoButton">
                  Voltar para o início
                </button>
              </Link>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default RegistroTrilheiroSucesso;
