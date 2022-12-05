import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo2.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
        
    <div className='header'>
        <img className='logo' src={Logo} alt='' />
  {(menuOpened=== false && mobile===true)?(
   <div style={{backgroundColor: "var(--appColor)",padding:'0.5rem', borderRadius: '5px', }}
    onClick={()=> setMenuOpened(true)}
   >
      <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
  </div>
     
): <ul className='header-menu'>
<li><Link
onClick={()=>setMenuOpened(false)}
to='inicio' 
 span={true}
  smooth={true}

>Inicio</Link></li>
<li onClick={()=>setMenuOpened(false)}><Link
  onClick={()=>setMenuOpened(false)}
  to='programa' 
   span={true}
    smooth={true}
>Servicios</Link></li>

<li onClick={()=>setMenuOpened(false)}><Link
  onClick={()=>setMenuOpened(false)}
  to='Nosotros2' 
   span={true}
    smooth={true}
>Nosotros</Link></li>

<li onClick={()=>setMenuOpened(false)}><Link
     onClick={()=>setMenuOpened(false)}
     to='plan' 
      span={true}
       smooth={true}
>Planes</Link></li>

<li><Link
 onClick={()=>setMenuOpened(false)}
 to='testimonio' 
 span={true}
  smooth={true}
  >Testimonio</Link></li>
</ul> }
       
    </div>
  )
}

export default Header