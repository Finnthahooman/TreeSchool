//1) Definiamo una variabile a cui assegniamo il valore 100. sottraiamo il numero 3 per 10 volte
console.log("Sottraiamo il numero 3 per 10 volte a 100");
let numero = 100;
for (let i = 0; i < 10; i++) {
  numero -= 3;
  console.log(numero);
}

//2) Date due stringhe "Leone" e "Leotta" verificare se esistono lettere uguali ovvero stesso valore,stesso tipo (Maiuscolo e Minuscolo) e stessa posizione.
console.log("Differenza lettere tra due parole");
let stringa1 = "Leone";
let stringa2 = "Leotta";

//Trovo la stringa più lunga
let stringalunga = stringa1.length > stringa2.length ? stringa1 : stringa2;

for (let i = 0; i < stringalunga.length; i++) {
  if (stringa1[i] === stringa2[i]) {
    console.log("Le stesse lettere");
  } else {
    console.log("Lettere diverse");
  }
}

//3 Trovate i primi 15 numeri multipli di 3. Attenzione: 1.Utilizzare un solo ciclo;2. Le variabili non devono essere create esternamente al ciclo
console.log("Primi 15 numeri multipli di 3");
for (let i = 3, count = 0; count < 15; i += 3) {
  console.log(i);
  count++;
}

//4 Stampare i primi 20 numeri pari (usare un solo ciclo)
console.log("Primi 20 numeri pari");

for (let i = 0, count = 0; count < 20; i += 2) {
  console.log(i);
  count++;
}

//Oppure
/**
for (let i = 0, count = 0; count < 20; i ++)
{
  if (i % 2 === 0) {
    console.log(i);
  }
  count++;
} 
*/

//
