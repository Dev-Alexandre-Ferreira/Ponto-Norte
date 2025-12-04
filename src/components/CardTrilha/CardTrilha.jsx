import '../CardTrilha/CardTrilha.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
function CardTrilha({ titulo, local, texto, distancia, altura, imagem }) {
  const { usuario } = useAuth();
  const navigate = useNavigate();

const handleConhecerClick = () => {
  if (usuario) {
    navigate('/TrilhaSelecionada');
  } else {
    navigate('/Login');
  }
};

  return (
    <article className="pnCardTrilhasFoto">
      <img id="pnCardTrilhaFoto" src={imagem} alt="" />
      <section className="pnCardTrilhasContainer">
        <div className="pnCardTrilhasDados">
          <h3 id="tituloTrilha">{titulo}</h3>
          <ul className="pnCardTrilhasLocalizacao">
            <li id="tamanho">{local}</li>

            <li id="CardAvaliacao">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/fluency/30/star--v1.png"
                alt="star--v1"
              />
            </li>
          </ul>

          <div className="pnCardTrilhasPrevia">
            <p>{texto}</p>
          </div>
          <ul className="pnCardTrilhasDistancia">
            <li>
              Distância <span>{distancia} ida e volta</span>{' '}
            </li>
            <li>
              Elevação <span>{altura} metros</span>
            </li>
          </ul>

          <button
            id="pnCardTrilhasBotao"
            onClick={handleConhecerClick}
          >
            Conhecer
          </button>

        </div>
      </section>
    </article>
  );
}

export default CardTrilha;
