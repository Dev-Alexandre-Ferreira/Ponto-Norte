import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Guias/Guias.css';
import CardGuias from '../../components/CardGuias/CardGuias';
import jonas from '../../../public/Guias/jonas.jpg';
import amanda from '../../../public/Guias/amanda.jpg';
import Andre from '../../../public/Guias/Andre.jpg';
import bruno from '../../../public/Guias/bruno.jpg';
import Cibele from '../../../public/Guias/Cibele.jpg';
import gustavo from '../../../public/Guias/gustavo.jpg';
import jailson from '../../../public/Guias/jailson.jpg';
import julia from '../../../public/Guias/julia.jpg';
import lucas from '../../../public/Guias/lucas.jpg';
import rafael from '../../../public/Guias/rafael.jpg';
import rodrigo from '../../../public/Guias/rodrigo.jpg';
import suzana from '../../../public/Guias/suzana.jpg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Guias() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="pnGuias">
        <div className="pnWallpaperGuias">
          <h1>Trilhe com confiança</h1>
        </div>

        <section className="pnBuscarGuias">
          <div className="pnConteudoBuscarGuias">
            <h2>Escolha o seu guia</h2>
            <div className="pnCaixaBuscaGuias">
              <input
                type="text"
                placeholder="Encontre o seu guia"
                className="pnPesquisarGuias"
                name=""
                id=""
              />
              {/*<a href="" className='pn-botao-buscar'>Buscar</a>*/}
              <button type="button" className="pnBotaoBuscarGuias">
                Buscar
              </button>
            </div>
          </div>
        </section>

        <section className="pnTituloGuias">
          <h2>Guias da plataforma</h2>
        </section>

        <section className="pnCardsGuias">
          <CardGuias
            nome="Jonas Almeida"
            texto="Montanhista e fotógrafo. Busco sempre o melhor ângulo da natureza com o grupo."
            foto={jonas}
          />

          <CardGuias
            nome="Cibele Nonato"
            texto="Amo trilhas longas e ajudar quem está começando. Já andei por quatro continentes!"
            foto={Cibele}
          />

          <CardGuias
            nome="Rodrigo Silva"
            texto="Ex-militar e fã de trilhas desafiadoras. Comigo, foco e aventura caminham juntos."
            foto={rodrigo}
          />

          <CardGuias
            nome="Bruno Fernando"
            texto="Educador físico, incentivo cada um a superar seus limites na caminhada."
            foto={bruno}
          />

          <CardGuias
            nome="Julia Oliveira"
            texto="Sou bióloga e guia. Adoro mostrar a natureza de um jeito leve e curioso."
            foto={julia}
          />

          <CardGuias
            nome="Lucas Ferreira"
            texto="Guia local. Trago cultura e história para cada passo da trilha."
            foto={lucas}
          />

          <CardGuias
            nome="Jailson José"
            texto="Guiando iniciantes com energia e segurança. Bora dar o primeiro passo!."
            foto={jailson}
          />

          <CardGuias
            nome="Amanda Rafaela"
            texto="Especialista em montanhas, priorizo segurança e boas histórias na trilha."
            foto={amanda}
          />

          <CardGuias
            nome="Suzana de Santos"
            texto="Cachoeiras são meu ponto forte! Curto criar roteiros divertidos e refrescantes."
            foto={suzana}
          />

          <CardGuias
            nome="André Monteiro"
            texto="Trilhas leves, boas conversas e segurança pra quem tá começando."
            foto={Andre}
          />

          <CardGuias
            nome="Gustavo Lins"
            texto="Experiente, focado na segurança e nas histórias que a montanha conta."
            foto={gustavo}
          />

          <CardGuias
            nome="Rafael Souza"
            texto="Roteiros criativos, mergulhos e muita diversão na natureza."
            foto={rafael}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Guias;
