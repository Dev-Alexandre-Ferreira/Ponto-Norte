import '../TrilhasCurtas/TrilhasCurtas';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardTrilha from '../../components/CardTrilha/CardTrilha';
import tomba from '/Trilhas-curtas/Cachoeira-da-Tomba.jpg';
import ciclo from '/Trilhas-curtas/Ciclovia.jpg';
import circuito from '/Trilhas-curtas/Circuito-Ibirapuera.jpg';
import tiete from '/Trilhas-curtas/Ecológico-do-Tietê.jpg';
import horto from '/Trilhas-curtas/Lago-do-Horto.jpg';
import maresias from '/Trilhas-curtas/Maresias-Paúba.jpg';
import taquaral from '/Trilhas-curtas/Parque-Taquaral.webp';
import cooper from '/Trilhas-curtas/Pista-de-Cooper.jpg';
import prumirim from '/Trilhas-curtas/Praia-do-Prumirim.jpg';
import siqueira from '/Trilhas-curtas/Siqueira-Campos.jpg';
import Bica from '/Trilhas-curtas/Trilha-da-Bica.jpg';
import nascente from '/Trilhas-curtas/Trilha-da-Nascente.webp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TrilhasCurtas() {
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
        <h3>Trilhas Curtas</h3>
        <Link className="pnTrilhasLocal" to="/">
          Usar minha Localização
        </Link>
      </div>

      <section className="pnTrilhasConteudo">
        <CardTrilha
          imagem={circuito}
          titulo="Circuito Ibirapuera"
          local="Parque Ibirapuera"
          texto=" Trilha fácil e acessível no coração de São Paulo, com percurso em meio à natureza e ótima estrutura para lazer."
          distancia="5,5 Km"
          altura="73m"
        />

        <CardTrilha
          imagem={tomba}
          titulo="Cachoeira da Tomba"
          local="Parque Cantareira"
          texto="Trilha leve no Parque da Cantareira, passando por cachoeiras e Mata Atlântica. Boa estrutura e aberta o ano todo."
          distancia="4Km"
          altura="138m"
        />

        <CardTrilha
          imagem={maresias}
          titulo="Maresias - Paúba"
          local="São Sebastião"
          texto="Trilha fácil entre Maresias e Paúba, com mirantes e belas paisagens. Ideal para caminhadas e acessível o ano todo."
          distancia="1,9Km"
          altura="49m"
        />

        <CardTrilha
          imagem={prumirim}
          titulo="Praia do Prumirim"
          local="Ubatuba"
          texto="Trilha curta e fácil até a Cachoeira de Prumirim, com trecho escorregadio. Boa para banho, mas cheia no verão."
          distancia="2,3Km"
          altura="20m"
        />

        <CardTrilha
          imagem={Bica}
          titulo="Trilha da Bica"
          local="Parque do Jaraguá"
          texto="Trilha curta e fácil no Parque do Jaraguá, leva até uma bica de água potável em meio à Mata Atlântica."
          distancia="1.3Km"
          altura="35m"
        />

        <CardTrilha
          imagem={cooper}
          titulo="Pista de Cooper"
          local="Parque Ibirapuera"
          texto="Trilha fácil e plana no Parque do Ibirapuera, ótima para corrida e caminhada."
          distancia="3.9Km"
          altura="66m"
        />

        <CardTrilha
          imagem={horto}
          titulo="Lago do Horto"
          local="Horto Florestal"
          texto="Trilha fácil no Parque Horto Florestal, ótima para caminhada e corrida, com ambiente tranquilo e lago."
          distancia="2.1Km"
          altura="46m"
        />

        <CardTrilha
          imagem={siqueira}
          titulo="Siqueira Campos"
          local="Parque Tenente"
          texto="Trilha fácil no Parque Trianon, ótima para atividades ao ar livre em meio à Mata Atlântica na cidade de São Paulo."
          distancia="0.8Km"
          altura="16m"
        />

        <CardTrilha
          imagem={tiete}
          titulo="Ecológico do Tietê"
          local="Pq. Ecológico Tietê"
          texto="Trilha fácil no Parque Ecológico Tietê, com infraestrutura para caminhada, corrida e ciclismo. "
          distancia="5.5Km"
          altura="77m"
        />

        <CardTrilha
          imagem={ciclo}
          titulo="Avenida Professor"
          local="Pq. Villa Lobos"
          texto="Trilha fácil de 5,1 km na Av. Fonseca Rodrigues, em SP. Plana, asfaltada e ideal para caminhada, corrida e bike"
          distancia="5.1Km"
          altura="38m"
        />

        <CardTrilha
          imagem={nascente}
          titulo="Trilha da Nascente"
          local="Fontes do Ipiranga"
          texto="Trilha fácil de 2,9 km em São Paulo, com duração média de 44 minutos. Popular para caminhadas e acessível o ano todo."
          distancia="2.9Km"
          altura="66m"
        />

        <CardTrilha
          imagem={taquaral}
          titulo="Parque Taquaral"
          local="Campinas"
          texto=" Trilha fácil de 2,7 km em Campinas, ideal para corrida e caminhada. Leva cerca de 39 minutos e está aberta o ano todo."
          distancia="2.7Km"
          altura="50m"
        />
      </section>
      <Footer />
    </>
  );
}

export default TrilhasCurtas;
