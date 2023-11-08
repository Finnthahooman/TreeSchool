// 1 Creiamo un Array con 5 o più stringhe a vostro piacere Utilizzare il console.log per stampare a console indice e stringa.
console.log("Esercizo numera Array");
console.log(
  "#########################################################################################"
);
let array = ["Mario", "Luigi", "Bowser", "Peach", "Toad"];
for (var i = 0; i < array.length; i++) {
  console.log(i + " " + array[i]);
}
console.log(" ");
// 2 Creiamo un Array con 5 o più stringhe di lunghezza differente Utilizzando il console.log per stampare solo le stringe con lunghezza maggiore o uguale a 10 caratteri.
console.log("Esercizo stampa solo se maggiore di 10 lettere");
console.log(
  "#########################################################################################"
);
let array2 = [
  "Appendiabiti",
  "Bambino",
  "Carrozzella",
  "Penna",
  "Gomma",
  "Astuccio",
  "Cartellina",
  "Bus",
  "Goniometro",
  "Acquerello",
];
for (var i = 0; i < array2.length; i++) {
  if (array2[i].length >= 10) {
    console.log(array2[i]);
  }
}
console.log(" ");
// 3 Fizz-Buzz (Quanti ricordi 😭) Scrivi un ciclo che cicli numeri da 1 a 100. per i numeri multipli di 3 stampa "Fizz" per i multipli di 5 "Buzz" per i numeri che sono multipli di entrambi "FizzBuzz"
console.log("Esercizo Fizz-Buzz");
console.log(
  "#########################################################################################"
);
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + ": " + "FizzBuzz");
  } else if (i % 3 == 0) {
    console.log(i + ": " + "Fizz");
  } else if (i % 5 == 0) {
    console.log(i + ": " + "Buzz");
  } else {
    //console.log(i); //Se lo lascio stampa il numero e basta
  }
}
console.log(" ");
// 4 Esercizio Motorizzazione Creiamo un array di oggetti, ogni ogetto rappresenta una persona che si presenta all'ufficio e ha come proprietà name,age e MontOgBirth.
// crea un ciclo per cui ogni persona sotto i 18 anni viene invitata a uscire per limite di età insufficiente (console.log)
// se ha almeno 18 anni ma più di 60 la invitiamo ad uscire per limite di età superato
// se non è stata bloccata da questi controlle le annucnaimo che il costo per ottenere la patente è 500€, ma se il suo nome inizia con la R ha diritto a uno sconto del 20% sul prezzo
console.log("Esercizio Motorizzazione");
console.log(
  "#########################################################################################"
);
const persone = [
  { name: "Alice", age: 20, MonthOfBirth: 1993 },
  { name: "Mario", age: 17, MonthOfBirth: 1996 },
  { name: "Sara", age: 65, MonthOfBirth: 1955 },
  { name: "Davide", age: 18, MonthOfBirth: 1995 },
  { name: "Giovanni", age: 15, MonthOfBirth: 2006 },
  { name: "Franco", age: 55, MonthOfBirth: 1965 },
  { name: "Rachele", age: 19, MonthOfBirth: 1999 },
  { name: "Martina", age: 62, MonthOfBirth: 1958 },
  { name: "Massimo", age: 22, MonthOfBirth: 1999 },
  { name: "Raimondo", age: 21, MonthOfBirth: 2001 },
];

for (var i = 1; i <= persone.length - 1; i++) {
  if (persone[i].age < 18) {
    console.log(
      persone[i].name + " ha meno di 18 anni, la invitiamo a uscire."
    );
  } else if (persone[i].age >= 18 && persone[i].age > 60) {
    console.log(persone[i].name + " ha più di 60 anni, la invitiamo a uscire.");
  } else {
    let costo = 500;
    if (persone[i].name.startsWith("R")) {
      costoscontato = costo * 0.8;
      console.log(
        persone[i].name +
          " ha il nome che inzia per R, ha diritto ad un sconto del 20% sul costo per ottenere la patente. Il costo per la patente diventa " +
          costoscontato +
          "€"
      );
    } else {
      console.log(
        persone[i].name + " costo per ottenere la patente di " + costo + "€"
      );
    }
  }
}
