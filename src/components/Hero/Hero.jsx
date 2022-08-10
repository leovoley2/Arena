import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from '../../assets/hero_image_back.png'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id='inicio'>
      <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header/>
        {/* seccion del mejor  */}
          <div className='el-mejor'>
              <motion.div 
                initial={{left: mobile? "165px": '238px'}}
                 whileInView={{left: '8px'}}
                 transition={{...transition, type: 'tween'}}>
                 
              </motion.div>
              <span>El mejor lugar para entrenar y divertirse </span>
          </div>
           {/* Hero heading  */}
            <div className='hero-texto'>
                <div>
                  <span className='stroke'>Tu camino hacia </span>
                  <span>el podio</span>
                  </div>
                  <div><span> comienza con el aprendizaje</span></div>
                  <div>
                    <span>El voleibol de playa es la manera perfecta de poner en forma tu cuerpo, es una excelente manera de desarrollar habilidades físicas, mejorar los fundamentos técnicos y divertirse! ¡Ven a la playa y comienza tu juego!</span> 
                  </div>
            </div>
           {/* hero botones  */} 
           <div className="botones">
           {/* <button className='btn'>Comenzar</button>*/}
            <button className='btn'><Link
              to='Nosotros2' 
              span={true}
              smooth={true}
            >Leer mas</Link></button>
           </div>
        </div>
        <div className='right-h'>
         {/* <button className='btn'>Unete ahora</button>

           hero imagenes  */} 

          <motion.img className='hero-image' src={hero_image} alt=''/>
          <motion.img
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
           className='hero-image-back' src={hero_image_back} alt=''/>
          </div>
    </div>
  )
}

export default Hero