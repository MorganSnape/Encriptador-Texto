

let btnEncriptar = document.getElementById("btn-encriptar");
let btnDesencriptar = document.getElementById("btn-desencriptar");

function getText() {
  return ''+document.getElementById("text-field").value;
}

// Funcion para encriptar el texto
btnEncriptar.addEventListener("click",()=>{
  let textarea = getText();
  let textoCifrado = textarea
  .replace(/a/gi, "ai")
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");
  message(textoCifrado);
})

// Funcion para desencriptar el texto

function desencriptar() {
  let textarea = document.getElementById("text-field").value;
  message(textoCifrado);
  
}

// Funcion para imprimir el mensaje

// TODO Renombrar función por algo que indique mejor la acción
function message(msg) {
  let campoMsg = document.getElementById("respon-message");
  let subTexto = document.getElementById("texto-extra");
  let btnCopiar = document.getElementById("copiar");

  switch (true) {
    case msg.length === 0:
      campoMsg.innerText = "No logre encontrar tu Prrr... mensaje";
      subTexto.classList.remove("disabled")
      btnCopiar.classList.add("disabled");
      break;

    default:
      campoMsg.innerText = msg;
      subTexto.classList.add("disabled");
      btnCopiar.classList.remove("disabled");
      break;  
  }
}

