// spread operator
function sumar(...numeros) {
  // numeros => [1, 2, 3, 4]
  return numeros.reduce((accum, numero) => accum + numero, 0)
}

const listaDeNumeros = [1, 2, 3, 4]
console.log(sumar(...listaDeNumeros)) // 10

const nacionalidadArgentina = {
  pais: "Argentina",
  religion: "catolico apostolico romano",
  habitantes: 3400000,
}

const facundo = {
  nombre: "Facundo",
}

console.log({
  ...nacionalidadArgentina, // pais: "Argentina", religion: "catolico apostolico romano", habitantes: 3400000
  otro: "lalalallala",
  nombre: "roberto",
  ...facundo, // nombre: "Facundo"
})

