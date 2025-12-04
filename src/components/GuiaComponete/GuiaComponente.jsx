import '../GuiaComponete/GuiaComponente.css';

function Guia({ foto, nome, avaliacao, descricao, botao }) {
  return (
    <section>
      <div className="pnItensGuia">
        <img className="pnFotoGuia" src={foto} alt="Foto do guia" />
        <div className="pnGuiaConteudoContainer">
          <div className="pnGuiaConteudo">
            <h2>{nome}</h2>
            <ul className="pnAvaliacaoGuia">
              <li>{avaliacao}</li>
            </ul>
            <ul>
              <li className="pnDescGuia">{descricao}</li>
            </ul>
            <button className="pnBotaoGuia"> {botao} </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guia;
