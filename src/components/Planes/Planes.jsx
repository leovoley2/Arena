import React from 'react'
import './Planes.css'
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'

const Planes = () => {
  return (

    <div className="planes-contenedor" id='plan'>
        <div className="blur plan-blur1"></div>
        <div className="blur plan-blur2"></div>
        <div className="programa-header" style={{gap: '2rem'}}>
            <span className='stroke'>comienza </span>
            <span >el viaje junto a </span>
            <span className='stroke'> nosotros</span>
        </div>

        {/* plan card*/}
        <div className="planes" >
            {plansData.map((plan, i) =>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>S/ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        )) }
                    </div>

                    <div>
                        {/*<span>Ver más Beficio </span>*/}
                        <button className='btn'>Únete ahora </button>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Planes