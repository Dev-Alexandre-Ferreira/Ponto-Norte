import '../../components/CardGuias/CardGuias.css';
import { Link } from 'react-router-dom';

function CardGuias({ nome, texto, foto }) {
  return (
    <article className="pnCardGuiasFoto">
      <img id="pnCardGuiaFoto" src={foto} alt="" />
      <section className="pnCardGuiaContainer">
        <div className="pnCardGuiaDados">
          <h3>{nome}</h3>
          <ul className="pnCardGuiaLocalizacao">
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

          <div className="pnCardGuiaPrevia">
            <p>{texto}</p>
          </div>

          <Link id="pnCardGuiaBotao" to="/">
            Conhecer
          </Link>
        </div>
      </section>
    </article>
  );
}

export default CardGuias;
