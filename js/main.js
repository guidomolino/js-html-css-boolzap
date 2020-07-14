
function addInputListener() {
  var input = $("#txt-msg");
  input.keydown(sendKeydown);
}

function sendKeydown(event) {

  var tasto = event.which;

  // 13 = tasto invio
  if (tasto == 13) {

    console.log("invio");

    var msg = $(this);
    var testoMessaggio = msg.val();

    sendMsg(testoMessaggio);
    msg.val("")
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

function init() {

  addInputListener();
}

$(document).ready(init);
