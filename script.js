var textArea = document.querySelector('#textarea').value;
let btnEncrypt = document.querySelector('#btn-encrypt');
let btnDecrypt = document.querySelector('#btn-decrypt');
let noResult = document.querySelector('#no-result');
let resultText = document.querySelector('#result__text');

function encrypt() {
  noResult.style.display = 'none';
  resultText.style.display = 'block';
  // resultText.innerHTML = '<p>' + textArea + '<p>';
}
function decrypt() {
  // alert(textArea.value);
}
