import analyzer from "./analyzer.js";

const boton = document.getElementById("reset-button");
const palabras = document.querySelector("li.recuento:nth-child(1)");
const caracteres = document.querySelector("li.recuento:nth-child(2)");
const caracteresSe = document.querySelector("li.recuento:nth-child(3)");
const numeros = document.querySelector("li.recuento:nth-child(4)");
const suma = document.querySelector("li.recuento:nth-child(5)");
const longitud = document.querySelector("li.recuento:nth-child(6)");
const cajaTexto = document.querySelector("textarea");

//metricas
cajaTexto.addEventListener("input", metricas);
function metricas() {
  const textoFinal = cajaTexto.value;

  //contabilizar palabras
  const wordCount = analyzer.getWordCount(textoFinal);
  palabras.innerHTML = "Recuento de palabras :" + wordCount;

  //contabilizar caracteres
  const characterCount = analyzer.getCharacterCount(textoFinal);
  caracteres.innerHTML = "Recuento de caracteres :" + characterCount;

  //contabilizar sin espacios y sin nunmero
  const characterEs = analyzer.getCharacterCountExcludingSpaces(textoFinal);
  caracteresSe.innerHTML =
    "Recuento de caracteres sin espacio y signos:" + characterEs;

  //contabilizar numeros
  const numberCount = analyzer.getNumberCount(textoFinal);
  numeros.innerHTML = "Recuento de numeros:" + numberCount;

  //Suma denumeros
  const numberSum = analyzer.getNumberSum(textoFinal);
  suma.innerHTML = "Suma total de numeros:" + numberSum;

  //longuitud del texto
  const averageWord = analyzer.getAverageWordLength(textoFinal);
  longitud.innerHTML = "Longitud media depalabras:" + averageWord;
}

boton.addEventListener("click", function () {
  if (cajaTexto.value === "") {
    alert("El cuadro esta listo para que escribas en el");
  } else {
    cajaTexto.value = "";
  }
  palabras.innerHTML = "Recuento de palabras:0";
  caracteres.innerHTML = "Recuento de caracteres:0";
  caracteresSe.innerHTML = "Recuento de caracteres sin espacios y signos:0";
  numeros.innerHTML = "Recuento de numeros :0";
  suma.innerHTML = "Suma total de numeros :0";
  longitud.innerHTML = "Longitud media de palabras :0";
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
