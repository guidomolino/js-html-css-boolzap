
function addInputListener() {

  var input = $("#txt-msg");
  input.keyup(sendKeyup);

}

// invio messaggio

function sendKeyup(event) {

  var tasto = event.which;

  console.log(event.which);

  var msg = $(this);
  var testoMessaggio = msg.val();
  // 13 = tasto invio
  if (tasto == 13) {

    console.log("invio");

    sendChat(msg, testoMessaggio);

  }

}

function sendChat(input, txt) {

    input.val('');

    sendMsg(txt,"utente sent");
    setTimeout(function() { sendMsg('ok', 'contatto ricevuto'); }, 1000);
}

function sendMsg(txt,type) {

  var copia = $("#template div").clone();
  var posizione = $('.chat-box')

  copia.addClass(type)

  // trascrivo la copia con testo e timestamp
  copia.find("p").text(txt);
  copia.find("span").text(oraAttuale());

  posizione.append(copia);

}

function oraAttuale() {
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
}


// search bar

function searchFunction() {
  // variabili
  var input, filter, ul, li, p, i, txtValue;
  input = document.getElementById('inputContatti');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listaContatti");
  li = listaContatti.getElementsByTagName('li');

  // Loop
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function init() {
  addInputListener();
  searchFunction();
}

$(document).ready(init);
