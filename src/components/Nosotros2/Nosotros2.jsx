import React from 'react'
import './Nosotros2.css'
import nosotros1 from '../../assets/nosotros1.jpg'
import nosotros2 from '../../assets/nosotros2.jpg'
import nosotros3 from '../../assets/nosotros3.jpg'

const Nosotros2 = () => {
  return (
   <section className='acerca-de' id='Nosotros2'>
        <div className="info-container">
            <h1>Acerca de Nosotros</h1>
            <p>Arena Voleibol Club fue creada con la idea de desarrollar el Voleibol de playa en Peru y preparar a los futuros campeones. Trabajamos para proporcionar las mejores condiciones para el entrenamiento regular durante todo el año, incentivando un estilo de vida a través del voleibol, dónde se pueda ver
procesos de mejora a través del esfuerzo y trabajo constante, bajo la guía de
profesionales que proporcionarán las herramientas necesarias para obtener un
buen desempeño. creando el ambiente ideal para que cada persona se sienta a
gusto y se supere día a día en la práctica de este deporte.</p>
            <p>Nuestro Compromiso es proporcionar un programa estructurado, competitivo y dinámico para todos los atletas. Alentamos a nuestros atletas a traer una actitud positiva a la cancha y dar un esfuerzo implacable cada día. A través de la práctica organizada y las metas y objetivos claramente comunicados, cada miembro de nuestro programa de voleibol de playa estará bien entrenado y preparado para el éxito en la cancha. Las lecciones y cualidades alcanzadas a través de nuestro programa de voleibol de playa serán una parte integral del aprendizaje de los fundamentos del voleibol de playa</p>
        
            <div className="nosotros-galeria">
            <img src={nosotros1} alt="" />
            <img src={nosotros2} alt="" />
            <img src={nosotros3} alt="" />
        </div>
        </div>

        
   </section>
  )
}

export default Nosotros2