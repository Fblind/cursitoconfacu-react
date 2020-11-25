- repaso general js and es6

  - Contar tc39
  - https://kentcdodds.com/blog/javascript-to-know-for-react
  - https://javascript30.com/
  - http://kcd.im/es6-workshop-at-paypal
  - https://github.com/kentcdodds/es6-workshop
  - https://github.com/lukehoban/es6features
  - todo lo que ya le mostré antes y el beneficio de functional javascript (tal vez ver pdep para funcional)
  - Objetos

- React fundamentos

  - https://egghead.io/courses/the-beginner-s-guide-to-reactjs?af=5236ad
  - https://kentcdodds.com/blog/super-simple-start-to-react
  - https://www.benmvp.com/videos/
  - https://workshops-js-montevideo.gitbook.io/react/dando-estilo-a-nuestro-componente
  - Todo lo que mostré antes:
    - React minimal library para hacer 3 cosas, manejar estados, actualizarlos y manejar la vista (nuestro html)
    - React.createElement
    - React.render (react-dom)
    - React.createFragment
    - React object and props
  - URL de crear React ! => https://www.youtube.com/watch?v=fKlt5GFQnVc&t=1143s
  - Create react => https://pomb.us/build-your-own-react/

- Repaso general de es6

  - Modulos !

- React Primer nivels

  - Virtual DOM
  - Babel y JSX
  - Custom components
  - props
  - listas
  - styles and className
    ? poner solo estatico ?
  - forms no controlados (sin states)

- Tarea !:
  - Crear un componente customizable (card que tenga imagen, titulo, descripcion y link)
  - De dos formas diferentes (JSX y React pelado)

---

# Clase en orden

