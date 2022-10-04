
const contenedor = document.querySelector(".contenedor");


class Animal{
    constructor(especie, nombre, edad){
        this.especie = especie;
        this.nombre = nombre;
        this.edad = edad;
    }
    
};

const perro = new Animal(`Perro`, `Lio`, 2);

console.log(perro);

// contenedor.innerHTML = ` <p> Especie: ${perro.especie}</p>
//                          <p> Nombre: ${perro.nombre} </p>
//                          <p> Edad: ${perro.edad}</p>`;

                       