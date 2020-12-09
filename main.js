// JSnacks Blocco 1

// JSnack 1

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

/* let firstNum;
let secondNum;

firstNum = Number(prompt("Inserisci il primo numero"));
secondNum = Number(prompt("Inserisci il secondo numero"));

if (firstNum > secondNum) {
  console.log(firstNum);
} else {
  console.log(secondNum);
} */

// JSnack 2

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

/* let firstWord;
let secondWord;

firstWord = prompt("Inserisci la prima parola");
secondWord = prompt("Inserisci la seconda parola");

if (firstWord.length < secondWord.length) {
  console.log(firstWord);
  console.log(secondWord);
} else {
  console.log(secondWord);
  console.log(firstWord);
} */

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

let sum = 0;
const first10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < first10.length; i++) {
  sum += first10[i];
}
const avg = sum / first10.length;
console.log(sum);
console.log(avg);