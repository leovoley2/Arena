import React from 'react'
import './Programa.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const programa = () => {
  return (
    <div className="programa" id='programa'>
        {/* header   */}
        <div className="programa-header">
            <span className='stroke'>Explora </span>
            <span>Nuestros </span>
            <span className='stroke' >Programas</span>
        </div>

        <div className="programa-categoria">
            {programsData.map((program)=>(
                <div className="categoria">
                {program.image}
                <span>{program.heading}</span>
                 <span>{program.details}</span>
                 <div className="join-now"><span>Ver más</span><img src={RightArrow} alt=''/></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default programa 