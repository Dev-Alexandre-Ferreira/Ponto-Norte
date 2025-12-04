import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Trilhas from '../pages/Trilhas/Trilhas.jsx';
import Parceiros from '../pages/Parceiros/Parceiros.jsx';
import Plano from '../pages/Plano/Plano.jsx';
import Guias from '../pages/Guias/Guias.jsx';
import Termos from '../pages/TermosPrivacidade/TermosPrivacidade.jsx';
import LGPD from '../pages/LGPD/LGPD.jsx';
import Perguntas from '../pages/PerguntasFrequentes/PerguntasFrequentes.jsx';
import TrilhasCurtas from '../pages/TrilhasCurtas/TrilhasCurtas.jsx';
import TrilhasMedias from '../pages/TrilhasMedias/TrilhasMedias.jsx';
import Login from '../pages/Login/Login.jsx';
import RegistroOpcoes from '../pages/RegistroOpcoes/RegistroOpcoes.jsx';
import RegistroTrilheiro from '../pages/RegistroTrilheiro/RegistroTrilheiro.jsx';
import RegistroGuia from '../pages/RegistroGuia/RegistroGuia.jsx';
import RegistroGuiaSucesso from '../pages/RegistroGuiaSucesso/RegistroGuiaSucesso.jsx';
import RegistroGuiaEndereco from '../pages/RegistroGuiaEndereco/RegistroGuiaEndereco.jsx';
import RegistroGuiaBancarios from '../pages/RegistroGuiaBancarios/RegistroGuiaBancarios.jsx';
import RegistroTrilheiroSucesso from '../pages/RegistroTrilheiroSucesso/RegistroTrilheiroSucesso.jsx';
import TrilhaSelecionada from '../pages/TrilhaSelecionada/TrilhaSelecionada.jsx';

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ponto-norte" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Trilhas" element={<Trilhas />} />
        <Route path="/TrilhaSelecionada" element={<TrilhaSelecionada />} />
        <Route path="/Guias" element={<Guias />} />
        <Route path="/Parceiros" element={<Parceiros />} />
        <Route
          path="/RegistroTrilheiroSucesso"
          element={<RegistroTrilheiroSucesso />}
        />
        <Route path="/PerguntasFrequentes" element={<Perguntas />} />
        <Route path="/TermosPrivacidade" element={<Termos />} />
        <Route path="/LGPD" element={<LGPD />} />
        <Route path="/Plano" element={<Plano />} />
        <Route path="/TrilhasCurtas" element={<TrilhasCurtas />} />
        <Route path="/TrilhasMedias" element={<TrilhasMedias />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegistroOpcoes" element={<RegistroOpcoes />} />
        <Route path="/RegistroTrilheiro" element={<RegistroTrilheiro />} />
        <Route path="/RegistroGuia" element={<RegistroGuia />} />
        <Route path="/RegistroGuiaSucesso" element={<RegistroGuiaSucesso />} />
        <Route
          path="/endereco-guia/:idGuia"
          element={<RegistroGuiaEndereco />}
        />
        <Route
          path="/RegistroGuiaBancarios/:idGuia"
          element={<RegistroGuiaBancarios />}
        />
      </Routes>
    </>
  );
}
