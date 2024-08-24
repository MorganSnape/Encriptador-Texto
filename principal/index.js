const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopyText = document.getElementById("copiar");

const input = document.getElementById("text-field");
const responMsg = document.getElementById("respon-message");

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
  let texto = "" + text;
  let textoCifrado = texto
    .split("")
    .map((text) => {
      paramEncript = {
        a: "g",
        e: "f",
        i: "l",
        o: "y",
        u: "h",
        l: "a",
        g: "e",
        f: "i",
        h: "o",
        y: "u",
      };
      return paramEncript[text] || text;
    })
    .reduce((acumulador, posicion) => acumulador + posicion);

  return textoCifrado;
}

// Funcion para desencriptar el texto

btnDesencriptar.addEventListener("click", () => {
  let text = getText();
  let textoDescifrado = desencriptar(text);

  message(textoDescifrado);
});

function desencriptar(text) {
  let texto = "" + text;
  let textoDescifrado = texto
    .split("")
    .map((text) => {
      paramEncript = {
        g: "a",
        f: "e",
        l: "i",
        y: "o",
        h: "u",
        a: "l",
        e: "g",
        i: "f",
        o: "h",
        u: "y",
      };
      return paramEncript[text] || text;
    })
    .reduce((acumulador, posicion) => acumulador + posicion);

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

btnCopyText.addEventListener("click", () => {
  copyText();
});

function copyText() {
  let copyText = responMsg.innerText;

  navigator.clipboard.writeText(copyText);

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "white",
    customClass: {
      popup: "white",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  (async () => {
    await Toast.fire({
      icon: "success",
      title: "¡Copiaste tu mensaje!",
      background: "black",
      color: "white",
    });
  })();
}
