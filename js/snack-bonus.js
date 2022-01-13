/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// Bonus show
const bonusS1Result = document.getElementById('bonus-s1-result');
const bonusS2Result = document.getElementById('bonus-s2-result');
const bonusS3Result = document.getElementById('bonus-s3-result');

let i = 1;
let bonusS1Sum = 0;

//! Snack 1
while (i <= 5) {
  // Chiedo all'utente i numeri per 5 volte
  const number = parseInt(prompt('Inserisci un numero'));
  // Sommo i numeri
  bonusS1Sum += number;
  // Contatore
  i++;
}

bonusS1Result.innerText = bonusS1Sum;

//! Snack 2
let check = false;

while (check == false) {
  // Chiedo all'utente un numero
  const number = parseInt(prompt('Inserisci un numero'));
  // Se è pari lo stampo
  if (number % 2 == 0) {
    bonusS2Result.innerText = number;
  } else {      // Se no stampo il successivo
    bonusS2Result.innerText = number + 1;
  }
  check = true;
}

//! Snack 3
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