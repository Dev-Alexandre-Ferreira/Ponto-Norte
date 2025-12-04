import '../TrilhaSelecionada/TrilhaSelecionada.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Foto1 from '../../assets/pnFotosTrilhaAcessada/pnTrilhaFotosImgsEsq1.png';
import Foto2 from '../../assets/pnFotosTrilhaAcessada/pnTrilhaFotosImgsDir1.png';
import Foto3 from '../../assets/pnFotosTrilhaAcessada/pnTrilhaFotosImgsDir2.png';
import Foto4 from '../../assets/pnFotosTrilhaAcessada/pnTrilhaFotosImgsDir3.png';
import Foto5 from '../../assets/pnFotosTrilhaAcessada/pnTrilhaGuiasCardGuia1Img.png';
import Foto6 from '../../assets/pnFotosTrilhaAcessada/pnTrilhaGuiasCardGuia2Img.png';

function TrilhaSelecionada() {
  return (
    <>
      <Header />
      <main className="pnTrilhaSelecionada">
        <div className="pnWallpaperTrilhaSelecionada">
          <div className="pnWallpaperTrilhaSelecionadaConteudo">
            <h1>Trilha Pico do Mirante</h1>
          </div>
        </div>

        <section className="pnTrilhaFotosGuias">
          <div className="pnTrilhaFotosGuiasContainer">
            <div className="pnTrilhaFotos">
              <div className="pnTrilhaFotosTitulo">
                <h2>Fotos da trilha</h2>
              </div>
              <div className="pnTrilhaFotosImgs">
                <div className="pnTrilhaFotosImgsEsq">
                  <li className="pnTrilhaFotosImgsEsq1">
                    {' '}
                    <img src={Foto1} />
                  </li>
                </div>
                <div className="pnTrilhaFotosImgsDir">
                  <li className="pnTrilhaFotosImgsDir1">
                    <img src={Foto2} />
                  </li>
                  <li className="pnTrilhaFotosImgsDir2">
                    <img src={Foto3} />
                  </li>
                  <li className="pnTrilhaFotosImgsDir3">
                    <img src={Foto4} />
                  </li>
                </div>
              </div>
            </div>

            <div className="pnTrilhaGuias">
              <div className="pnTrilhaGuiasTitulo">
                <h2>Guias</h2>
              </div>
              <div className="pnTrilhaGuiasCard">
                <div className="pnTrilhaGuiasCardConteudo">
                  <div className="pnTrilhaGuiasCardTexto">
                    <h3>Gostou da trilha?</h3>
                    <p>Contrate um guia agora mesmo</p>
                  </div>
                  <div className="pnTrilhaGuiasCardGuia1">
                    <div className="pnTrilhaGuiasCardGuia1Img">
                      <img src={Foto5} />
                    </div>
                    <div className="pnTrilhaGuiasCardGuia1Nome">
                      <h3>Jonas Almeida</h3>
                      <div className="pnTrilhaGuiasCardGuia1Avaliacao">
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
                  </div>
                  <div className="pnTrilhaGuiasCardGuia2">
                    <div className="pnTrilhaGuiasCardGuia2Img">
                      <img src={Foto6} />
                    </div>
                    <div className="pnTrilhaGuiasCardGuia2Nome">
                      <h3>Julia Oliveira</h3>
                      <div className="pnTrilhaGuiasCardGuia2Avaliacao">
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
                  </div>

                  <div className="pnTrilhaGuiasCardBtnContainer">
                    <button className="pnTrilhaGuiasCardBtn">Ver Guias</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pnTrilhaDesc">
          <div className="pnTrilhaDescTitulo">
            <h2>Descrição</h2>
          </div>

          <div className="pnTrilhaDescConteudoContainer">
            <div className="pnTrilhaDescConteudo">
              <p>
                A Trilha do Pico do Mirante, em Paranapiacaba, tem cerca de 4,8
                km (ida e volta) e é considerada de dificuldade leve a moderada,
                com subidas constantes e ganho de elevação de cerca de 240
                metros. O percurso começa na vila, segue por um antigo estradão
                de terra e avança por trechos de Mata Atlântica, passando por
                pontos históricos como ruínas da TV Tupi e a Pedra do Índio. O
                mirante, a cerca de 1.000 metros de altitude, oferece uma vista
                ampla da Serra do Mar, Baixada Santista e do mar, sendo um local
                muito procurado para fotos e contemplação.
                <br />
                <br />
                O acesso à trilha só é permitido com guias ou monitores
                autorizados, por exigência da administração local. O trajeto é
                bem marcado, mas exige atenção em alguns trechos com pedras e
                terra. É recomendável usar calçado adequado, levar água, lanche,
                protetor solar e repelente, além de evitar datas de grande
                movimento para melhor aproveitar a experiência e ajudar na
                preservação do ambiente.
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>

        <section className="pnTrilhaInfo">
          <div className="pnTrilhaInfoTitulo">
            <h2>Informações da Trilha</h2>
          </div>

          <div className="pnTrilhaInfoConteudoContainer">
            <div className="pnTrilhaInfoConteudo1">
              <p>Distância: 4.8km</p>
              <p>Elevação Máxima: 1000m</p>
              <p>Elevação Mínima: 830m</p>
            </div>
            <div className="pnTrilhaInfoConteudo2">
              <p>Visitas: 3.298</p>
              <p>Guia Obrigatório: Sim</p>
              <p>Dificuldade: Moderada</p>
            </div>
          </div>
        </section>

        <section className="pnTrilhaEqp">
          <div className="pnTrilhaEqpTitulo">
            <h2>Equipamentos Recomendados</h2>
          </div>

          <div className="pnTrilhaEqpConteudoContainer">
            <div className="pnTrilhaConteudoContainerItems">
              <div className="pnTrilhaEqpConteudo1">
                <ul>
                  <li>
                    <p>Botas: Recomendado</p>
                  </li>
                  <li>
                    <p>Bastão Trekking: Opcional</p>
                  </li>
                  <li>
                    <p>Barraca: Não</p>
                  </li>
                </ul>
              </div>
              <div className="pnTrilhaEqpConteudo2">
                <ul>
                  <li>
                    <p>Mochila: Obrigatório</p>
                  </li>
                  <li>
                    <p>Cantil: Obrigatório</p>
                  </li>
                  <li>
                    <p>Lanterna: Não</p>
                  </li>
                </ul>
              </div>
              <div className="pnTrilhaEqpConteudo3">
                <ul>
                  <li>
                    <p>Fogareiro: Não</p>
                  </li>
                  <li>
                    <p>Tênis Anfíbio: Não</p>
                  </li>
                  <li>
                    <p>Pilhas: Não</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pnTrilhaTrajeto">
          <div className="pnTrilhaTrajetoConteudoContainer">
            <div className="pnTrilhaTrajetoConteudo">
              <div className="pnTrilhaTrajetoTitulo">
                <h2>Trajeto Pico do Mirante</h2>
              </div>
              <div className="pnTrilhaTrajetoMapa">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1uyxnw5SnPSDNnQ-AKLCAMpyoPhB-U5A&ehbc=2E312F&noprof=1"
                  width="800"
                  height="400"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TrilhaSelecionada;
