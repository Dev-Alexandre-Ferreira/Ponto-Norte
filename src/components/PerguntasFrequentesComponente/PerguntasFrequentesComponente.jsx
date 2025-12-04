import '../PerguntasFrequentesComponente/PerguntasFrequentesComponente.css';

function Pergunta({ pergunta, resposta }) {
  return (
    <section className="pnPerguntasContainer">
      <div className="pnItemsPergunta">
        <div className="pnPerguntaConteudo">
          <h2>{pergunta}</h2>
        </div>

        <div className="pnRespostaConteudo">
          <p>{resposta}</p>
        </div>
      </div>
    </section>
  );
}

export default Pergunta;
