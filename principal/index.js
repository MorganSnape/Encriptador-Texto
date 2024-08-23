const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopyText = document.getElementById("copiar")

const input = document.getElementById("text-field");
const responMsg = document.getElementById("respon-message")

//Funcion para obtener el texto del textarea
function getText() {
  return "" + input.value;
}

// Funcion para encriptar el texto
btnEncriptar.addEventListener("click", () => {
  let text = getText();
  let textoCifrado = encriptar(text);

  message(textoCifrado);
});

function encriptar(text) {
  let textoCifrado = text
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  return textoCifrado;
}

// Funcion para desencriptar el texto

btnDesencriptar.addEventListener("click", () => {
  let text = getText();
  let textoDescifrado = desencriptar(text);

  message(textoDescifrado);
});

function desencriptar(text) {
  let textoDescifrado = text
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  return textoDescifrado;
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
      subTexto.classList.remove("disabled");
      btnCopiar.classList.add("disabled");
      break;

    default:
      campoMsg.innerText = msg;
      subTexto.classList.add("disabled");
      btnCopiar.classList.remove("disabled");
      break;
  }
}

input.addEventListener("input", () => {
  updateUIState();
});

function isTextValid() {
  return !getText().match(/[^a-z\s]+/);
}

function updateUIState() {
  const instructions = document.getElementById("instructions");
  if (isTextValid()) {
    // Habilitar botones
    btnEncriptar.removeAttribute("disabled");
    btnDesencriptar.removeAttribute("disabled");

    // poner texto de alerta normal
    instructions.classList.remove("invalid");
  } else {
    // Deshabilitar botones
    btnEncriptar.setAttribute("disabled", "");
    btnDesencriptar.setAttribute("disabled", "");

    // poner texto de alerta grande y rojo
    instructions.classList.add("invalid");
  }
}


//Funcion para copiar texto

btnCopyText.addEventListener("click", () =>{
 copyText()
})

function copyText(){
 let copyText = responMsg.innerText;

navigator.clipboard.writeText(copyText);
alert("Texto copiado " + copyText)

}

