export function app() {
    console.log('Cargada app')

    //Nodos
    aBotones = document.querySelectorAll('button')
    //Iniciar, vaciar, mostrar, recargar
    output = document.querySelector('output')
    
    //Manejadores

    aBotones.forEach(btn => {
        btn.addEventListener('click', onClick)
    });

    //Funciones manejadoras
    
    function onClick(ev) 
}