import { div, section } from 'framer-motion/client';
import '../NossosParceiros/Slide.css';

const logos = [
  { src: '/todos/centauro.png', alt: 'Centauro' },
  { src: '/todos/Decathlon.png', alt: 'Decathlon' },
  { src: '/todos/lume.parceiro.png', alt: 'Lume' },
  { src: '/todos/macboot.png', alt: 'Macboot' },
  { src: '/todos/tnf.png', alt: 'The North Face' },

  // duplicar para looping suave
  { src: '/todos/centauro.png', alt: 'Centauro' },
  { src: '/todos/Decathlon.png', alt: 'Decathlon' },
  { src: '/todos/lume.parceiro.png', alt: 'Lume' },
  { src: '/todos/macboot.png', alt: 'Macboot' },
  { src: '/todos/tnf.png', alt: 'The North Face' },
];

export default function LogoCarousel() {
  return (
    <section className="ColorBack">
      <div className="carousel-container">
        <div className="pnLogoParceirosDados">
          <h2 className="pnTituloParceiros">Nossos Parceiros</h2>
          <p>Os melhores produtos para os melhores clientes</p>
        </div>

        <ul className="carousel-track">
          {logos.map((logo, index) => (
            <li className="carousel-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
