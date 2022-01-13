// Nascondo parte del super bonus
const superBonus = document.getElementById('super-b-container');
superBonus.className = "not-visible";

// Bonus show
const bonusS1Result = document.getElementById('bonus-s1-result');
const bonusS2Result = document.getElementById('bonus-s2-result');
const bonusS3Result = document.getElementById('bonus-s3-result');
const bonusS4Result = document.getElementById('bonus-s4-result');
const bonusS5ResultA1 = document.getElementById('bonus-s5-result-a1');
const bonusS5ResultA2 = document.getElementById('bonus-s5-result-a2');

//********** Contatore
let i = 0;

//! Snack 1
/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/
let bonusS1Sum = 0;

while (i < 5) {
  // Chiedo all'utente i numeri per 5 volte
  const number = parseInt(prompt('Inserisci un numero', 9));
  // Sommo i numeri
  bonusS1Sum += number;
  // Contatore
  i++;
}

bonusS1Result.innerText = bonusS1Sum;

//! Snack 2
/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let check = false;

while (check == false) {
  // Chiedo all'utente un numero
  const number = parseInt(prompt('Inserisci un numero', 3));
  // Se è pari lo stampo
  if (number % 2 == 0) {
    bonusS2Result.innerText = number;
  } else {      // Se no stampo il successivo
    bonusS2Result.innerText = number + 1;
  }
  check = true;
}

//! Snack 3
/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const arrayName = ['Luigi', 'Mario', 'Wario', 'Waluigi', 'Gigi', 'Bastone', 'Gastone', 'Paolino'];
const arraySurname = ['Pigna', 'Duro', 'Bello', 'Brutto', 'Bestia', 'Rovina', 'Ruperta', 'Blob'];
let namesMerged = [];


while (namesMerged.length < 3) {
  const numberName = Math.floor(Math.random() * arrayName.length);
  const numberSurname = Math.floor(Math.random() * arraySurname.length);
  const invited = arrayName[numberName] + ' ' + arraySurname[numberSurname];

  console.log(invited);

  if (!namesMerged.includes(invited)) {
    namesMerged.push(invited)
  }
}

bonusS3Result.innerText = namesMerged;

//! Snack 4
/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numbers = [15, 25, 75, 28, 33, 58, 85, 99, 69];

let bonusS4Sum = 0;

// Contatore funziona fin che è inferiore alla lunghezza dell array
while (i < numbers.length) {
  bonusS4Sum += numbers[i];
  // Contatore che parte dal primo numero e passa tutti i numeri dispari
  i += 2; 
}

bonusS4Result.innerText = bonusS4Sum;

//! Snack 5
/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

let array1 = [15, 25, 75, 28, 33, 58];
let array2 = [15, 25, 75, 28, 33, 58, 85, 99, 69];

// Fin che sono di diversa lunghezza allora eseguo i comandi all'interno
while (array1.length !== array2.length) {
  // Creo un numero random
  const randomNumber = Math.floor(Math.random() * 333) +1;
  // Il numero casuale viene aggiunto all array più corto
  if (array1 < array2){
    array1.push(randomNumber);
  } else {
    array2.push(randomNumber);
  }
}

bonusS5ResultA1.innerText = array1; 
bonusS5ResultA2.innerText = array2;