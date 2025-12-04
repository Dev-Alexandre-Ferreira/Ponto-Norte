import { useState, useEffect, useRef } from 'react';
import '../../components/NovasTrilhas/NovasTrilhas.css';
import { motion } from 'framer-motion';

import img1 from '../../assets/Trilhas/mirante.jpg';
import img2 from '../../assets/Trilhas/pontinha.jpg';
import img3 from '../../assets/Trilhas/escondida.png';
import img4 from '../../assets/Trilhas/comunidade.jpg';
import img5 from '../../assets/Trilhas/caixa.jpg';

const images = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

function TrilhasNovas() {
  const carrosel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth);
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <section className="pnSlideTotal">
      <div className="SlideContainerDados">
        <h3>Conheça novas trilhas</h3>
        <p>
          Navegue pelas trilhas disponíveis e descubra novas possibilidades para
          novas aventuras.
        </p>
      </div>

      <div className="SlideContainer">
        <motion.div
          ref={carrosel}
          className="carrosel"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => (
              <motion.div className="itemImage" key={image}>
                <img src={image} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TrilhasNovas;
