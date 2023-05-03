var btnEncrypt = document.querySelector('#btn-encrypt');
var btnDecrypt = document.querySelector('#btn-decrypt');
var btnCopy = document.querySelector('#btn-copy');

var frase = document.getElementById('textarea')
var noResult = document.querySelector('#no-result');
var resultDiv = document.querySelector('#result');
var resultText = document.querySelector('#result__text');

let isValidated = true;

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

function validity() {
  if (textarea.value === ' ') {
    alert('Digite uma palavra');
    isValidated = false;
  } else {
    return (isValidated = true);
  }
}

function limpaTela() {
  noResult.style.display = 'none';
  resultDiv.style.textAlign = 'start';
  resultText.style.display = 'block';
  btnCopy.style.display = 'block';
}

function encrypt() {
  // console.log(frase.value);
  validity();
  if (isValidated) {
    var textoEncriptado = frase.value.toLowerCase().replace(/e/gim, 'enter');
    var textoEncriptado = textoEncriptado.replace(/i/gim, 'imes');
    var textoEncriptado = textoEncriptado.replace(/a/gim, 'ai');
    var textoEncriptado = textoEncriptado.replace(/o/gim, 'ober');
    var textoEncriptado = textoEncriptado.replace(/u/gim, 'ufat');

    // tira img do card resultado
    limpaTela();

    //faz a div resultado e o botão aparecer
    resultText.innerHTML = textoEncriptado;
  }
}

function decrypt() {
  validity();

  if (isValidated) {
    var textoEncriptado = frase.value.toLowerCase().replace(/enter/gim, 'e');
    var textoEncriptado = textoEncriptado.replace(/imes/gim, 'i');
    var textoEncriptado = textoEncriptado.replace(/ai/gim, 'a');
    var textoEncriptado = textoEncriptado.replace(/ober/gim, 'o');
    var textoEncriptado = textoEncriptado.replace(/ufat/gim, 'u');

    // tira img do card resultado
    limpaTela();
    resultText.innerHTML = textoEncriptado;
  }
}

function copy() {
  // resultText.select();
  // document.execCommand('copy');
  let resultado = document.getElementById('result__text');
  navigator.clipboard.writeText(resultText.innerHTML);
}
