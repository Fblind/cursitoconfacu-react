const nombre = "valeria"
const lala = {
  [nombre]: "el nombrecito valeria",
  [`la${nombre}`]: "",
  [`${((name) => name.split("").pop() === "a" ? "la" : "el")(nombre)}${nombre.toUpperCase()}`]: "el valor"
}
console.log(lala)

// IIFE -> inmediate invoked function expression
(function hola (name) {
  return name.split("").pop() === "a" ? "la" : "el"
})(nombre)