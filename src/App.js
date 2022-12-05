import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join';
import Nosotros from './components/Nosotros/Nosotros';
import Planes from './components/Planes/Planes';
import Programa from './components/Programa/Programa'
//import Slider from './components/Slider/Slider';
import Testimonio from './components/testimonio/Testimonio';
import Whatsap from './assets/whatsapp.png'
import Mapa from './components/Mapa/Mapa';
import Entrenadores from './components/Entrenadores/Entrenadores';
import Nosotros2 from './components/Nosotros2/Nosotros2';

function App() {
  return (
    <div className="App">
      
      <div className="whatsapp">
              <a href="https://wa.me/51929418895" ><img src={Whatsap} alt=''/></a>
          </div>
          <Hero/>
          <Programa/>
          <Nosotros/>
          <Testimonio/>
          <Nosotros2/>
          <Planes/>
          {/*<Slider/>*/}
          <Join/>
          <Entrenadores/>
          <Mapa/>
          <Footer/>
          <div>
            
          </div>
    </div>
  );
}

export default App;
