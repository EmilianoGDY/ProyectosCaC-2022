
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



boton.addEventListener("click", cambioTexto);

function cambioTexto(){
    const texto = document.getElementById("textito");
    texto.innerHTML = `Hola a todos, Me llamo ${perro.nombre}, soy un ${perro.especie} pincher y tengo ${perro.edad} años. Nací en Catamarca pero vivo en Corrienets con mi familia. Me gusta mucho jugar a la pelota y comer pollo hervido`;
};













// contenedor.innerHTML = ` <p> Especie: ${perro.especie}</p>
//                          <p> Nombre: ${perro.nombre} </p>
//                          <p> Edad: ${perro.edad}</p>`;