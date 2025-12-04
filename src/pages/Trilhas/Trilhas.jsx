import '../Trilhas/Trilhas.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardTrilha from '../../components/CardTrilha/CardTrilha';
import mirante from '../../../public/Trilhas-longas/mirante.jpg';
import caminhos from '../../../public/Trilhas-longas/Caminhos-do-Mar.jpg';
import joaquim from '../../../public/Trilhas-longas/Joaquim-Egidio.jpg';
import Pedra from '../../../public/Trilhas-longas/Pedra-da-Macela.jpg';
import Bau from '../../../public/Trilhas-longas/Pedra-do-Baú.jpg';
import Pico from '../../../public/Trilhas-longas/Pico-do-Mirante.jpg';
import Brava from '../../../public/Trilhas-longas/Praia-Brava-pela-Estrada.webp';
import Enchovas from '../../../public/Trilhas-longas/Praia-das-Enchovas.jpg';
import Marins from '../../../public/Trilhas-longas/Travessia-Pico-dos-Marins.webp';
import Japi from '../../../public/Trilhas-longas/Trilha-da-Serra-do-Japi.webp';
import Baepi from '../../../public/Trilhas-longas/Trilha-do-Pico-do-Baepi.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Trilhas() {
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
        <h3>Trilhas Longas</h3>
        <Link className="pnTrilhasLocal" to="/">
          Usar minha Localização
        </Link>
      </div>

      <section className="pnTrilhasConteudo">
        <CardTrilha
          imagem={mirante}
          titulo="Pico do mirante"
          local="Paranapiacaba"
          texto=" É uma trilha fácil de ser percorrida, que acompanha a encosta da serra por dentro da mata."
          distancia="3.01Km"
          altura="816m"
        />

        <CardTrilha
          imagem={Pedra}
          titulo="Pedra da Macela"
          local="Serra da Bocaina"
          texto=" Trilha desafiadora na Pedra da Macela, com vistas incríveis e fácil acesso."
          distancia="5.01Km"
          altura="383m"
        />

        <CardTrilha
          imagem={Pico}
          titulo="Pico do mirante"
          local="Serra da Mantiqueira"
          texto="Trilha desafiadora até o Pico dos Marins, com vistas incríveis na Serra da Mantiqueira."
          distancia="10,5Km"
          altura="814m"
        />

        <CardTrilha
          imagem={Baepi}
          titulo="Trilha do Pico do Baepi"
          local="Ilhabela"
          texto=" Trilha desafiadora no Pico do Baepi, com vista incrível e imersão na Mata Atlântica."
          distancia="6.6Km"
          altura="866m"
        />

        <CardTrilha
          imagem={Enchovas}
          titulo="Praia das Enchovas"
          local="Ilhabela"
          texto=" Trilha desafiadora em Ilhabela, muito procurada e com belas paisagens o ano todo."
          distancia="18.8Km"
          altura="790m"
        />

        <CardTrilha
          imagem={caminhos}
          titulo="Caminhos do Mar"
          local="Alto da Serra"
          texto=" Trilha desafiadora pela Estrada Velha de Santos, com subida constante e paisagens deslumbrantes."
          distancia="8Km"
          altura="746m"
        />

        <CardTrilha
          imagem={Pedra}
          titulo="Pedra Grande "
          local="Parque Itapetinga"
          texto=" Trilha desafiadora até a Pedra Grande, com trechos íngremes e vistas incríveis em meio à natureza."
          distancia="7.4Km"
          altura="569m"
        />

        <CardTrilha
          imagem={joaquim}
          titulo="Joaquim Egidio"
          local="Campinas"
          texto=" Trilha desafiadora em circuito por Sousas, com vales, rios e paisagens incríveis pelo interior de Campinas."
          distancia="32,7Km"
          altura="589m"
        />

        <CardTrilha
          imagem={Bau}
          titulo="Pedra do Baú"
          local="São Bento Do Sapucaí"
          texto=" Trilha desafiadora até a Pedra do Baú, com via ferrata e vista incrível da Serra da Mantiqueira."
          distancia="5.1Km"
          altura="486m"
        />

        <CardTrilha
          imagem={Marins}
          titulo="Pico dos Marins"
          local="Pq. Ecológico Tietê"
          texto=" Trilha desafiadora de 13,2 km em Piquete (SP), com belas paisagens, aberta o ano todo."
          distancia="13.2Km"
          altura="1.112m"
        />

        <CardTrilha
          imagem={Japi}
          titulo="Trilha da Serra"
          local="Serra do Japi"
          texto=" Trilha desafiadora de 29 km em Jundiaí (SP), ideal para caminhada, bike e corrida, acessível o ano todo."
          distancia="29Km"
          altura="691m"
        />

        <CardTrilha
          imagem={Brava}
          titulo="Praia Brava"
          local="Parque da Serra"
          texto=" Trilha desafiadora de 5,6 km em São Sebastião (SP), com duração média de 2h17, acessível o ano todo."
          distancia="5.6Km"
          altura="377m"
        />
      </section>
      <Footer />
    </>
  );
}

export default Trilhas;
