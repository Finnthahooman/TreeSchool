//Scriviamo una funzione che prenda come argomento un array di 4 stringhe a vostro piacimento.
//Deve ritornare un nuovo array (L'array di input NON va manipolato) che cotenga:
//- Alla prima posizione un'unione delle prime due stringhe con un separatore "-"
//- Alla seconda posizione un'unione delle ultime due stringhe con un separatore "*"

let array = ["Mario", "Luigi", "Bowser", "Peach"];

function funzioneTest(array) {
  return [array[0] + "-" + array[1], array[2] + "*" + array[3]];
}

function funzioneTestExtra(array) {
  let temp = funzioneTest(array).join("^");
  return temp;
}

console.log("Base: " + funzioneTest(array));
console.log("Extra: " + funzioneTestExtra(array));

//Scriviamo una fonzione che prenda come argomento un array di stringhe.
//Deve ritornare un nuovo array (L'array di input NON va manipolato) che abbia:
//-tagliato il primo elemento della'array originale
//-tagliato l'ultimo elemento della'array originale

let array2 = ["Ciao", "Sono", "Franco", "Come", "va?"];
//Usando un Ciclo
function SmontaArray1(array) {
  let temp = [];
  for (let i of array2) {
    temp.push(i);
  }
  temp.shift();
  temp.pop();
  return [temp.toString()];
}
//Usando un metodo
function SmontaArray2(array) {
  let temp = array.slice();
  temp.shift();
  temp.pop();
  return [temp.toString()];
}
console.log(SmontaArray1(array2));
console.log(array2);
console.log("\n");
console.log(SmontaArray2(array2));
console.log(array2);

//Scriviamo una fonzione che prenda come argomento un array di 10 stringhe a vostro piacimento.
//-deve prima creaere un nuovo array con solo sle stringhe agli indici pari.
//-Da questo poi deve ritornare un nuovo array che abbia:
//-Tagliato il primo elemento dell'array con gli elementi pari
//-Tagliato l'ultimo elemento dell'array con gli elementi pari
//L'array di input NON va manipolato

let arrayNomi = [
  "Carlo",
  "Giovanni",
  "Alessandro",
  "Marco",
  "Chiara",
  "Luisa",
  "Leonardo",
  "Ginevra",
  "Giuseppe",
  "Eleonora",
];

function nuovoArrayPari(array) {
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      temp.push(array[i]);
    }
  }

  return temp;
}

console.log(nuovoArrayPari(arrayNomi));
console.log(SmontaArray2(nuovoArrayPari(arrayNomi)));
