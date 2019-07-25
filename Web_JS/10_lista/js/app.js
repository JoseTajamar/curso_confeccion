export function app() {

    // Existe un input #in-new
    // Existe un elemento #out-lista
      
    // Nodos
    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')

    // Asignar manejador de eventos
    inAnimal.addEventListener('change', addAnimal)

    // Crear e inicializar el array
    let animales = [] 
    // ¿Existe storage?
    if(localStorage.getItem('zoo')) {
        animales = JSON.parse(localStorage.getItem('zoo'))
        render()
    }
    
    // let animales = (localStorage.getItem(animales)) ?
    //        localStorage.getItem(animales) : [] 

    // Funciones
    function addAnimal() {
        animales.push(inAnimal.value)
        localStorage.setItem('zoo', JSON.stringify(animales))
        console.log(JSON.stringify(animales))
        inAnimal.value = ''
        render()
    }
    
    function render() {
        let html = '' 
        html += '<ul>'
        animales.forEach((item, i) => html += 
            `<li>${item}
                <span class = "btn btn-borrar"${i}>✍🏻</span>
                <span class = "btn btn-borrar"${i}>🗑️</span>
            </li>`)
        html += '</ul>'
        outAnimal.innerHTML = html

        let aBtnBorrar = document.querySelectorAll('.btn-borrar')
        let aBtnEditar = document.querySelectorAll('.btn-editar')

        aBtnBorrar.forEach(btn => btn.addEventListener('click', onBorrar))     
        aBtnEditar.forEach(btn => btn.addEventListener('click', onEditar))    
    }

    function onBorrar(ev){
        console.log(ev.target.parentNode)
        animales.splice(ev.target.dataset.id, 1)
        localStorage.setItem('zoo', JSON.stringify(animales))
    }

    function onEditar(ev){
        console.log(ev.target.parentNode)
    }
}

