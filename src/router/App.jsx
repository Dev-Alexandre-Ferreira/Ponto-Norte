import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Trilhas from '../pages/Trilhas/Trilhas';
import Parceiros from '../pages/Parceiros/Parceiros';
import Plano from '../pages/Plano/Plano';
import Guias from '../pages/Guias/Guias';
import Termos from '../pages/TermosPrivacidade/TermosPrivacidade';
import LGPD from '../pages/LGPD/LGPD';
import Perguntas from '../pages/PerguntasFrequentes/PerguntasFrequentes';
import TrilhasCurtas from '../pages/TrilhasCurtas/TrilhasCurtas';
import TrilhasMedias from '../pages/TrilhasMedias/TrilhasMedias';
import Login from '../pages/Login/Login';
import RegistroOpcoes from '../pages/RegistroOpcoes/RegistroOpcoes';
import RegistroTrilheiro from '../pages/RegistroTrilheiro/RegistroTrilheiro';
import RegistroGuia from '../pages/RegistroGuia/RegistroGuia';
import RegistroGuiaSucesso from '../pages/RegistroGuiaSucesso/RegistroGuiaSucesso';
import RegistroGuiaEndereco from '../pages/RegistroGuiaEndereco/RegistroGuiaEndereco';
import RegistroGuiaBancarios from '../pages/RegistroGuiaBancarios/RegistroGuiaBancarios';
import RegistroTrilheiroSucesso from '../pages/RegistroTrilheiroSucesso/RegistroTrilheiroSucesso';
import TrilhaSelecionada from '../pages/TrilhaSelecionada/TrilhaSelecionada';

export default function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
