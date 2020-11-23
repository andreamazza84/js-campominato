// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


/** Controlla che i numeri presenti nella lista siano tutti diversi tra loro
 *
 */
function checkDoubles(num, list) {
  for (var index = 0; index < list.length; index++) {
    if (num === list[index]) {
      return true;
    }
  }
  return false;
}


/** Restituisce 16 numeri casuali e diversi tra loro compresi tra 1 e 50, 80, 100 in funzione del valore di level
* @param = level: il valore in ingresso può essere 0 (=>100), 1(=>80) o 2 (=>50)
*/
var randomList = []; //output function: preferisco impostare questa come variabile globale
function random16(level){
  var randomNum = 0;
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
  for (var i = 0; i < 16; i++) {
    randomNum = Math.floor(Math.random()*diffLevel) + 1;
    for (var index = 0; index < randomList.length; index++) {
      if (randomNum === randomList[index] && randomNum < 100) {
          randomList[index] = randomNum + 2;
          index--; //doppio check
      }
      else if (randomNum === randomList[index] && randomNum === 100) {
          randomList[index] = randomNum - 3;
          index--; //doppio check
      }
    }
    randomList[i] = randomNum;
  }
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
    if (checkDoubles(userNumber, randomList)) {
      win = false;
      break
    }
    else if (i > 0 && checkDoubles(userNumber, userList)) {
      win = false;
      break
    }
  }
  userList[i] = userNumber;
}

// Controllo
console.log("userNumber " + userNumber);
console.log("userList " + userList);
//console.log("checkDoubles(userNumber, userList) " + checkDoubles(userNumber, userList));
//console.log("checkDoubles(userNumber, randomList) " + checkDoubles(userNumber, randomList));
// /Controllo

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
