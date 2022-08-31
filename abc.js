const abecedario = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function CodeChallenge(str) {
  let cantidadDeMovimientos = 0;
  let actual = abecedario.a;
  const cadena = str.toLowerCase().split('');

  cadena.forEach(letra => {
    const siguiente = +abecedario[letra];
    let distanciaDerecha;

    const distanciaIzquierda = Math.abs(siguiente - actual);

    if(actual > 13) {
      distanciaDerecha = abecedario.z - actual + siguiente;
    } else {
      distanciaDerecha = abecedario.z + actual - siguiente;
    }

    cantidadDeMovimientos += Math.min(distanciaIzquierda, distanciaDerecha);

    actual = siguiente;
  });

  return cantidadDeMovimientos;
}

function CodeChallenge2(str) {
  let cantidadDeMovimientos = 0
  let actual = 1;
  const posicionZ = 26;
  const cadena = str.toLowerCase().split('');

  cadena.forEach(letra => {
    const siguiente = +letra.charCodeAt() - 'a'.charCodeAt() + 1;
    let distanciaDerecha;

    const distanciaIzquierda = Math.abs(siguiente - actual);

    if(actual > 13) {
      distanciaDerecha = posicionZ - actual + siguiente;
    } else {
      distanciaDerecha = posicionZ + actual - siguiente;
    }

    cantidadDeMovimientos += Math.min(distanciaIzquierda, distanciaDerecha);

    actual = siguiente;
  });

  return cantidadDeMovimientos;
}

// Entrada: "ZNMD"
// Salida: 23
console.log(CodeChallenge2('ZNMD'));

// Entrada: "AZGB"
// Salida: 13
console.log(CodeChallenge2('AZGB'));

console.log(CodeChallenge2('XEZI'));

// const abc = 'abcdefghijklmnopqrstuvwxyz';
