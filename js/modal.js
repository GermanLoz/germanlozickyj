
let texto = ["Tener una página web aumenta tus posibilidades de atraer clientes, ya que el 70% de las personas investigan por internet antes de realizar una compra o adquirir un servicio. Esto genera mayores beneficios para usted, sera visible para posibles clientes.",
              "Mas del 56% de los usuarios que navegan por internet lo hacen desde un dispositivo celular, usted obtendrá una gran ventaja frente a otros sitios web ya que el 70% de los sitios web está adaptado a móviles.",
              "Más allá de un diseño bonito, mi propuesta es que trabajemos en equipo y lo ayude a generar más clientes a través de internet. Utilizamos estrategias de SEO para su posicionamiento web."
               ];
const modalCont = document.querySelector('.modal-container');
const contText = document.getElementById('cont-modal');
const buttonClose = document.getElementById('cerrar');
console.log(contText)
const modal = (text) => {
    const nodo = texto[text]
    modalCont.style.display = "block"
    contText.innerText = nodo
}

buttonClose.addEventListener('click', () =>{
    close()
})

const close = () => {
    modalCont.style.display = "none"
}
const buttons = (buttons, text) => {
   let button = document.getElementById(buttons)
        button.addEventListener('click', () => {
            modal(text)
        })
}

buttons("textOne", 0)
buttons("textTwo", 1)
buttons("textTree", 2)

