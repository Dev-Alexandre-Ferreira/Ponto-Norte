import '../Login/Login.css';
import PontoNorteLogo from '../../assets/LogoTelasEntrada.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext'; // adicione isso

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault(); // impede reload da página

    try {
      const response = await axios.post(
        'http://localhost:8080/api/trilheiros/login',
        {
          emailTrilheiro: email,
          senhaTrilheiro: senha,
        },
      );

      if (response.status === 200) {
        const dadosUsuario = response.data; // pode ser nome, id, etc.
        login(dadosUsuario);
        navigate('/Home');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Email ou senha inválidos.');
    }
  };

  return (
    <>
      <main id="regula">
        <section className="pnLoginEsquerdo">
          <div className="pnLoginImagemFundo">
            <img src={PontoNorteLogo} alt="Logo da Ponto Norte" />
          </div>
        </section>

        <section className="pnLoginFormContainer">
          <section className="pnLoginDireito">
            <form onSubmit={handleLogin}>
              <div className="pnLoginForm">
                <h1>Entrar</h1>

                <div className="pnLoginGrupo">
                  <input
                    className="pnLoginCampoEmail"
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <img
                    className="pnLoginEmailIcon"
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/email.png"
                    alt="email"
                  />
                </div>

                <div className="pnLoginGrupo">
                  <input
                    className="pnLoginCampoSenha"
                    placeholder="Senha"
                    name="senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  <img
                    className="pnLoginSenhaIcon"
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
                    alt="visible--v1"
                  />
                </div>

                <div className="pnContainerOpcao">
                  <label className="pnLoginCheck">
                    <input type="checkbox" />
                    Lembrar senha
                  </label>
                  <a href="">Esqueceu a senha?</a>
                </div>

                <button className="pnLoginButton" type="submit">
                  Entrar
                </button>
                <h2>
                  Não tem uma conta?{' '}
                  <Link to="/RegistroOpcoes">Crie uma agora.</Link>
                </h2>
              </div>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}

export default Login;
