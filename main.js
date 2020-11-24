// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


/** Controlla che il numero num inserito nella lista sia diverso dai precedenti
 *
 */
function checkNumber(num, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === num) {
      return true;
    }
  }
  return false;
}
//Controllo

/** Restituisce 16 numeri casuali e diversi tra loro compresi tra 1 e 50, 80, 100 in funzione del valore di level
* @param = level: il valore in ingresso può essere 0 (=>100), 1(=>80) o 2 (=>50)
*/
var randomList = []; //output function: preferisco impostare questa come variabile globale
function random16(level){
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
  var i = 0;
  while(randomList.length < 16) {
    randomNum = Math.floor(Math.random()*diffLevel) + 1;
    if (checkNumber(randomNum, randomList) === false) {
      randomList.push(randomNum);
    }
  }
  //Ordina la lista in ordine crescente (per semplificare il debug)
  randomList = randomList.sort(function(a, b){return a-b});
  return randomList;
}

// ************************************************************************** //

var i, userNumber = 0;
var userList = [];
var selectLevel = Number(prompt("Seleziona un livello di difficoltà [0, 1 o 2]"));
var win = true;
random16(selectLevel);

// Controllo
console.log("randomList " + randomList);

for (var i = 0; i < 3/*(diffLevel - 16))*/; i++) {
  userNumber = Number(prompt("Inserisci un numero da 1 a " + diffLevel));

  if (userNumber < 1 || userNumber > diffLevel) {
    alert("Attenzione! Devi inserire un numero tra 1 e " + diffLevel);
    i--; //reitero il gioco nello stesso punto per evitare l'inserimento di valori non ammessi
  }
  else{
    if (checkNumber(userNumber, randomList)) {
      win = false;
      break
    }
    else if (i > 0 && checkNumber(userNumber, userList)) {
      win = false;
      break
    }
  }
  userList[i] = userNumber;
}

// Controllo
console.log("userNumber " + userNumber);
console.log("userList " + userList);

// Mostra punteggio
//10   punti per risposta esatta level 0
//12.5 punti ... level 1
//20   punti ... level 2
var userScore = 10 * userList.length * 100 / diffLevel;

if (win) {
  alert("Hai vinto! " + "Hai totalizzato " + userScore + " punti");
}
else{
  alert("Hai perso. " + "Hai totalizzato " + userScore + " punti");
}
