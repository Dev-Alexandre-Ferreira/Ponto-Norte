import '../LGPD/LGPD.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LGDPTela() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="pnLGPD">
        <div className="pnWallpaperLGPD">
          <div className="pnWallpaperLGPDConteudo">
            <p>PRIVACIDADE</p>
            <h1>LGPD - Lei Geral de Proteção de Dados</h1>
          </div>
        </div>

        <section className="pnLGPDConteudo">
          <h2>Compromisso com a privacidade e a LGPD</h2>
          <p>
            Na Ponto Norte, proteger os dados dos nossos usuários é uma
            responsabilidade que levamos muito a sério. Sabemos o quanto a
            privacidade é importante em um ambiente digital, e por isso adotamos
            práticas de segurança e transparência que estão em conformidade com
            a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº
            13.709/2018). Essa legislação brasileira regula o tratamento de
            dados pessoais e reforça os direitos dos cidadãos em relação às suas
            informações. Coletamos apenas os dados necessários para garantir o
            funcionamento e a melhoria contínua da nossa plataforma. Isso pode
            incluir, por exemplo, nome, e-mail, localização e preferências de
            uso — sempre com base no seu consentimento ou em outras bases legais
            previstas pela LGPD.
            <br />
            <br />
            Todas as informações fornecidas são tratadas com confidencialidade,
            armazenadas em ambientes seguros e utilizadas exclusivamente para as
            finalidades que você autorizou.
            <br />
            <br />
            Além disso, oferecemos total transparência sobre como seus dados são
            utilizados. Você pode, a qualquer momento, exercer seus direitos
            como titular dos dados, incluindo o acesso às suas informações,
            solicitação de correção, revogação do consentimento ou até a
            exclusão dos dados, salvo quando houver necessidade de retenção por
            exigência legal ou regulatória. Prezamos por uma comunicação clara e
            respeitosa, garantindo que você tenha controle sobre suas
            informações a qualquer momento.
            <br />
            <br />
            Se surgir qualquer dúvida sobre nossa Política de Privacidade ou
            sobre como tratamos seus dados pessoais, nossa equipe está à
            disposição. Entre em contato com o nosso Encarregado de Proteção de
            Dados (DPO) pelo e-mail: suporte@pontonorte.com.br. Estamos aqui
            para garantir uma experiência segura, ética e confiável em todos os
            seus momentos com a Ponto Norte.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LGDPTela;
