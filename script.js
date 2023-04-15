var frase = document.getElementById('textarea');

var btnEncrypt = document.querySelector('#btn-encrypt');
var btnDecrypt = document.querySelector('#btn-decrypt');
var btnCopy = document.querySelector('#btn-copy');
var noResult = document.querySelector('#no-result');
var resultDiv = document.querySelector('#result');
var resultText = document.querySelector('#result__text');

btnEncrypt.onclick = encrypt;
// btnDecrypt.onclick = decrypt;

// function analisaTexto(texto) {
//   let encryptedText = '';

//   for (let i = 0; i < texto.length; i++) {
//     switch (texto[1]) {
//       case 'a':
//         encryptedText += 'ai';
//         break;
//     }
//   }

//   return encryptedText;
// }

/*-----------------------TEST
function encripta() {
  var textoEncriptado = frase.replace(/e/gim, 'enter');
  var textoEncriptado = textoEncriptado.replace(/i/gim, 'imes');
  var textoEncriptado = textoEncriptado.replace(/a/gim, 'ai');
  var textoEncriptado = textoEncriptado.replace(/o/gim, 'ober');
  var textoEncriptado = textoEncriptado.replace(/u/gim, 'ufat');

  resultText.innerHTML = textoEncriptado;
}*/
//-----------------------TEST

function encrypt() {
  console.log(frase.value);
  if (textarea.value === ' ') {
    alert('Digite uma palavra');
  } else {
    // analisaTexto(frase.value);
    // console.log(encryptedText);

    var textoEncriptado = frase.value.toLowerCase().replace(/e/gim, 'enter');
    var textoEncriptado = textoEncriptado.replace(/i/gim, 'imes');
    var textoEncriptado = textoEncriptado.replace(/a/gim, 'ai');
    var textoEncriptado = textoEncriptado.replace(/o/gim, 'ober');
    var textoEncriptado = textoEncriptado.replace(/u/gim, 'ufat');

    // tira img do card resultado
    noResult.style.display = 'none';

    //faz a div resultado e o botão aparecer
    resultDiv.style.textAlign = 'start';
    resultText.innerHTML = textoEncriptado;
    resultText.style.display = 'block';
    btnCopy.style.display = 'block';

    // coloca o texto inserido no campo do resultado
  }
}

// function decrypt() {
//   // alert(frase.value);
// }
