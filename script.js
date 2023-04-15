var frase = document.getElementById('textarea').value.toLowerCase;
var btnEncrypt = document.querySelector('#btn-encrypt');
var btnDecrypt = document.querySelector('#btn-decrypt');
var btnCopy = document.querySelector('#btn-copy');
var noResult = document.querySelector('#no-result');
var resultDiv = document.querySelector('#result');
var resultText = document.querySelector('#result__text');

btnEncrypt.onclick = encrypt;
// btnDecrypt.onclick = decrypt;

function analisaTexto(texto) {
  let encryptedText = '';

  for (let i = 0; i < texto.length; i++) {
    switch (texto[1]) {
      case 'a':
        encryptedText += 'ai';
        break;
    }
  }

  return encryptedText;
}

//-----------------------TEST
function encripta() {
  var textoEncriptado = frase.replace(/e/gim, 'enter');
  var textoEncriptado = frase.replace(/i/gim, 'imes');
  var textoEncriptado = frase.replace(/a/gim, 'ai');
  var textoEncriptado = frase.replace(/o/gim, 'ober');
  var textoEncriptado = frase.replace(/u/gim, 'ufat');
}
//-----------------------TEST

function encrypt(encryptedText) {
  if (frase.value === ' ') {
    alert('Digite uma palavra');
  } else {
    analisaTexto(frase.value);
    console.log(encryptedText);
    // tira img do card resultado
    noResult.style.display = 'none';

    // coloca o texto inserido no campo do resultado
    resultText.innerHTML = frase.value;

    //faz a div resultado e o botão aparecer
    resultDiv.style.textAlign = 'start';
    resultText.style.display = 'block';
    btnCopy.style.display = 'block';
  }
}

function decrypt() {
  // alert(frase.value);
}
