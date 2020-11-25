// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// ************************************************************************** //
//FUNCTIONS

/** Controlla che il numero num inserito nella lista list sia diverso dai precedenti
 *  @param num numero di cui si vuole controllare la presenza nella lista
 *  @param list lista di numeri interi di lunghezza generica
 *  @result restituisce true se num è già presente nella lista
 */
function checkNumber(num, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === num) {
      return true;
    }
  }
  return false;
}

/** Restituisce 16 numeri casuali e diversi tra loro compresi tra 1 e 50, 1 e 80, o 1 e 100 in funzione del valore di level
* @param = level: il valore in ingresso può essere 0 (=>100), 1(=>80) o 2 (=>50)
* @result restituisce una lista di 16 numeri causali
*/
function random16(level){
var diffLevel = 0;
  //BONUS
  switch (level) {
    case 0:
    diffLevel = 100;
    break;
    case 1:
    diffLevel = 80;
    break;
    case 2:
    diffLevel = 50;
    break;
    default:
    diffLevel = 100;
  }
  var randomNum = 0;
  var randomList = [];
  while(randomList.length < 16) {
    randomNum = Math.floor(Math.random()*diffLevel) + 1;
    if (checkNumber(randomNum, randomList) === false) {
      randomList.push(randomNum);
    }
  }
  return randomList;
}

// /FUNCTIONS
// ************************************************************************** //

var userNumber = 0;
var userList = [];
var selectLevel = Number(prompt("Seleziona un livello di difficoltà [0, 1 o 2]"));
var win = true;
//Ordina la lista in ordine crescente (per semplificare il debug)
var randomList = random16(selectLevel);

// Controllo
console.log("randomList " + randomList);
// /Controllo

for (var i = 0; i < (diffLevel - randomList.length); i++) {
  userNumber = Number(prompt("Inserisci un numero da 1 a " + diffLevel));

  if (userNumber < 1 || userNumber > diffLevel) {
    alert("Attenzione! Devi inserire un numero tra 1 e " + diffLevel);
    i--; //reitero il gioco nello stesso punto per evitare l'inserimento di valori non ammessi
  }
  else{
    if (checkNumber(userNumber, randomList)) {
      win = false;
      break;
    }
    else if (i > 0 && checkNumber(userNumber, userList)) {
      win = false;
      break;
    }
  }
  userList[i] = userNumber;
}

// Controllo
console.log("userNumber " + userNumber);
console.log("userList " + userList);
// /Controllo

// Mostra punteggio
if (win) {
  alert("Hai vinto! " + "Hai totalizzato " + userList.length + " punti");
}
else{
  alert("Hai perso. " + "Hai totalizzato " + userList.length + " punti");
}
