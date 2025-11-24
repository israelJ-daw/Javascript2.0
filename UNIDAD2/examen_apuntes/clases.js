// ===============================
// 1. Crea una clase que reciba dos propiedades
// ===============================
class Persona {
  constructor(nombre, edad) { // recibe las propiedades nombre y edad
    this.nombre = nombre;
    this.edad = edad;
  }

  // ===============================
  // 2. Añade un método a la clase que utilice las propiedades
  // ===============================
  saludar() {
    console.log(
      "Hola me llamo " + this.nombre + " y tengo " + this.edad + " años."
    );
  }

  // ===============================
  // 4. Añade un método estático a la primera clase
  // ===============================
  static info() {
    console.log("Esta es una clase para crear personas.");
  }
}

// ===============================
// 3. Muestra los valores de las propiedades e invoca a la función
// ===============================
const persona1 = new Persona("Juan", 25);

console.log(persona1.nombre); // Muestra nombre
console.log(persona1.edad);   // Muestra edad
persona1.saludar();            // Llama al método

// ===============================
// 5. Haz uso del método estático
// ===============================
Persona.info(); // Llamada al método estático

// ===============================
// 6. Crea una clase que haga uso de herencia
// ===============================
class Empleado extends Persona {
  // ===============================
  // 8. Modifica la clase con getters y setters para que use propiedades privadas
  // ===============================
  #puesto; // propiedad privada

  // Constructor recibe nombre, edad y puesto
  constructor(nombre, edad, puesto) {
    super(nombre, edad); // herencia del constructor de Persona
    this.#puesto = puesto; // inicializa propiedad privada
  }

  // ===============================
  // 7. Crea una clase que haga uso de getters y setters
  // ===============================
  // Getter para leer la propiedad privada
  get puesto() {
    return this.#puesto;
  }

  // Setter para modificar la propiedad privada
  set puesto(nuevoPuesto) {
    this.#puesto = nuevoPuesto;
  }

  // Método propio de Empleado
  trabajar() {
    console.log(this.nombre + " está trabajando como " + this.puesto + ".");
  }

  // ===============================
  // 10. Sobrescribe un método de una clase que utilice herencia
  // ===============================
  saludar() {
    console.log(
      "Hola me llamo " +
        this.nombre +
        ", tengo " +
        this.edad +
        " años y trabajo como " +
        this.puesto +
        "."
    );
  }
}

// ===============================
// 9. Utiliza los get y set y muestra sus valores
// ===============================
const empleado1 = new Empleado("Ana", 30, "Desarrolladora");

// Usamos el setter para cambiar el puesto
empleado1.puesto = "Cajera";

// Usamos el getter para mostrar el puesto
console.log(empleado1.puesto); // Cajera

// Llamamos a los métodos
empleado1.trabajar(); // Ana está trabajando como Cajera
empleado1.saludar();  // Hola me llamo Ana, tengo 30 años y trabajo como Cajera.
