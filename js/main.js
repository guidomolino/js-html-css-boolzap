
function addInputListener() {
  var input = $("#txt-msg");
  var ok = false;
  input.keydown(sendKeydown);
  input.keyup(sendKeyup);
}

// invio messaggio

function sendKeydown(event) {

  var tasto = event.which;

  var msg = $(this);
  var testoMessaggio = msg.val();
  // 13 = tasto invio
  if (tasto == 13 & testoMessaggio) {

    console.log("invio");

    sendMsg(testoMessaggio);
    msg.val("")

    var ok = true;
  }

}

function sendMsg(txt) {

  var copia = $("div .utente").clone();

  // trascrivo la copia con testo e timestamp
  copia.find("p").text(txt);
  copia.find("span").text(timeStamp());

}

function timeStamp() {
  var timestamp = new Date().getTime();
}

// il contatto invia l'ok
function sendKeyup(event) {
  var tasto = event.which;

  if (tasto == 13 & ok==true) {

    var contatto = $("div .contatto");

    setTimeout(contatto);

    var ok = false;
  }
}

function setTimeout(contatto) {
  var contatto = $("div .contatto");
  var copiaContatto = contatto.clone();

  // trascrivo la copia con testo e timestamp
  copiaContatto.find("p").text("Ok");
  copiaContatto.find("span").text(timeStamp());
  console.log("ok");
} 1000;

function init() {
  addInputListener();
}

$(document).ready(init);
