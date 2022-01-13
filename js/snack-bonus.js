/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// Bonus show
const bonusS1Result = document.getElementById('bonus-s1-result');

let i = 1;
let bonusS1Sum = 0;

while (i <= 5) {
  // Chiedo all'utente i numeri per 5 volte
  const number = parseInt(prompt('Inserisci un numero'));
  // Sommo i numeri
  bonusS1Sum += number;
  // Contatore
  i++;
}

bonusS1Result.innerText = bonusS1Sum;
