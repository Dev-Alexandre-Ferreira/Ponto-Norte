import '../RegistroGuiaBancarios/RegistroGuiaBancarios.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function RegistroGuiaBancarios() {
  const { idGuia } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    instituicaoBancaria: '',
    codigoBancoGuia: '',
    agenciaBancariaGuia: '',
    numeroContaGuia: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:8080/api/guias/${idGuia}/bancarios`,
        formData,
      );
      navigate('/RegistroGuiaSucesso');
    } catch (error) {
      alert('Erro ao cadastrar dados bancários');
      console.error(error);
    }
  };

  return (
    <>
      <main id="regula">
        <section className="pnRegistroGuiaBancariosEsq">
          <div className="pnRegistroGuiaBancariosImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroGuiaBancariosFormContainer">
          <section className="pnRegistroGuiaBancariosDir">
            <form onSubmit={handleSubmit}>
              <div className="pnRegistroGuiaBancariosForm">
                <h1>Dados Bancários</h1>

                <div className="pnRegistroGuiaBancariosGrupo">
                  <input
                    className="pnRegistroGuiaBancariosCampoNome"
                    placeholder="Instituição Bancária"
                    name="instituicaoBancaria"
                    value={formData.instituicaoBancaria}
                    onChange={handleChange}
                    type="text"
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png"
                    alt="us-dollar--v1"
                  />
                </div>

                <div className="pnRegistroGuiaBancariosGrupo">
                  <input
                    className="pnRegistroGuiaBancariosCampoSobrenome"
                    placeholder="Código do Banco"
                    name="codigoBancoGuia"
                    value={formData.codigoBancoGuia}
                    onChange={handleChange}
                    type="number"
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png"
                    alt="us-dollar--v1"
                  />
                </div>

                <div className="pnRegistroGuiaBancariosGrupo">
                  <input
                    className="pnRegistroGuiaBancariosCampoCPF"
                    placeholder="Agência Bancária"
                    name="agenciaBancariaGuia"
                    type="number"
                    value={formData.agenciaBancariaGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png"
                    alt="us-dollar--v1"
                  />
                </div>

                <div className="pnRegistroGuiaBancariosGrupo">
                  <input
                    className="pnRegistroGuiaBancariosCampoEmail"
                    placeholder="Número da Conta Bancária"
                    name="numeroContaGuia"
                    type="number"
                    value={formData.numeroContaGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/us-dollar--v1.png"
                    alt="us-dollar--v1"
                  />
                </div>

                <button
                  className="pnRegistrarGuiaBancariosButton"
                  type="submit"
                >
                  Registrar
                </button>
                <h2>
                  Já tem uma conta?{' '}
                  <Link className="pnGuiaBancariosButtonLink1" to="/LoginTela">
                    Entre agora.
                  </Link>
                </h2>
                <h2 className="pnGuiaBancariosButtonLink2">
                  É um trilheiro?{' '}
                  <Link
                    className="pnGuiaBancariosButtonLink2"
                    to="/RegistroTrilheiro"
                  >
                    Registre-se aqui.
                  </Link>
                </h2>
              </div>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}

export default RegistroGuiaBancarios;
