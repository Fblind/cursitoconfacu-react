class Empleado {
  constructor(nombre, apellido, cuil) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cuil = cuil;
  }

  metodoDeInstancia() {
    console.log("metodoDeInstancia, aca si me sirve el this")
    console.log("Nombre: ", this.nombre, " Apellido: ", this.apellido, " Cuil: ", this.cuil)
  }

  static metodoDeClaseOEstatico() {
    console.log("metodoDeClaseOEstatico, aca no te sirve el this")
    console.log(this.nombre) // undefined!
  }
}

class EmpleadoTecnologico extends Empleado {
  constructor(nombre, apellido, cuil, tecnologia) {
    super(nombre, apellido, cuil);
    this.tecnologia = tecnologia;
  }

  metodoDeInstanciaTecnologico() {
    console.log("Esto solo lo pueden ver los tecnologicos!!!");
  }
}

const facundo = new Empleado("facundo", "capo", 123); // instanciando la clase empleado (creando un nuevo objetito empleado con el nombre facundo)
console.log(facundo.nombre); // facundo
facundo.metodoDeInstancia(); // llamando un metodo de instancia
const valeria = new Empleado("valeria", "pericles", 123123);
valeria.metodoDeInstancia();

Empleado.metodoDeClaseOEstatico(); // llamando un metodo de clases

const roberto = new EmpleadoTecnologico("roberto", "lacrose", 123123, "javascript");
console.log(roberto.apellido); // lacrose
console.log(roberto.tecnologia); // javascript
roberto.metodoDeInstancia();
roberto.metodoDeInstanciaTecnologico();
// facundo.metodoDeInstanciaTecnologico(); // error !


// "hola".toLowerCase();
// const hola = new String("hola")
// hola.toLowerCase();
// Math.floor(1)
