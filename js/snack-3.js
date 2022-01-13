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

console.table(namesMerged);