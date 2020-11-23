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
    if (num === list[index]) { return true; }
  }
  return false;
}


/** Restituisce 16 numeri casuali e diversi tra loro compresi tra 1 e 100
*
*/
var randomList = [];
function random16(){
  //Genera 16 numeri casuali
  for (var i = 0; i < 16; i++) {
    var num = Math.floor(Math.random()*100) + 1; //numeri casuali da 1 a 100
    for (var index = 0; index < randomList.length; index++) {
      if (num === randomList[index] && num < 100) {
          randomList[index] = num + 1;
          index--; //doppio check
      }
      else if (num === randomList[index] && num === 100) {
          randomList[index] = num - 3;
          index--; //doppio check
      }
    }
    randomList[i] = num;
  }
  return randomList;
}
  //alert("I sedici numeri casuali sono: " + random100());


// ************************************************************************** //

var i, userNumber = 0;
var userList = [];
random16();

for (var i = 0; i < 10; i++) {
  userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
  
  if (checkDoubles(userNumber, randomList)) {
    alert("Hai perso");
    break
  }
  if (i > 0 && checkDoubles(userNumber, userList)) {
    alert("Hai perso");
    break
  }
  userList[i] = userNumber;
}

console.log("userNumber " + userNumber);
console.log("userList " + userList);
console.log("randomList " + randomList);
console.log("checkDoubles(userNumber, userList) " + checkDoubles(userNumber, userList));
console.log("checkDoubles(userNumber, randomList) " + checkDoubles(userNumber, randomList));
