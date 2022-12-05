import React, {useRef, useEffect, useCallback} from 'react'
import './Slider.css'
import beach1 from '../../assets/beach1.jpg'
import beach2 from '../../assets/beach2.jpg'
import beach3 from '../../assets/beach3.jpg'
import { ReactComponent as FlechaIzquierda } from '../../assets/iconmonstr-angel-left-thin.svg'
import { ReactComponent as FelchaDerecha} from '../../assets/iconmonstr-angel-right-thin.svg'
import Leo from '../../assets/leo.png'


const Slider = ({
    autoplay = false,
    velocidad="500",
    intervalo="5000"}) => {

    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if(slideshow.current.children.length > 0){
			console.log('Siguiente')

			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);

    const anterior = () => {
		console.log('Anterior');
		if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

    useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);
	
			// Eliminamos los intervalos
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});
	
			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

  return (
	<>
    <div className="contenedor">
     <div className="contenedor-slide" ref={slideshow}>
        <div className="slide">
            <img src={beach1} alt="" />
        </div>
        <div className="slide">
            <img src={beach2} alt="" />
        </div>
        <div className="slide">
            <img src={beach3} alt="" />
        </div>
    </div>
        
        <div className='controles'>
            <button  className='boton' onClick={anterior}>
                <FlechaIzquierda />
            </button>
            <button  className='boton derecho' onClick={siguiente}>
                <FelchaDerecha/>
            </button>
        </div>
    </div>
	<div className="info">
		<div className="contenedorE">
			<h2>Nuestros entrenadores</h2>
			<div className="info-pet">
				<img src={Leo} alt="" />
				<h4>Leobardo Sanabria</h4>
			</div>
			<div className="info-pet">
				<img src={Leo} alt="" />
				<h4>Leobardo Sanabria</h4>
				<p>Entrenador internacional con experiancia en el alto rendimiento</p>
			</div>
		</div>
		
	</div>
	</>
  )
}

export default Slider