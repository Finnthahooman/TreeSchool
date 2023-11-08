// Scriviamo delle funzioni con due numeri
// una controlla che il primo sia maggiore o uguale
// una controlla che il primo sia divisibile per il secondo senza resto! ( un classico, un pizzico più difficile

// Infine
// - una funzione che controlli che un numero sia pari Scriviamo una funzione che accetta due callback e ne esegua una in base alla veridicità della condizione passata come primo argomento ritornando il risultato della callback eseguita

// function myFunc(condition, callbackTrue, callbackFalse)

// utilizzando ciò che sappiamo fino ad ora :)
// no cose nuove

function check_greater_equal(a, b) {
  return a >= b ? true : false;
}

function check_divisible(a, b) {
  return a % b === 0 ? true : false;
}

// Controllo se il numero è pari e ritorno true se vero altrimenti false
function is_even(n, callbackTrue, callbackFalse) {
  n % 2 === 0 ? callbackTrue() : callbackFalse();
}

console.log(
  is_even(
    6,

    function (callbackTrue) {
      console.log("Vero");
    },

    function (callbackFalse) {
      console.log("Falso");
    }
  )
);
