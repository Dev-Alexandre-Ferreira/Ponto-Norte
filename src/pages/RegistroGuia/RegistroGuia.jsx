import React, { useState } from 'react';
import '../RegistroGuia/RegistroGuia.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function RegistroGuia() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeGuia: '',
    sobrenomeGuia: '',
    cpfGuia: '',
    emailGuia: '',
    telefoneGuia: '',
    senhaGuia: '',
    repetirSenha: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senhaGuia !== formData.repetirSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/guias/cadastro',
        {
          nomeGuia: formData.nomeGuia,
          sobrenomeGuia: formData.sobrenomeGuia,
          cpfGuia: formData.cpfGuia,
          emailGuia: formData.emailGuia,
          telefoneGuia: formData.telefoneGuia,
          senhaGuia: formData.senhaGuia,
        },
      );

      const idGuia = response.data.idGuia;
      navigate(`/endereco-guia/${idGuia}`);
    } catch (err) {
      console.error(err);
      alert('Erro ao cadastrar guia.');
    }
  };

  return (
    <>
      <main id="regula">
        <section className="pnRegistroGuiaEsq">
          <div className="pnRegistroGuiaImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroGuiaFormContainer">
          <section className="pnRegistroGuiaDir">
            <form onSubmit={handleSubmit}>
              <div className="pnRegistroGuiaForm">
                <h1>Registrar Guia</h1>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoNome"
                    placeholder="Nome"
                    name="nomeGuia"
                    type="text"
                    value={formData.nomeGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/user--v1.png"
                    alt="user--v1"
                  />
                </div>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoSobrenome"
                    placeholder="Sobrenome"
                    name="sobrenomeGuia"
                    type="text"
                    value={formData.sobrenomeGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/user--v1.png"
                    alt="user--v1"
                  />
                </div>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoCPF"
                    placeholder="CPF"
                    name="cpfGuia"
                    type="number"
                    value={formData.cpfGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/user--v1.png"
                    alt="user--v1"
                  />
                </div>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoEmail"
                    placeholder="E-mail"
                    name="emailGuia"
                    type="email"
                    value={formData.emailGuia}
                    onChange={handleChange}
                  />
                  <img
                    className="pnLRegistroGuiaEmailIcon"
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/email.png"
                    alt="email"
                  />
                </div>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoTelefone"
                    placeholder="Telefone"
                    name="telefoneGuia"
                    type="number"
                    value={formData.telefoneGuia}
                    onChange={handleChange}
                  />
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/phone--v1.png"
                    alt="phone--v1"
                  />
                </div>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoSenha"
                    placeholder="Senha"
                    name="senhaGuia"
                    type="password"
                    value={formData.senhaGuia}
                    onChange={handleChange}
                  />
                  <img
                    className="pnRegistroGuiaSenhaIcon"
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
                    alt="visible--v1"
                  />
                </div>

                <div className="pnRegistroGuiaGrupo">
                  <input
                    className="pnRegistroGuiaCampoRepetirSenha"
                    placeholder="Repita sua senha"
                    name="repetirSenha"
                    type="password"
                    value={formData.repetirSenha}
                    onChange={handleChange}
                  />
                  <img
                    className="pnRegistroGuiaSenhaIcon"
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
                    alt="visible--v1"
                  />
                </div>

                <button className="pnRegistrarGuiaButton" type="submit">
                  Continuar Registro
                </button>
                <h2>
                  Já tem uma conta?
                  <Link to="/Login" className="pnGuiaButtonLink1" href="">
                    {' '}
                    Entre agora.
                  </Link>
                </h2>
                <h2 className="pnGuiaButtonLink2">
                  É um trilheiro?{' '}
                  <Link to="/RegistroTrilheiro" className="pnGuiaButtonLink2">
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

export default RegistroGuia;
