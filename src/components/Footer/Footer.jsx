import React from 'react'
import './Footer.css'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Logo  from '../../assets/logo2.png'
import Whatsap from '../../assets/whatsapp.png'


const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </div>  
      

      <div className="logo">
          <img src={Logo} alt="" />
          <p>Todos los derechos reservados</p>
      </div>
      <div className="whatsapp">
              <a href="https://wa.me/51929418895" ><img src={Whatsap} alt=''/></a>
          </div>
      </div>
      
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer