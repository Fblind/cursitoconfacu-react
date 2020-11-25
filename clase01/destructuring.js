// lista
const [primero,, ultimo] = [1, 2, 3];
// console.log(primero)
// console.log(ultimo)

// objects
const valeria = {
  nombre: "valeria",
  apellido: "pera",
  nacionalidades: ["italiana", "argentina"],
}

const facundo = {
  nombre: "facundo",
  apellido: "soria",
  nacionalidades: ["argentina"],
}

const { nombre } /* { nombre } */ = valeria;
console.log(nombre)
const { apellido: newApellido } = valeria;
// const newApellido = valeria.apellido
console.log(newApellido)
// const argentina = valeria.nacionalidades[1];
const { nacionalidades: [, argentina] } = valeria;
console.log(argentina)
const { nacionalidades: [, nacion = "italiana"] } = facundo;
console.log(nacion)


