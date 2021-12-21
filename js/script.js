console.log('JS OK')

//CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO

/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/* 
1- Chiedere all'utente quanti chilometri vuole percorrere
2- Chiedere l'età
3- Calcolare il prezzo del biglietto
3b- Costo 0.21€ al Km
  - Sconto del 20% per i minorenni
  - Sconto del 40% per over 65
4- Prezzo finale (con massimo due decimali)
*/


//1

const userKm = prompt('Quanti Km vuoi percorrere?')
console.log(userKm);
console.log(typeof userKm);

//2
const userAge = prompt('Quanti anni hai?')
console.log(userAge);
console.log(typeof userAge);

//3
let priceTicket = (userKm * 0.21);
const resultElement = document.getElementById('result');
resultElement.innerText = 'Il prezzo del biglietto è di' + priceTicket + '€';

//3b
if (userAge < 18) {
    const underEighteen = (priceTicket / 100) * 20;
    let priceTicketSales = (priceTicket - underEighteen);
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'Il prezzo del biglietto essendo minorenne è di' + priceTicketSales + '€';
}

else if (userAge > 65) {
    const overSixtyfive = (priceTicket / 100) * 40;
    let priceTicketSales = (priceTicket - overSixtyfive);
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'Il prezzo del biglietto essendo un over 65 è di' + priceTicketSales + '€';
}
