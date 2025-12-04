import '../RegistroTrilheiro/RegistroTrilheiro.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function RegistroTrilheiro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    repetirSenha: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // impede recarregamento da página

    if (
      !formData.nome.trim() ||
      !formData.cpf.trim() ||
      !formData.email.trim() ||
      !formData.senha.trim() ||
      !formData.repetirSenha.trim()
    ) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Validação simples de senha
    if (formData.senha !== formData.repetirSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/trilheiros/cadastro',
        {
          nomeTrilheiro: formData.nome,
          cpfTrilheiro: formData.cpf, // use aqui o que você quiser como "cpf"
          emailTrilheiro: formData.email,
          senhaTrilheiro: formData.senha,
        },
      );

      console.log('Cadastro realizado com sucesso:', response.data);
      navigate('/RegistroTrilheiroSucesso');
    } catch (error) {
      console.error('Erro ao cadastrar trilheiro:', error);
      alert('Erro no cadastro. Verifique os dados.');
    }
  };

  return (
    <>
      <main id="regula">
        <section className="pnRegistroTrilheiroEsq">
          <div className="pnRegistroTrilheiroImg">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>
        <section className="pnRegistroTrilheiroFormContainer">
          <section className="pnRegistroTrilheiroDir">
            <form onSubmit={handleSubmit}>
              <div className="pnRegistroTrilheiroForm">
                <h1>Registrar Trilheiro</h1>

                <div className="pnRegistroTrilheiroGrupo">
                  <input
                    className="pnRegistroTrilheiroCampoNome"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>

                <div className="pnRegistroTrilheiroGrupo">
                  <input
                    className="pnRegistroTrilheiroCampoSobrenome"
                    name="cpf"
                    placeholder="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>

                <div className="pnRegistroTrilheiroGrupo">
                  <input
                    className="pnRegistroTrilheiroCampoEmail"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="pnRegistroTrilheiroGrupo">
                  <input
                    className="pnRegistroTrilheiroCampoSenha"
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                </div>

                <div className="pnRegistroTrilheiroGrupo">
                  <input
                    className="pnRegistroTrilheiroCampoRepetirSenha"
                    name="repetirSenha"
                    type="password"
                    placeholder="Repita sua senha"
                    value={formData.repetirSenha}
                    onChange={handleChange}
                  />
                </div>

                <button className="pnRegistrarTrilheiroButton" type="submit">
                  Registrar
                </button>

                <h2>
                  Já tem uma conta?{' '}
                  <Link className="pnTrilheiroButtonLink1" to="/Login">
                    Entre agora.
                  </Link>
                </h2>
                <h2 className="pnTrilheiroButtonLink2">
                  É um guia?{' '}
                  <Link className="pnTrilheiroButtonLink2" to="/RegistroGuia">
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

export default RegistroTrilheiro;
