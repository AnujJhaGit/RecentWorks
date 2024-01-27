
const decodeButton = document.getElementById('decodeButton');
const copyButton = document.getElementById('copyButton');
const downloadButton = document.getElementById('downloadButton');
const inputField = document.getElementById('base64Input');
const fileInput = document.getElementById('fileInput');
const outputArea = document.getElementById('decodedText');
const errorNotification = document.getElementById('errorNotification');
const autoCheckbox = document.getElementById('autoCheckbox');

let autoUpdate = false;
const sampleButton = document.getElementById('sampleButton');

sampleButton.addEventListener('click', () => {
const sampleBase64String = 'SGVsbG8gd29ybGQh'; // Replace with your desired Base64 string
inputField.value = sampleBase64String;
decodeBase64();
});
decodeButton.addEventListener('click', () => {
  decodeBase64();
});

copyButton.addEventListener('click', () => {
const range = document.createRange();
range.selectNode(outputArea);
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);
document.execCommand('copy');
window.getSelection().removeAllRanges();
alert('Copied to clipboard!');
});



downloadButton.addEventListener('click', () => {
  const decodedText = outputArea.textContent;
  const blob = new Blob([decodedText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'decoded_text.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      inputField.value = e.target.result;
      if (autoUpdate) {
        decodeBase64();
      }
    };
    reader.readAsText(file);
  }
});

autoCheckbox.addEventListener('change', () => {
  autoUpdate = autoCheckbox.checked;
  if (autoUpdate) {
    decodeBase64();
  }
});

inputField.addEventListener('input', () => {
  if (autoUpdate) {
    decodeBase64();
  }
  updateButtonsState();
});

function updateButtonsState() {
  const base64String = inputField.value.trim();
  if (base64String === '') {
    disableButtons();
  } else {
    enableButtons();
  }
}

function decodeBase64() {
  const base64String = inputField.value.trim();

  if (base64String === '') {
    showError('Please enter a Base64 string.');
    return;
  }

  try {
    const decodedText = atob(base64String);
    outputArea.textContent = decodedText;
    hideError();
    enableButtons();
  } catch (error) {
    showError('Error decoding Base64 string. Make sure the input is a valid Base64 string.');
    disableButtons();
  }
}

function showError(message) {
  errorNotification.textContent = message;
  errorNotification.style.display = 'block';
}

function hideError() {
  errorNotification.style.display = 'none';
}

function enableButtons() {
  copyButton.removeAttribute('disabled');
  downloadButton.removeAttribute('disabled');
}

function disableButtons() {
  copyButton.setAttribute('disabled', 'disabled');
  downloadButton.setAttribute('disabled', 'disabled');
}
