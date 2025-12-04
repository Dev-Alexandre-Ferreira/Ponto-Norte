import '../TrilhasMedias/TrilhasMedias.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardTrilha from '../../components/CardTrilha/CardTrilha';
import paqueta from '/Trilhas-medianas/Cachoeira-do-Paquetá.jpg';
import boucucanga from '/Trilhas-medianas/Cachoeiras-de-Boicucanga.webp';
import bonde from '/Trilhas-medianas/Estrada-do-Bonde.jpg';
import jaragua from '/Trilhas-medianas/Jaraguá-via-Estrada.jpg';
import PedraB from '/Trilhas-medianas/Mirante-Pedra-do-Bau.webp';
import cabucu from '/Trilhas-medianas/Núcleo-Cabuçu.webp';
import fortaleza from '/Trilhas-medianas/Praia-da-Fortaleza.jpg';
import lagoinha from '/Trilhas-medianas/Praia-da-Lagoinha.jpg';
import grande from '/Trilhas-medianas/Trilha-da-Pedra-Grande.jpg';
import lago from '/Trilhas-medianas/Trilha-do-Lago.jpg';
import pai from '/Trilhas-medianas/Trilha-do-Pai-Zé.jpg';
import lagos from '/Trilhas-medianas/Trilha-dos-Lagos.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TrilhasMedias() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <div className="pnTrilhasWallpaper">
        <h1>Sinta a natureza</h1>
      </div>

      <section className="pnTrilhasPesquisa">
        <div>
          <ul>
            <li>
              <Link id="pnTeste" to="/Trilhas">
                <p id="longa"> Trilhas Longas</p>
              </Link>
            </li>
            <li>
              <Link id="pnTeste" to="/TrilhasMedias">
                <p id="media">Trilhas Médias</p>
              </Link>
            </li>
            <li>
              <Link id="pnTeste" to="/TrilhasCurtas">
                <p id="curta">Trilhas Curtas</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="pnTrilhasAreaPesquisa">
          <input
            type="text"
            placeholder="Digite o nome da sua Trilha"
            className="pnTrilhaBarraPesquisa"
          />
          <button type="button" className="pnBotaoBuscarGuias">
            Buscar
          </button>
        </div>
      </section>

      <div className="pnTrilhasFiltro">
        <h3>Trilhas Médias</h3>
        <Link className="pnTrilhasLocal" to="/">
          Usar minha Localização
        </Link>
      </div>

      <section className="pnTrilhasConteudo">
        <CardTrilha
          imagem={pai}
          titulo="Trilha do Pai Zé"
          local="Pico do Jaraguá"
          texto=" Trilha moderada até o Pico do Jaraguá, com belas vistas e contato com a natureza em Osasco."
          distancia="5 Km"
          altura="362m"
        />

        <CardTrilha
          imagem={grande}
          titulo="Trilha da Pedra Grande"
          local="Parque Cantareira"
          texto="Trilha moderada no Parque da Cantareira, com caminho asfaltado e vista panorâmica da Pedra Grande."
          distancia="7.2Km"
          altura="277m"
        />

        <CardTrilha
          imagem={lago}
          titulo="Trilha do Lago"
          local="Parque Cantareira"
          texto="Trilha moderada até o Mirante da Pedra Grande, com vista incrível e opção de lazer no Lago das Carpas."
          distancia="9.2Km"
          altura="385m"
        />

        <CardTrilha
          imagem={jaragua}
          titulo="Jaraguá via Estrada"
          local="Parque Jaraguá"
          texto=" Trilha moderada e asfaltada até o Pico do Jaraguá, ideal para bike, com vista espetacular da cidade."
          distancia="7.1Km"
          altura="346m"
        />

        <CardTrilha
          imagem={paqueta}
          titulo="Cachoeira do Paquetá"
          local="Ilhabela"
          texto=" Trilha moderada e curta até a Cachoeira do Paquetá, com vista incrível e poços naturais no caminho."
          distancia="1.4Km"
          altura="73m"
        />

        <CardTrilha
          imagem={fortaleza}
          titulo="Praia da Fortaleza"
          local="Ubatuba"
          texto=" Trilha moderada entre praias paradisíacas de Ubatuba, com mar calmo, mata e piscinas naturais."
          distancia="5.6Km"
          altura="249m"
        />

        <CardTrilha
          imagem={lagoinha}
          titulo="Praia da Lagoinha"
          local="Ubatuba"
          texto=" Trilha moderada de Ubatuba até a Praia Grande do Bonete, com visual deslumbrante e natureza preservada."
          distancia="6.9Km"
          altura="164m"
        />

        <CardTrilha
          imagem={lagos}
          titulo="Trilha dos Lagos"
          local="Parque Juquery"
          texto=" Trilha moderada no Parque do Juquery, com lagos, mirantes e contato direto com a natureza."
          distancia="12,6Km"
          altura="345m"
        />

        <CardTrilha
          imagem={bonde}
          titulo="Estrada do Bonde"
          local="Paranapiacaba"
          texto=" Trilha moderada com início em restaurante, caminho de terra e belas paisagens em meio a colinas."
          distancia="8Km"
          altura="134m"
        />

        <CardTrilha
          imagem={PedraB}
          titulo="Mirante Pedra do Bau"
          local="Ana Chata"
          texto=" Trilha moderada de 6,4 km em São Bento do Sapucaí, com belas paisagens e acesso o ano todo."
          distancia="6.4Km"
          altura="348m"
        />

        <CardTrilha
          imagem={boucucanga}
          titulo="Cachoeiras Boicucanga"
          local="Serra do Mar"
          texto=" Trilha moderada de 3,2 km em São Sebastião, com quedas d’água, Mata Atlântica e acesso o ano todo."
          distancia="3.2Km"
          altura="191m"
        />

        <CardTrilha
          imagem={cabucu}
          titulo="Núcleo Cabuçu"
          local="Parque da Cantareira"
          texto=" Trilha circular de 7,2 km em Guarulhos, com nível moderado. Ideal para mountain bike, é acessível o ano todo."
          distancia="7.2Km"
          altura="281m"
        />
      </section>
      <Footer />
    </>
  );
}

export default TrilhasMedias;