- Presentación
- Qué es React ?, por qué lo usamos ?

  - Es una Biblioteca (Abstracción) para crear vistas (html) dinamicamente y que se pueden actualizar de una manera declarativa e inteligente, dandonos también la posibilidad de crear conjuntos chicos (componentes) independientes entre sí cada uno con su propio estado y funcionalidad.
  - Nuestro codigo queda más limpio, más pequeño.
  - Declarativo (codigo escrito en componenets)
  - Creado a partir de componentes pequeños que se encargan de sus cosas
  - Library vs Framework
    - React es solo una parte del conjunto, y no te dice como usarlo, a diferencia de los frameworks que tienen todo más cerrado con un conjunto de herramientas y una determinada forma de hacer las cosas.
    - Aunque se puede escuchar que es un framework también, dado que a medida que fue evolucionando el uso se esta usando como uno y cada vez crece más React.
  - Cosas buenas

    - => JSX declarativo "lenguaje" pero que se traduce a js, no templating
    <div>
    {{#if true}}
      <h1>Es verdadero</h1>
    {{#else}}
      <h1>Es falso!</h1>
    </div>
    <div>
      <h1>Es {true ? verdadero : falso!}</h1>
    </div>
    - => Everything is a component, components se arman de otros componentes, aca se va a escuchar siempre lo de que es como armar legos, tenes varios legos con diferente forma que despues arman una estrella de la muerte de star wars. Lo que hace que tener componentes chiquitos sean reutilizables y se puedan usar en muchos lados de tu app. **Component driven thinking**.
    - => All javascript: a pesar de tener jsx todo se transforma a javascript pelado, sin necesidad de tener otro lenguaje encima. conditional rendering con if lindo ejemplo.
```javascript
    if (true) return <div><h1>Es verdadero</h1></div>
    if (false) return <div><h1>Es falso!</h1></div>
```
```javascript
// VANILLA JAVASCRIPT - EVENT DRIVEN
element.addEventListener("click", () => {
  // buscar el elemento contador
  // ver en que "estado" está, o sea si es 0, 1,2 blablabla...
  // despues actualizar el elemento contador con el nuevo valor
  // renderizar
})
```
```javascript
// REACT - STATE DRIVEN
<h1>{contador}</h1>
<button onClick={() => setContador(contador + 1)} />
```
    - **state driven vs event driven** => react es state driven, declarative and reactivity vs imperative and programatically. La ui se actualiza cuando cambia el state del componente. React te hace escribir más codigo pero más mantenible a la larga...
      - como pensarlo y React renderer => awesome-react-renderer ?
        - 1. definis la props que te pasa tu padre, y el stado interno del componente, al igual que tu render function condicional o no.
        - 2. onEvent transforma una parte del estado en uno nuevo (update state) haciendo lo que quiera async, sync, etc. (transform internally, update with setState)
        - 3. componente vuelve a ejecutar su ciclo de vida basandose en las props y el estado.
    - => Magic react => Reconciler aka "Virtual DOM". Render() o el return del component no es updatear el dom, lo unico que actualiza es el virtual dom tree (objecto que describe como la ui deberia mosrtarse). Esto es lo que lo hace inteligente y solo actualiza y renderiza la porcion de la ui que necesita.
    - React y React renderer => awesome-react-renderer

## Fundamentos de React

- Mostrar codigo html que se va a ir actualizando con javascript
  - crear un div desde js y montarlo
    - Mostrar lo que nos devuelve el div creado (console.dir)
    - Eso todavia no esta montado => es una representación en "memoria" de lo que se mostraría por pantalla, que nuestro html entiende.
    - Montar nuestro elemento.
    - Agregar propiedades y atributos a nuestro elemento. (className, id, data-testid)
  - actualizar el valor del div con un setInterval
    - Mostrar como se actualiza en el html (todo el root element se va a actualizar no solo el html especifico)

## Fundamentos ES6

- ### Const - Let
  - scope vars breve repaso, diferencia entre var (function, closure scope) vs let y const y entre let vs const (mostrar bloque sin if ni nada), comentar try catch => catch es uno de los unicos block scope con var y with (pero esta deprecado)
  - lexical scope => definidos a lexing time, se basa en donde las variables y los bloques de scope tienen "permisos", o sea los permisos que tienen las variables para entenderse en los diferentes scopes cuando lo escribis.
- ### arrow function (funciones anonimas)
  - diferentes formas de escribirlas => body _ => , _ => {}, (_,_) =>, (\_) => ({})
  ```javascript
  const lala = () => "hola";
  const lala1 = () => {return "hola"};
  const lala2 = param => `hola ${param}`;
  const lala3 = (param, param1) => `hola ${param} y ${param1}`;
  const lala4 = (param, param1) => {return `hola ${param} y ${param1}`};
  const lala5 = (param, param1) => (`hola ${param} 
  y ${param1}`);
  const lala6 = param => ({key: param});
  ```
  - lexical this en arrow vs function
    - ejemplo object con this a él mismo con function y con arrow. var bob = {\_name: "bob", printfiends: function () vs () => {}}
    ```javascript
    function main () {
      const otrobob = Object.create(bob)
      this.saludar("pepe") // bob saluda a pepe
    }

    const bob = {
      name: "bob",
      saludar: function (personaASaludar) {
        return `${this.name} saluda a ${personaASaludar}`
      }
    }
    ```
- ### Enhanced object literals
  - shorthand => a: a => a,
  ```javascript
  const valor = "lala"
  const lala = {
    valor, // valor: valor,
  }
  ```
  - methods escritura => toString: function () => toString() {}
  ```javascript
  const lala = {
    toString: function () {},
    toString: () => {},
    toString() {}, // () => {},
  }
  ```
  - se puede usar super (referencia al proto que viene mas atras en la cadena) lo vamos a ver con clases.
  - computed (dynamic property names) => [variable + "string" + IIFE]: valor
  ```javascript
  const nombre = "valeria"
  const lala = {
    [nombre]: "el nombrecito valeria",
    [`la${nombre}`]: "",
    [((name) => name.reverse()[0] === "a" ? "la" : "el")(nombre)]: "el valor"
  }
  ```
  - **proto** para referenciar al "padre"
  - Nuevos methodos staticos de Object => .create, .assign , etc
  ```javascript
  Object.assign({a: "a"}, {b: "b"}, {a: "z"}) // {a: "z", b: "b"}
  ```
- ### literal string (string mode vs js expression mode)
  ```javascript
  const literal = `${variables} y tmb texto`
  // function
  const nombre = "valeria"
  tag`hola ${nombre}`
  ```
  - tag function call (recibe args primero string, y dsp lo que metes adentro)
- ### Destructuring y default params (property matching)
  - pattern matching KINDA! example (destructuring pattern, something similar to object and [])
    - list => [a, , b] = [1,2,3] // lista = [1,2,3]; a = lista[0]
    - object => {a: z, lhs: {op: b}} = {a: 1, lhs: {op: "hola"}} // z y b
  - shorthand => {a, lhs} = idem arriba // a y lhs
  - default => [a = 1] = [] => lo mismo en los parameter de la function
- ### Rest and spread parameters (... spread operator)
  - en la definicion de la funcion en el parametro => fx(x, ...rest) _rest parameter_
    - va a crear un array llamado rest juntando todos los parametros que esten dsp de la x, ejemplo de uso => fx(1, 2,3,4,5,6,7) x = 1, rest = [2,...,7]
  - en el uso de una funcion => fx(...[1,2,3]) => fx(1,2,3) _spread operator_
    - esparce todos los elementos del array como diferentes parametros. convierte un array en items separados, lo mismo ocurre con los objetos.
  - se puede usar en funciones u otras cosas como arrays, objetos con destructuring
- ### Promises (async/await)
- ### Classes and subclasses
- ### Modules
- ### iterators, for..of, generators, unicode, module and module loaders, map, set, weakmap, weakset, symbols, proxies, new apis for types objects
- ### nullish coalescing operator => a ?? 0 => anda para null y falsos positivos.
- ### optional chaining => thing?.key
- ### async/await

## React primer nivel

- ### Virtual DOM vs Actualizacion normal js
  - mostrar actualizacion normal js, appendChild, textContent y blabla
    - Cosas que pasa a nivel más grande:
      - parseo html para agarrar elementos del dom
      - actualizo parte del dom
      - meto css o lo que sea pero tmb actualizo todos mis hijos
      - Calculos para posiciones y demas en caso de ser necesario
  - virtual dom => representacion del DOM tree en memoria, solo actualiza lo necesario mediante un algoritmo inteligente. Una vez que tiene la representacion en un objeto en memoria actualizado inteligentemente y con la identificacion de lo minimo que tiene que cambiar. Recien ahi lo pasa a "disco" lo renderiza cambiando el DOM efectivamente. (Reconciliation es el proceso de actualizacion del dom)
  - Ejemplo => actualizar en la misma pagina con react y sin react.
- ### Babel y JSX
  - Que es babel => transpilador, transforma algo en otra cosa.
  - JSX lenguaje para crear interfaces => Usamos babel para que ese codigo jsx se transforme a js (al mismo codigo que vimos al principio), JSX es una abstraccion que nos permite generar codigo mas humano. Extension de js que describe como se veria el html permitiendonos poner expresiones js dentro de él.
  - JSX props => mirror html DOM properties => por eso htmlFor y className por ejemplo y los on en camelcase
  - Seteo con unpkg
- ### JS en componentes
  - {} para js world, jsx world dsp js expression world
  - conditional rendering => { ? : }, if, { && }
  - not render => return null
- ### Custom Components
  - Aca viene la idea de componentes
- ### Listas
  - importancia del key param
- ### Styles and ClassName
  - xq className en vez de class
  - style es un objeto y sus claves son camelCase css y valor string
- ### Forms
  - no controlados ejemplo minimo
