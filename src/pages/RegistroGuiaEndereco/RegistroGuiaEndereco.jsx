import '../RegistroGuiaEndereco/RegistroGuiaEndereco.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function RegistroGuiaEndereco() {
  const { idGuia } = useParams(); // capturar ID vindo da URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cidadeEnderecoGuia: '',
    estadoEnderecoGuia: '',
    bairroEnderecoGuia: '',
    cepEnderecoGuia: '',
    ruaEnderecoGuia: '',
    numeroEnderecoGuia: '',
    pontorefEnderecoGuia: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:8080/api/guias/${idGuia}/endereco`,
        formData,
      );
      navigate(`/RegistroGuiaBancarios/${idGuia}`); // ou qualquer rota após cadastro
    } catch (error) {
      alert('Erro ao cadastrar endereço');
      console.error(error);
    }
  };

  return (
    <>
      <main id="regula">
        <section className="pnRegistroGuiaEnderecoEsq">
          <div className="pnRegistroGuiaEnderecoImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroGuiaEnderecoFormContainer">
          <section className="pnRegistroGuiaEnderecoDir">
            <form onSubmit={handleSubmit}>
              <div className="pnRegistroGuiaEnderecoForm">
                <h1>Endereço</h1>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoNome"
                    placeholder="Cidade"
                    name="cidadeEnderecoGuia"
                    type="text"
                    value={formData.cidadeEnderecoGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoSobrenome"
                    placeholder="Estado"
                    name="estadoEnderecoGuia"
                    type="text"
                    value={formData.estadoEnderecoGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoCPF"
                    placeholder="Bairro"
                    name="bairroEnderecoGuia"
                    type="text"
                    value={formData.bairroEnderecoGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoEmail"
                    placeholder="CEP"
                    name="cepEnderecoGuia"
                    type="number"
                    value={formData.cepEnderecoGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoTelefone"
                    placeholder="Rua"
                    name="ruaEnderecoGuia"
                    value={formData.ruaEnderecoGuia}
                    onChange={handleChange}
                    type="text"
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoSenha"
                    placeholder="Número da Residência"
                    name="numeroEnderecoGuia"
                    value={formData.numeroEnderecoGuia}
                    onChange={handleChange}
                    type="number"
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <div className="pnRegistroGuiaEnderecoGrupo">
                  <input
                    className="pnRegistroGuiaEnderecoCampoRepetirSenha"
                    placeholder="Ponto de Referência"
                    name="pontorefEnderecoGuia"
                    value={formData.pontorefEnderecoGuia}
                    onChange={handleChange}
                    type="text"
                  />
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-rounded/24/home.png"
                    alt="home"
                  />
                </div>

                <button className="pnRegistrarGuiaEnderecoButton" type="submit">
                  Continuar Registro
                </button>
                <h2>
                  Já tem uma conta?{' '}
                  <a className="pnGuiaEnderecoButtonLink1" href="">
                    Entre agora.
                  </a>
                </h2>
                <h2 className="pnGuiaEnderecoButtonLink2">
                  É um trilheiro?{' '}
                  <a className="pnGuiaEnderecoButtonLink2" href="">
                    Registre-se aqui.
                  </a>
                </h2>
              </div>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}

export default RegistroGuiaEndereco;
