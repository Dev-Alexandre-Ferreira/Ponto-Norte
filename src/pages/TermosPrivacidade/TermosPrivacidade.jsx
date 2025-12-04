import '../TermosPrivacidade/TermosPrivacidade.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TermosPrivacidadeTela() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="pnTermosPrivacidade">
        <div className="pnWallpaperTermosPrivacidade">
          <div className="pnWallpaperTermosPrivacidadeConteudo">
            <p>PRIVACIDADE</p>
            <h1>Termos e Privacidade</h1>
          </div>
        </div>

        <section className="pnTermosPrivacidadeConteudo">
          <h2>1. Introdução</h2>
          <p>
            A Ponto Norte é uma plataforma dedicada à conexão segura entre
            trilheiros e guias certificados, com foco em promover experiências
            responsáveis e imersivas na natureza. Ao acessar ou utilizar nossos
            serviços, você concorda com os presentes Termos de Uso e com esta
            Política de Privacidade. Recomendamos a leitura atenta de todas as
            cláusulas.
          </p>

          <h2>2. Termos de Uso</h2>
          <h3>2.1. Serviços Oferecidos</h3>
          <p>
            A Ponto Norte oferece:
            <br />
            • Conexão entre trilheiros e guias turísticos certificados
            (CADASTUR);
            <br />
            • Recomendação de trilhas próximas à localidade do usuário;
            <br />• Acesso ao dispositivo “Ponto Norte V1”, que inclui: marcação
            de trilha, pontos de interesse e canal de comunicação SOS.
          </p>

          <h3>2.2. Cadastro de Usuário</h3>
          <p>
            Para utilizar determinadas funcionalidades da plataforma, o usuário
            poderá precisar criar uma conta, fornecendo dados pessoais e
            concordando com os presentes termos.
          </p>

          <h3>2.3. Responsabilidade do Usuário</h3>
          <p>
            O usuário compromete-se a:
            <br />
            • Utilizar a plataforma de forma ética e legal;
            <br />
            • Não violar direitos de terceiros ou das normas ambientais;
            <br />• Informar dados verdadeiros e mantê-los atualizados.
          </p>

          <h3>2.4. Responsabilidades da Plataforma</h3>
          <p>
            A Ponto Norte atua como intermediadora entre trilheiros e guias, não
            sendo responsável por condutas individuais, acidentes ou
            descumprimentos legais de terceiros. No entanto, buscamos garantir a
            verificação dos guias cadastrados e incentivar práticas seguras.
          </p>

          <h3>2.5. Uso do Dispositivo Ponto Norte V1</h3>
          <p>
            O uso do GPS “Ponto Norte V1” está vinculado à aquisição ou
            assinatura conforme os planos oferecidos. A responsabilidade pelo
            uso adequado do dispositivo é do usuário.
          </p>

          <h2>3. Política de Privacidade</h2>
          <h3>3.1. Coleta de Dados</h3>
          <p>
            Ao utilizar a plataforma, poderemos coletar:
            <br />
            • Dados de identificação (nome, e-mail, localização);
            <br />
            • Dados de uso (acessos, trilhas buscadas, tempo de navegação);
            <br />• Dados do GPS e localização em tempo real (com
            consentimento).
          </p>

          <h3>3.2. Uso de Dados</h3>
          <p>
            Os dados são utilizados para:
            <br />
            • Melhorar a experiência na plataforma;
            <br />
            • Personalizar recomendações de trilhas e guias;
            <br />• Oferecer suporte e segurança em casos de emergência.
          </p>

          <h3>3.3. Compartilhamento de Dados</h3>
          <p>
            Não compartilhamos dados pessoais com terceiros sem consentimento,
            salvo quando necessário para:
            <br />
            • Cumprimento legal;
            <br />
            • Execução do serviço (ex: compartilhamento com guias);
            <br />• Situações de emergência.
          </p>

          <h3>3.4. Armazenamento e Segurança</h3>
          <p>
            Adotamos medidas técnicas e organizacionais para proteger os dados
            contra acessos não autorizados, vazamentos ou destruição indevida.
          </p>

          <h3>3.5. Cookies</h3>
          <p>
            Utilizamos cookies para melhorar sua experiência de navegação. Você
            pode configurar seu navegador para recusá-los, mas isso pode limitar
            algumas funcionalidades.
          </p>

          <h2>4. Diposições Finais</h2>
          <p>
            • A Ponto Norte pode alterar estes termos a qualquer momento, com
            aviso prévio por meio da plataforma ou e-mail;
            <br />
            • O uso contínuo dos serviços após alterações implica concordância
            com os novos termos;
            <br />• Em caso de dúvidas, entre em contato pelo nosso canal de
            atendimento: suporte@pontonorte.com.br
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TermosPrivacidadeTela;
