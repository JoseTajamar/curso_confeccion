export function validacion() {
    let userName = document.querySelector('#userName')
    userName.addEventListener('input', onUserInput)
    console.dir(userName)

    userName.v

    function onUserInput(ev) {
        let nodo = ev.target.ne
        console.dir(nodo)
        if (!nodo.validity.valid){
            nodo.nextElementSibling.innerHTML =
                nodo.validationMessage
            nodo.nextElementSibling
        }

    }
}