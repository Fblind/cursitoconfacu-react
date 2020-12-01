- javascript modules
- dependencies and npm
- create-react-app

  - webpack
  - postcss
  - etc que use

- React hooks

  - useState
  - useContext
  - useEffect
  - useReducer

  - los demás ... useMemo, useCallback, useLayoutEffect
  - ben awed playlist

---

- Finalizar esnext features de la clase anterior

  - Promises (async/await)
  - iterators, for..of, generators, unicode, module and module loaders, map, set, weakmap, weakset, symbols, proxies, new apis for types objects
  - nullish coalescing operator => a ?? 0 => anda para null y falsos positivos.
  ```javascript
  function lala(laCosa = 0) {
    console.log(laCosa)
    return laCosa ?? 9
  }
  lala(undefined) // 0
  lala(null) // 0
  ```
  - optional chaining => thing?.key
  - Classes and subclasses
  - Modules (<script type="module" src="app.js"></script>) https://www.sitepoint.com/using-es-modules/

- Teoria de OOP, Test (TDD)
- Hacer ejercicio de ventas con esta forma.
