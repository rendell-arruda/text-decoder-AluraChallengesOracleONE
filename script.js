var textArea = document.querySelector('#textarea');
var btnEncrypt = document.querySelector('#btn-encrypt');
var btnDecrypt = document.querySelector('#btn-decrypt');
var btnCopy = document.querySelector('#btn-copy');
var noResult = document.querySelector('#no-result');
var resultDiv = document.querySelector('#result');
var resultText = document.querySelector('#result__text');

btnEncrypt.onclick = encrypt;
// btnDecrypt.onclick = decrypt;

function encrypt() {
  if (textArea.value === ' ') {
    alert('Digite uma palavra');
  } else {
    // tira img do card resultado
    noResult.style.display = 'none';

    // coloca o texto inserido no campo do resultado
    resultText.innerHTML = textArea.value;

    //faz a div resultado e o botão aparecer
    resultDiv.style.display = 'block';
    resultText.style.display = 'block';
    btnCopy.style.display = 'block';
  }
}
function decrypt() {
  // alert(textArea.value);
}
