export function app() {
    console.log('Cargada app')

    // Nodos del DOM
    
    let btnPulsar = document.querySelector('#btn-pulsar')
    let inNombre = document.querySelector('#in-nombre')
    let spanSaludo = document.querySelector('#span-saludo')

    //Asociacion de manejadores de eventos

    btnPulsar.addEventListener('click', onClickPulsar)
    inNombre.addEventListener('input', onInputNombre)

    //Funciones de Eventos

    function onClickPulsar(ev) {
        console.log(ev)
    }

    function onInputNombre(ev) {
        console.dir(ev.target.value)
    }
}