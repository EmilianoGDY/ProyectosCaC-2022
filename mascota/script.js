
const contenedor = document.querySelector(".contenedor");


class Animal{
    constructor(especie, nombre, edad){
        this.especie = especie;
        this.nombre = nombre;
        this.edad = edad;
    }
    
};

const perro = new Animal(`Perro`, `Lio`, 2);

const boton = document.querySelector(".botoncito");

const alimento = document.querySelector(".alimentar")

boton.addEventListener("click", cambioTexto);

alimento.addEventListener("click", alerta);

function cambioTexto(){
    const texto = document.getElementById("textito");
    texto.innerHTML = `Hola a todos, Me llamo ${perro.nombre}, soy un ${perro.especie} pincher y tengo ${perro.edad} años. Nací en Ca5tamarca pero vivo en Corrienets con mi familia. Me gusta mucho jugar a la pelota y comer pollo hervido`;
};

function alerta(){
    alert(`Gracias por la comida Humano!!!`);
}












// contenedor.innerHTML = ` <p> Especie: ${perro.especie}</p>
//                          <p> Nombre: ${perro.nombre} </p>
//                          <p> Edad: ${perro.edad}</p>`;