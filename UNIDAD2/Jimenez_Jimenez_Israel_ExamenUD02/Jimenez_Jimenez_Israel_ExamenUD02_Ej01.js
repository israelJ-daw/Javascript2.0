class Pelicula {
  #precioBase;

  constructor(titulo, genero, precioBase) {
    this.titulo = titulo;
    this.genero = genero;
    this.#precioBase = 5;
  }

  precio() {
    if (this.genero == "terror" || this.genero == "estreno") {
      return this.#precioBase + 2;
    } else {
      return this.#precioBase;
    }
  }

 generoNuevo(nuevoGenero) {
    if (typeof nuevoGenero == " ") {
        throw new TypeError("El genero no puede estar vacio");
    }else {
        this.genero = nuevoGenero
    }
    return "Genero cambiado";
} 
}

let peli1 = new Pelicula("peli1" , "terror")

try {
    console.log(nuevoGenero(" "));  
} catch (error) {
    console.error("Error:", "El genero no puede estar vacio");
}

console.log (peli1.precio())
