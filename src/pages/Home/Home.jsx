import '../Home/Home.css';
import NovasTrilhas from '../../components/NovasTrilhas/NovasTrilhas';
import { Link } from 'react-router-dom';
import foto1 from '../../assets/usuarios/suario1/perfil.jpg';
import natu from '../../assets/usuarios/suario1/natu.jpg';
import nature from '../../assets/usuarios/suario1/nature.jpg';
import foto2 from '../../assets/fotosHome/compExpTr2.png';
import natu2 from '../../assets/usuarios/usuario2/foto2.jpg';
import nature2 from '../../assets/usuarios/usuario2/foto22.jpg';
import foto3 from '../../assets/fotosHome/compExpTr3.png';
import natu3 from '../../assets/usuarios/ususario 3/foto3.jpg';
import nature3 from '../../assets/usuarios/ususario 3/foto33.jpg';
import foto4 from '../../assets/fotosHome/gAltQua1.png';
import foto5 from '../../assets/fotosHome/gAltQua2.png';
import foto6 from '../../assets/fotosHome/gAltQua3.png';
import Header from '../../components/Header/Header';
import Slide from '../../components/NossosParceiros/Slide';
import gps from '../../assets/fotosHome/fotoGPS.png';
import Footer from '../../components/Footer/Footer';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';

