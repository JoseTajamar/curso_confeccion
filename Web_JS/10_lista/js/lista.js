function app() {

    //Existe un input #in-animal

    let animales = []

    //Nodos
    let inAnimal = document.querySelector('#in-animal')

    //asignar manejador de eventos
    inAnimal.addEventListener('change', addAnimal)

    //Funcion
    function addAnimales(){
        animales.push(inAnimal.value)
    }
}