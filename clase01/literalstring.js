const nombre = "valeria";
pepito`hola ${nombre}`

function pepito(stringModeParts, ...jsExpressionModeParts) {
  console.log(stringModeParts); // hola
  console.log(jsExpressionModeParts); // valeria
}

// css-in-js
// const StyledButton = Button`
// background: red;
// content: ${nombre}`

// <StyledButton />