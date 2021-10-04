// Multiplo de 3 => fizz
// Multiplo de 5 => buzz
// Multiple de ambos => FizzBuzz
// En otro caso, i

function fizzbuzz() {
  let output;

  for (let i = 1; i <= 100; i++) {
    // No funca del todo bien
    // console.log(i % 3 === 0 ? "fizz" : (i % 5 === 0 ? "buzz" : i));

    // Funciona perfecto
    // if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');  
    // else if (i % 3 === 0) console.log('fizz');
    // else if (i % 5 === 0) console.log('buzz');
    // else console.log(i);
    
    // Funciona, tiene mas lineas pero menos tipeo y es mas mantenible.
    output = "";

    if(i % 3 === 0) output += "Fizz";
    if(i % 5 === 0) output += "Buzz";
    if(!output) output = i;

    console.log(output);
  }
  return;
}

fizzbuzz();