function Home() {
  return (
    <>
      <Header />

      <section className="pnHomeUm">
        <div className="pnHomeUmConteudo">
          <h1>
            As melhores trilhas você
            <br /> encontra aqui !
          </h1>
          <p>
            Descubra paisagens incríveis, respire ar puro e viva aventuras que
            ficam na memória!
          </p>
          <Link to="/Trilhas" className="pnHomeBotaoUm">
            Saiba Mais
          </Link>
        </div>
      </section>
      <NovasTrilhas />

      <article className="pnFundoTrilheiro">
        <div className="pnContainerTrilheiro">
          <div className="pnDadosTrilheiro">
            <h2>Compartilhe suas experiências</h2>
            <p>
              Comente, faça postagens sobre suas aventuras e interaja com outros
              usuários.
            </p>
          </div>

          <ul className="pnCardTrilheiro">
            <li>
              <div className="pnTrilheiroDados">
                <img className="fotoTrilheiro" src={foto1} alt="" />
                <div>
                  <h3>Mariana Coral</h3>
                  <div className="avalia">
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                  </div>
                </div>

                <p>
                  Realizar essa trilha foi especial para mim. Poder revisitar
                  esse lugar e relembrar de todos os seus significados me traz
                  ótimas sensações.
                </p>
              </div>

              <div className="pnFotosTrilheiro">
                <img src={natu} alt="" />
                <img src={nature} alt="" />
              </div>
            </li>

            <li>
              <div className="pnTrilheiroDados">
                <img className="fotoTrilheiro" src={foto2} alt="" />
                <div>
                  <h3>Matheus Santos</h3>
                  <div className="avalia">
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                  </div>
                </div>

                <p>
                  Sem a plataforma eu jamais conheceria guias tão incríveis.
                  Graças a Ponto Norte eu pude conhecer esse lugar tão sonhado
                  com máximo de segurança possível.
                </p>
              </div>

              <div className="pnFotosTrilheiro">
                <img src={natu2} alt="" />
                <img src={nature2} alt="" />
              </div>
            </li>

            <li>
              <div className="pnTrilheiroDados">
                <img className="fotoTrilheiro" src={foto3} alt="" />
                <div>
                  <h3>Lucas Souza</h3>
                  <div className="avalia">
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                    <img
                      className="pnTrilheiroStar"
                      src="https://img.icons8.com/fluency/30/star--v1.png"
                      alt=""
                    />
                  </div>
                </div>

                <p>
                  Realmente a plataforma tem os melhores destinos, sempre quis
                  fazer essa trilha, mas sem um guia eu não conseguiria !
                </p>
              </div>

              <div className="pnFotosTrilheiro">
                <img className="adpt" src={natu3} alt="" />
                <img className="adpt" src={nature3} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </article>

      <Slide />

      <article className="pnFundoGuias">
        <div className="pnContainerGuias">
          <div className="pnDadosGuias">
            <h2>Guias Altamente Qualificados</h2>
            <p>Os melhores guias reunidos em um unico lugar</p>
          </div>

          <ul className="pnCardGuia">
            <li className="pnGuiaAlterna">
              <img className="pnFotoGuia" src={foto4} alt="" />

              <p className="pnBioGuia">
                Sempre gostei de estar em contato com a natureza.
              </p>

              <div className="pnStrelaGuias">
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
              </div>

              <h3 className="pnNomeGuia">Rodrigo Perinotto</h3>
            </li>

            <li>
              <img className="pnFotoGuia" src={foto5} alt="" />

              <p className="pnBioGuia">
                Antes de me tornar guia, eu me sentia inseguro ao realizar as
                trilhas, então me formei como profissional para ajudar as
                pessoas.
              </p>

              <div className="pnStrelaGuias">
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
              </div>

              <h3 className="pnNomeGuia">Estevão Loh</h3>
            </li>

            <li className="pnGuiaAlterna">
              <img className="pnFotoGuia" src={foto6} alt="" />

              <p className="pnBioGuia">
                Sempre gostei de estar em contato com a natureza.
              </p>

              <div className="pnStrelaGuias">
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
                <img
                  src="https://img.icons8.com/fluency/30/star--v1.png"
                  alt=""
                />
              </div>

              <h3 className="pnNomeGuia">Rebecca Andrade</h3>
            </li>
          </ul>
        </div>
      </article>
      <article className="pnFundoRota">
        <div className="pnContainerRota">
          <div className="pnDadosRota">
            <h3>Encontre Sua Rota</h3>
            <p>Nossas trilhas são marcadas e catalogadas.</p>

            <div className="pnContainerAPI">
              <div className="pnRotaEsquerda">
                <h3 className="pnContainerAPITitulo">
                  Pico do Mirante - Paranapiacaba
                </h3>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1uyxnw5SnPSDNnQ-AKLCAMpyoPhB-U5A&ehbc=2E312F&noprof=1"
                  width="800"
                  height="400"
                ></iframe>
                <ul className="pnRotaIndice">
                  <li>
                    {' '}
                    <span>Distância:</span> 3.01 Km
                  </li>
                  <li>
                    {' '}
                    <span>Elevação minima:</span> 816 m{' '}
                  </li>
                  <li>
                    {' '}
                    <span>Elevação maxima:</span> 1016 m
                  </li>
                </ul>
              </div>
              <div className="pnRotaDireita">
                <h3>Guia</h3>

                <div className="pnRotaDireitaItem">
                  <img className="fotoTrilheiroRota" src={foto1} alt="" />
                  <div className="pnNomeTrilheiroRota">
                    <h3>Mariana Coral</h3>
                    <div className="avaliaRota">
                      <img
                        className="pnTrilheiroStar"
                        src="https://img.icons8.com/fluency/30/star--v1.png"
                        alt=""
                      />
                      <img
                        className="pnTrilheiroStar"
                        src="https://img.icons8.com/fluency/30/star--v1.png"
                        alt=""
                      />
                      <img
                        className="pnTrilheiroStar"
                        src="https://img.icons8.com/fluency/30/star--v1.png"
                        alt=""
                      />
                      <img
                        className="pnTrilheiroStar"
                        src="https://img.icons8.com/fluency/30/star--v1.png"
                        alt=""
                      />
                      <img
                        className="pnTrilheiroStar"
                        src="https://img.icons8.com/fluency/30/star--v1.png"
                        alt=""
                      />
                    </div>

                    <div className="pnRotaFedback">
                      <p>
                        “Trilha longa e acessível, com muitos desníveis. Ideal
                        para quem busca resistência com grandes subidas. Boa
                        sinalização, mas faltam pontos de apoio. Recompensadora
                        pelas paisagens e contato com a natureza”.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="pnFundoGps">
        <div className="pnContainerGps">
          <img src={gps} alt="" />
          <div className="pnGpsDireita">
            <h3>Mais segurança em suas trilhas.</h3>
            <p>
              Com o GPS da Ponto Norte, você esta seguro em qualquer lugar,
              garanta já o seu!
            </p>
            <Link to="/Plano" className="pnGpsBotao">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
    </>
  );
}

export default Home;
