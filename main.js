// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

/** Restituisce 16 numeri casuali e diversi tra loro compresi tra 1 e 100
 *
 */
function random100(){
  var list = [];
  //Genera 16 numeri casuali
  for (var i = 0; i < 16; i++) {
    var num = Math.floor(Math.random()*100) + 1; //numeri casuali da 1 a 100
    for (var index = 0; index < list.length; index++) {
      if (num === list[index] && num < 100) {
          list[index] = num + 1;
          index--; //doppio check
      }
      else if (num === list[index] && num === 100) {
          list[index] = num - 3;
          index--; //doppio check
      }
    }
    list[i] = num;
  }
  return list;
}
  alert("I sedici numeri casuali sono: " + random100());
