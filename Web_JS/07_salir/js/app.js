export function app() {
    console.log('Cargada app') 
    
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar = document.querySelector('#dlg-cancelar')
    let btnCancelar = document.querySelector('#btn-cancelar')
    let dlgTime = document.querySelector('#dlg-Time')
    let handler

    btnSalir.addEventListener('click', onClick)
    btnCancelar.addEventListener('click', onCancel)


    function onClick() {
        let url = 'https://www.google.com/'
        handler = setTimeout(() => location.assign(url),
                    4000)
        dlgCancelar.showModal()
        dlgTime.value = 5
        setInterval( () => {
            console.log(i) 
            dlgTime.value -= 1
        }, 1000)
    }

    function onCancel() {
        clearTimeout(handler)
        dlgCancelar.close()
    }
 }