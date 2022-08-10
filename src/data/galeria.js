 const imagenes = document.querySelectorAll('img-galeria')
//const imagenesLigth = document.querySelector('agregar-imagen')
//const contenedorLigth = document.querySelector('imagen-ligth')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        alert('me dolio')
    })
})