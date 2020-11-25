// rest parameters (...)
// el valor que toma la variable despues de los ... es un array de los parametros a partir de donde esta para la derecha.
// ejemplo ...numeros => numeros = [parametro1, parametro2, etc]
// Rest parameter must be last formal parameter
function sumar(leyenda, ...numeros) {
  // numeros => [1, 2, 3, 4]
  console.log(leyenda)
  return numeros.reduce((accum, numero) => accum + numero, 0)
}

// sumar(1, 2, 3, 4) // 10
// sumar(1, 2) // 3
// sumar(1) // 1

// console.log(sumar(1, 2, 3, 4))
// console.log(sumar(1, 2))
// console.log(sumar(1))
console.log(sumar("adelante", 1, 2, 3, 4))



