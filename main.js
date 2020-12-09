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

// JSnacks Blocco 4

// JSnack 1A
// JSnack 1B

// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

/* const palla = {
  nome: "palla",
  peso: 10,
};
palla.peso = Number(prompt("Inserisci peso palla"));
console.log(palla); */

// JSnack 2

// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

/* const bici = [
  (trek = {
    nome: "madone",
    peso: 9.7,
  }),
  (specialized = {
    nome: "boh",
    peso: 9.1,
  }),
];
for (const peso in bici) {
  if (trek.peso < specialized.peso) {
    console.log(trek);
  } else if (trek.peso > specialized.peso) {
    console.log(specialized);
  }
}
 */
// JSnack 3

// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza. Calcolare perimetro e area.

/* const triangolo = {
  base: 10,
  altezza: 10,
};
const area = (triangolo.base * triangolo.altezza) / 2;

function pitagora(latoA, latoB) {
  return Math.sqrt(latoA ** 2 + latoB ** 2);
}

const ipotenusa = pitagora(triangolo.base, triangolo.altezza);

perimetro = triangolo.base + triangolo.altezza + ipotenusa;
console.log(area);
console.log(perimetro); */

// JSnack 4A
// JSnack 4B

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

/* const squadre = [
  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Napoli",
    punti: 0,
    falli: 0,
  },
  {
    nome: "Inter",
    punti: 0,
    falli: 0,
  },
];

squadre.forEach((item) => {
  item.punti = Math.floor(Math.random() * 10) + 1;
  item.falli = Math.floor(Math.random() * 10) + 1;
});

console.log(squadre); */

// JSnacks Blocco 5

// JSnack 1

// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

/* const zucchine = [
  {
    varietà: "nero di Milano",
    peso: 2,
    lunghezza: 10,
  },
  {
    varietà: "romanesco",
    peso: 3,
    lunghezza: 9,
  },
  {
    varietà: "lunga fiorentina",
    peso: 4,
    lunghezza: 12,
  },
  {
    varietà: "siciliano",
    peso: 3,
    lunghezza: 15,
  },
  {
    varietà: "striata di Napoli",
    peso: 2,
    lunghezza: 7,
  },
  {
    varietà: "bianca triestina",
    peso: 1,
    lunghezza: 6,
  },
  {
    varietà: "rigata pugliese",
    peso: 2,
    lunghezza: 7,
  },
  {
    varietà: "tondo di Piacenza",
    peso: 5,
    lunghezza: 5,
  },
  {
    varietà: "tondo di Nizza",
    peso: 4,
    lunghezza: 4,
  },
  {
    varietà: "tondo di Firenze",
    peso: 3,
    lunghezza: 6,
  },
];
let sum = 0;
for (let i = 0; i < zucchine.length; i++) {
  sum += zucchine[i].peso;
}
console.log(sum); */

// JSnack 2

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

/* function invert(word) {
  return word.split("").reverse().join("");
}
console.log(invert("Andrea")); */

// JSnack 3

// Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm Infine stampa separatamente quanto pesano i due gruppi di zucchine

/* const zucchine = [
  {
    varietà: "nero di Milano",
    peso: 2,
    lunghezza: 16,
  },
  {
    varietà: "romanesco",
    peso: 3,
    lunghezza: 14,
  },
  {
    varietà: "lunga fiorentina",
    peso: 4,
    lunghezza: 17,
  },
  {
    varietà: "siciliano",
    peso: 3,
    lunghezza: 20,
  },
  {
    varietà: "striata di Napoli",
    peso: 2,
    lunghezza: 12,
  },
  {
    varietà: "bianca triestina",
    peso: 1,
    lunghezza: 11,
  },
  {
    varietà: "rigata pugliese",
    peso: 2,
    lunghezza: 12,
  },
  {
    varietà: "tondo di Piacenza",
    peso: 5,
    lunghezza: 10,
  },
  {
    varietà: "tondo di Nizza",
    peso: 4,
    lunghezza: 9,
  },
  {
    varietà: "tondo di Firenze",
    peso: 3,
    lunghezza: 11,
  },
];
const zucchineCorte = [];
const zucchineLunghe = [];
for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza < 15) {
    zucchineCorte.push(zucchine[i]);
  } else if (zucchine[i].lunghezza > 15) {
    zucchineLunghe.push(zucchine[i]);
  }
}
let pesoZucchineCorte = 0;
let pesoZucchineLunghe = 0;
for (var i = 0; i < zucchineCorte.length; i++) {
  pesoZucchineCorte += zucchineCorte[i].peso;
}
for (var i = 0; i < zucchineLunghe.length; i++) {
  pesoZucchineLunghe += zucchineLunghe[i].peso;
}
console.log(pesoZucchineCorte);
console.log(pesoZucchineLunghe); */

// JSnack 4

// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

/* const arrayLettere = ["a", "b", "c"];
const arrayNumeri = [1, 2, 3];

function altArrays(arr1, arr2) {
  const fusion = [];
  for (let i = 0; i < arr1.length; i++) {
    fusion.push(arr1[i]);
    fusion.push(arr2[i]);
  }
  return fusion;
}
console.log(altArrays(arrayLettere, arrayNumeri));
 */

//  JSnack 5

// Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

const myArray = ["Milan", "Inter", "Juventus", "Roma", "Lazio", "Napoli"];
function myVar(array, a, b) {
  const newArray = [];
  if (a < b && b <= array.length) {
    for (let i = a; i < b; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
console.log(myVar(myArray, 1, 4));