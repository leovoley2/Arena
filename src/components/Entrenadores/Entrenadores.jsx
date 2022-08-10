import React from 'react'
import './Entrenadores.css'
import image1 from '../../assets/galeria1.jpg'
import image2 from '../../assets/galeria2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'
import image6 from '../../assets/6.jpg'
import cerrar from '../../assets/x.svg'



const Entrenadores = () => {
  return (
    <>
    <section className='galeria'>
        <div className="contenedor">
            <h2 className="subtitulo">Galeria</h2>
            <div className="contenedor-galeria">
                <img src={image1} alt="" className='img-galeria' />
                <img src={image2} alt="" className='img-galeria' />
                <img src={image3} alt="" className='img-galeria' />
                <img src={image4} alt="" className='img-galeria' />
                <img src={image5} alt="" className='img-galeria' />
                <img src={image6} alt="" className='img-galeria' />  
            </div>
        </div>
    </section>
    <section className='imagen-ligth'>
        <img src={cerrar} alt="" className='close' />
        <img src={image1} alt="" className='agregar-imagen' />
    </section>
    </>
  )
}

export default Entrenadores