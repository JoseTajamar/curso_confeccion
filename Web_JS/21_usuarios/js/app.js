import { LBGOOGLE } from './api.js'
export function app() {
    console.log('Cargada app')
    let aUsers = []

    // Nodos del DOM

    
 
    // Asociación de manejadores de eventos
    //btnGuardar.onclick = onClickGuardar
    tbUsuarios = document.querySelector('#btn-Usuarios')

    // Funciones manejadoras de eventos
    function getDatos() {
        fetch(USERS)
        .then ( response => response.json())
        .then ( data => {

        })
    }

    function renderData(data) 
        let html = `
        <tr>
            <th></th>  
        </tr>        
        
        `

    

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
    
}