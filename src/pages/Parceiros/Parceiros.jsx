import '../Parceiros/Parceiros.css';
import lume from '../../../public/todos/lume.parceiro.png';
import decathlon from '../../../public/todos/Decathlon.png';
import centauro from '../../../public/todos/centauro.png';
import macboot from '../../../public/todos/macboot.png';
import tnf from '../../../public/todos/tnf.png';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Parceiros() {
  return (
    <>
      <Header />
      <section className="pnParceirosTotal">
        <div className="pnParceirosWallpaper">
          <h1>Conheça nossos Parceiros!</h1>
        </div>
        <section className="pnParceirosContainer">
          <div className="pnParceirosEsquerda">
            <img src={lume} alt="" />
          </div>
          <div className="pnParceirosDados">
            <h2>Lume</h2>
            <p>
              Através da nossa parceria com a <span>Lume</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosDados">
            <h2>Decathlon</h2>
            <p>
              Através da nossa parceria com a <span>Decathlon</span>, você
              garante 15% de desconto em diversos calçados e produtos da marca.
              É só usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
          <div className="pnParceirosEsquerda">
            <img src={decathlon} alt="" />
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosEsquerda">
            <img src={macboot} alt="" />
          </div>
          <div className="pnParceirosDados">
            <h2>Macboot</h2>
            <p>
              Através da nossa parceria com a <span>Macboot</span>, você garante
              15% de desconto em diversos calçados e produtos da marca. É só
              usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosDados">
            <h2>Centauro</h2>
            <p>
              Através da nossa parceria com a <span>Centauro</span>, você
              garante 15% de desconto em diversos calçados e produtos da marca.
              É só usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
          <div className="pnParceirosEsquerda">
            <img src={centauro} alt="" />
          </div>
        </section>

        <section className="pnParceirosContainer">
          <div className="pnParceirosEsquerda">
            <img src={tnf} alt="" />
          </div>
          <div className="pnParceirosDados">
            <h2>The North Face</h2>
            <p>
              Através da nossa parceria com a <span>The North Face</span>, você
              garante 15% de desconto em diversos calçados e produtos da marca.
              É só usar o cupom <span>PONTONORTE15</span> no site da{' '}
              <span>Lume</span> e aproveitar!
            </p>
            <Link className="pnBotaoParceiros" to="">
              Visitar Pagina
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Parceiros;
