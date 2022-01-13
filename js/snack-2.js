/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let check = false;

while (check == false) {
  // Chiedo all'utente un numero
  const number = parseInt(prompt('Inserisci un numero'));
  // Se è pari lo stampo
  if (number % 2 == 0) {
    console.log(number);
  } else {      // Se no stampo il successivo
    console.log(number + 1);
  }
  check = true;
}