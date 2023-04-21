const inputArea = document.getElementById('inputarea');
inputArea.selectionStart = 0;
inputArea.selectionEnd = 0;
const outputArea = document.getElementById('outputarea');
outputArea.selectionStart = 0;
outputArea.selectionEnd = 0;
function TextToPunny() {
  const inputText = inputArea.value;
  if (/[\u0080-\uffff]/.test(inputText)) {
    const punycodeText = punycode.toASCII(inputText);
    outputArea.value = punycodeText;
  } else {
    outputArea.value = inputText;
  }
}
function PunnyToText() {
  const punycodeText = outputArea.value; 
  try {
    const inputText = punycode.toUnicode(punycodeText);
    inputArea.value = inputText;
  } catch (err) {
    inputArea.value = punycodeText;
  }
}
