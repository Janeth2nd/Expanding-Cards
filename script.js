const panels = document.querySelectorAll(".panel"); //El método querySelectorAll() de un Element devuelve una NodeList representa una lista de 
                                                     //elementos del documento que coinciden con el grupo de selectores indicados.

panels.forEach(panel => {
    panel.addEventListener("click", () => {    //addEventListener() Registra un evento a un objeto en específico. 
        removeActiveClasses()
        panel.classList.add('active')  //Usar classList es una forma práctica de acceder a la lista de clases de un elemento como una->
                                       //cadena de texto delimitada por espacios a través de element.className.
    })                                 //The add() method inserts a new element with a specified value in to a Set object.
})

const removeActiveClasses = function () {
    panels.forEach(panel => {
        panel.classList.remove("active") //The Element.remove() method removes the element from the DOM.
    })
}

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }