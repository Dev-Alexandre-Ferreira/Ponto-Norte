import '../PerguntasFrequentes/PerguntasFrequentes.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Pergunta from '../../components/PerguntasFrequentesComponente/PerguntasFrequentesComponente';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PerguntasFrequentesTela() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="pnPerguntasFrequentes">
        <div className="pnWallpaperPerguntasFrequentes">
          <div className="pnWallpaperPerguntasFrequentesConteudo">
            <p>PRIVACIDADE</p>
            <h1>Trilhe com confiança</h1>
          </div>
        </div>

        <section className="pnPerguntasFrequentesConteudoContainer">
          <section className="pnPerguntasFrequentesConteudo">
            <Pergunta
              pergunta="O que é a Ponto Norte?"
              resposta="A Ponto Norte é uma Plataforma Web com intuito de conectar pessoas a trilheiros profissionais (guias especializados) para realizarem trilhas de forma confiável e segura."
            />
            <Pergunta
              pergunta="Os guias presentes na plataforma são certificados?"
              resposta="Sim! Um dos requisitos para se cadastrar como guia na Ponto Norte é o registro no Cadastur."
            />
            <Pergunta
              pergunta="A plataforma oferece  transporte até o ponto de encontro com o guia?"
              resposta="Não! A Ponto Norte não oferece transporte até o ponto de encontro entre o guia e o trilheiro. É o dever de ambos os envolvidos se atentarem a esse detalhe."
            />
            <Pergunta
              pergunta="Quais são os benefícios de usar a plataforma Ponto Norte?"
              resposta="A Ponto Norte possui como benefícios a disponibilização de trilhas seguras e confiáveis, pretação de serviço de guias certificados para promover a segurança do trilheiro, cupons de desconto para os trilheiros da Ponto Norte utilizarem em plataformas parceiras, e muito mais! "
            />
            <Pergunta
              pergunta="Existe algum limite de idade para participar das trilhas?"
              resposta="Não! Não existe limite de idade para participar das trilhas. "
            />
            <Pergunta
              pergunta="É necessário efetuar algum tipo de pagamento para criar minha conta?"
              resposta="Não! Você pode criar sua conta de maneira gratuita. As únicas partes que envolvem o pagamento é na contratação de algum plano Ponto Norte e no serviço prestado pelo guia."
            />
            <Pergunta
              pergunta="A Ponto Norte disponibiliza trilhas para iniciantes?"
              resposta="Sim! Não só para iniciantes mas para todos os níveis de experiências que os trilheiros possam ter."
            />
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PerguntasFrequentesTela;
