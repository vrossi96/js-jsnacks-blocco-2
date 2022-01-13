//********** Contatore
let i = 0;

//! Snack 1
const s1Input = document.getElementById('s1-input');
const s1Calculate = document.getElementById('s1-calculate');
const s1Result = document.getElementById('sbonus-s1-result');
const s2Input = document.getElementById('s2-input');
const s2Calculate = document.getElementById('s2-calculate');
const s2Result = document.getElementById('sbonus-s2-result');

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/
let sBonusS1Sum = 0;
const fiveNumbers = [];

s1Calculate.addEventListener('click', function() {
  console.log(s1Input.value);
  
  let calculate = false;
  
  while (calculate == false){
    fiveNumbers.push(s1Input.value);
    console.table(fiveNumbers);
    sBonusS1Sum += parseInt(s1Input.value);
    calculate = true;
  }
  console.log(sBonusS1Sum);
  s1Result.innerText = sBonusS1Sum;
  
  if (fiveNumbers.length === 5) {
    s1Calculate.className = "not-visible";
  }
  
})

//! Snack 2
/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

s2Calculate.addEventListener('click', function() {
  const number = parseInt(s2Input.value);
  if (number % 2 == 0) {
    s2Result.innerText = number;
  } else {      // Se no stampo il successivo
    s2Result.innerText = number + 1;
  }
})


/*
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
*/