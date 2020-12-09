// JSnacks Blocco 1

// JSnack 1

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/* let firstNum = Number(prompt("Inserisci il primo numero"));
let secondNum = Number(prompt("Inserisci il secondo numero"));

const newFunction = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
newFunction(firstNum, secondNum); */

// JSnack 2

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/* let firstWord = prompt("Inserisci la prima parola");
let secondWord = prompt("Inserisci la seconda parola");
const newFunction = (word1, word2) => {
  if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
  } else {
    console.log(word2);
    console.log(word1);
  }
};
newFunction(firstWord, secondWord); */

// JSnack 3

// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// Ciclo For
/* let sum = 0; 
for (let i = 0; i < 5; i++) {
  const number = Number(prompt("Inserisci un numero"));
  sum += number;
}
console.log(sum);

// Ciclo While
let sum = 0; 
let i = 0;
while (i < 5) {
  const number = Number(prompt("Inserisci un numero"));
  sum += number;
  i++;
}
console.log(sum); */

// JSnack 4

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/* const nome = prompt("Come ti chiami?");

const invitati = ["Andrea", "Pia", "Raffaele", "Romina", "Federico"];

let invito = false;

for (let i = 0; i < invitati.length; i++) {
  if (nome == invitati[i]) {
    invito = true;
  }
}

if (invito) {
  console.log("Sei invitato");
} else {
  console.log("Non sei invitato");
} */

// JSnack 5

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

/* const numbersList = [];
for (let i = 0; i < 6; i++) {
  const number = Number(prompt("Inserisci un numero"));
  if (number % 2 !== 0) {
    numbersList.push(number);
  }
}
console.log(numbersList); */

// JSnack 6

// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

/* const n = prompt("Inserisci un numero");
let x = 1;
const numbers = [];

for (var i = 0; i < n; i++) {
  numbers.push(x++);
}

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i] ** 3);
} */

// JSnack 7

// Stampa le potenze di 2 fino a 1000.

/* var i = 2;
for (var i = 2; i < 1001; i++) {
  const esp = 2 ** i;
  console.log(esp);
} */

// JSnack 8

// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

/* let sum = 0;
const num = prompt("Inserisci un numero di 4 cifre.");
for (let i = 0; i < num.length; i++) {
  const number = Number(num[i]);
  sum += number;
}
console.log(sum); */

// JSnack 9

// Calcola la somma e la media dei primi 10 numeri.

/* let sum = 0;
const first10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < first10.length; i++) {
  sum += first10[i];
}
const avg = sum / first10.length;
console.log(sum);
console.log(avg); */

// JSnacks Blocco 2

// JSnack 1

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

/* const numero = Number(prompt("Inserisci un numero"));

if (numero % 2 == 0) {
  console.log(numero);
} else {
  console.log(numero + 1);
} */

// JSnack 2

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

/* const nomi = ["Fabio", "Luca", "Mario"];
const cognomi = ["Rossi", "Bianchi", "Verdi"];
for (let i = 0; i < nomi.length; i++) {
  const randomName = `${nomi[Math.floor(Math.random() * nomi.length)]} ${
    cognomi[Math.floor(Math.random() * cognomi.length)]
  }`;
  console.log(randomName);
} */

// JSnack 3

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

/* const numeriInteri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPosDispari = [];
for (let i = 0; i < numeriInteri.length; i++) {
  if (!([i] % 2 == 0)) {
    numeriPosDispari.push(numeriInteri[i]);
  }
}
const sum = numeriPosDispari.reduce((a, b) => a + b, 0);
console.log(sum); */

// JSnack 4

// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

/* const arrayLong = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayShort = [1, 2, 3, 4, 5];

while (arrayLong.length > arrayShort.length) {
  arrayShort.push(Math.floor(Math.random() * 10));
}
console.log(arrayLong);
console.log(arrayShort); */

// JSnack 5

// Scrivi una funzione per stabilire se un numero è primo. Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.

/* const numero = Number(
  prompt("Inserisci un numero, verificherò se si tratta di un numero primo.")
);
function isPrime(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return numero !== 1;
}
if (isPrime(numero) == true) {
  alert("Il numero inserito è un numero primo.");
} else {
  alert("Il numero inserito non è un numero primo.");
} */