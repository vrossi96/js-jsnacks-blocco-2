//********** Contatore
let i = 0;

//! Snack 1
const s1Input = document.getElementById('s1-input');
const s1Calculate = document.getElementById('s1-calculate');
const s1Result = document.getElementById('sbonus-s1-result');

/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/
let sBonusS1Sum = 0;

s1Calculate.addEventListener('click', function() {
  console.log(s1Input.value);
  let calculate = false;
  while (calculate == false){
    sBonusS1Sum += parseInt(s1Input.value);
    calculate = true;
  }
  console.log(sBonusS1Sum);
  s1Result.innerText = sBonusS1Sum;

})
