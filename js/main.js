
function addInputListener() {
  var input = $("input");
  target.keydown(sendKeydown);
}

function sendKeydown(event) {

  var tasto = event.which;

  // 13 = tasto invio
  if (tasto == 13) {

    var msg = $(this);
    var testoMessaggio = input.val();

    msg.val("");

    sendMsg(testoMessaggio);
  }

}

function sendMsg(txt) {

  var copia = .clone
  var target = messaggio utente

  trascrivo la copia con testo e timestamp
  copia.find testo
  copia.find timestamp
}

function timeStamp() {

}

function init() {

  addInputListener();
}

$(document).ready(init);
