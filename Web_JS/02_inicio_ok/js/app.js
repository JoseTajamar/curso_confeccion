console.log('cargada app')

function saludar() {
    let user = document.querySelector('#nombre').value 
    console.log(`Hola ${user}, desde una funcion`)
}

document.querySelector('#btn.normal').onclick = saludar
