/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/


let i = 1;
let sum = 0;

while (i <= 5) {
  // Chiedo all'utente i numeri per 5 volte
  const number = parseInt(prompt('Inserisci un numero'));
  // Sommo i numeri
  sum += number;
  // Contatore
  i++;
}

console.log(sum);