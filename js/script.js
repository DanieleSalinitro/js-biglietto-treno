/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

let userAge = parseInt(prompt("Quanti anni hai?"));
let userKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const pricekm = 0.21;
const discount18 = 0.2;
const discount65 = 0.4;
let price = userKm * pricekm;
let discount = 0;
let finalPrice;

if ((!isNaN(userAge)) && (!isNaN(userKm))){
    if (userAge < 18) {
        discount = price * discount18;
    } else if (userAge >= 65) {
        discount = price * discount65;
    } 
    finalPrice= price - discount;
    document.getElementById("train-price").innerHTML = `${finalPrice.toFixed(2)} €`;
} else{
    document.getElementById("train-price").innerHTML = `ERRORE - Inserire valori numerici`;
}