import React from 'react'
import './Join.css'
import Horario from '../../assets/horarios.png'




const Join = () => {
    

   

  return (
  <div className="join" id='join-us'>
    <div className="left-j">
    <hr/>
        <div>
            <span className='stroke'>Estas listo </span>
            <span>Para vivir </span>
        </div>
        <div>
            <span> una nueva </span>
            <span className='stroke'>Experiencia? </span>
        </div>
    </div>
    <div className="right-j">
            <img src={Horario} alt="Horario"/> 
       
        {/*<form ref={form} className='email-container'>
            <input type="email" name='user_email' placeholder='Intruduzca su email' onSubmit={sendEmail} />
            <button className='btn btn-j'>Únete ahora</button>
        </form>*/}
    </div>
 
  </div>
  

  
  )
}

export default Join