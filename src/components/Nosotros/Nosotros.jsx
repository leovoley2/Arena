import React from 'react'
import './Nosotros.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import chorrillos from '../../assets/chorrillos.png'
import tulogo from '../../assets/tulogo.png'
const Nosotros = () => {
  return (
    <div className="nosotros" id='reasons'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>Algunos motivos</span>
                <div className='letras'>
                    <span className="stroke">Por qué </span>
                    <span>elegirnos?</span>
                </div>
                <div className="detalles">
                    <div>
                        <img src={tick} alt="" />
                        <span>Entrenadores capacitados y con experiencia </span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Materiales óptimos para el trabajo diario </span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Promovemosla actividad física a través del voleibol de playa, donde  se pueda ver procesos de mejora a través del esfuerzo y trabajo constante</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Tenemos como premisa la calidad, el desarrollo de habilidades y mejora de las existentes, creando  el ambiente ideal para que cada persona se sienta a gusto.</span>
                    </div>
                </div>
                <span style={{
                    color : 'var(--orange)', 
                    fontWeight: 'normal',
                }}>Vincule su marca</span>

                <div className='patrocinantes'>
                    <img src={chorrillos} alt="" />
                    <img src={tulogo} alt="" />
                    <img src={tulogo} alt="" />
                    
                </div>
            </div>
    </div>
  )
}

export default Nosotros