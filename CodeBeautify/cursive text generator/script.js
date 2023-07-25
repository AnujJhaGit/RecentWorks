const autoUpdateCheckbox = document.getElementById('auto-update-checkbox');
const inputText = document.getElementById('input-textarea');
const outputText = document.getElementById('output-textarea');
let activeButton = null;
const download = document.getElementById('download-button');
document.getElementById('file-input').addEventListener('change', handleFileUpload);
function handleFileUpload(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const fileContent = e.target.result;
    document.getElementById('input-textarea').value = fileContent;
  };
  reader.readAsText(file);
}
const buttons = document.querySelectorAll('.format-button');
window.addEventListener('DOMContentLoaded', () => {
  const cursiveButton = document.getElementById('cursive-button');
  cursiveButton.classList.add('is-primary');
  cursiveButton.click();
});


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (activeButton) {
      activeButton.classList.remove('is-primary');
    }
    button.classList.add('is-primary');
    activeButton = button;
    updateOutput();
    applyFormat(button.id);
    console.log('Button clicked:', button.id);
  });
});

const formatStyles = {
  'cursive-button': {
    fontFamily: 'cursive',
    fontWeight: '',
    textDecoration: '',
    fontStyle: ''
  },
  'bold-button': {
    fontFamily: '',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: ''
  },
  'strike-through-button': {
    fontFamily: '',
    fontWeight: '',
    textDecoration: 'line-through',
    fontStyle: ''
  },
  'underline-button': {
    fontFamily: '',
    fontWeight: '',
    textDecoration: 'underline',
    fontStyle: ''
  },
  'italics-button': {
    fontFamily: '',
    fontWeight: '',
    textDecoration: '',
    fontStyle: 'italic'
  },
  'bold-italic-button': {
    fontFamily: '',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: 'italic'
  },
  'bold-cursive-button': {
    fontFamily: 'cursive',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: ''
  },
  'sans-bold-italic-button': {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: 'italic'
  },
  'serif-bold-italic-button': {
    fontFamily: 'serif',
    fontWeight: 'bold',
    textDecoration: '',
    fontStyle: 'italic'
  }
};
function applyFormat(buttonId) {
  const format = formatStyles[buttonId] || {};
  outputText.style.fontFamily = format.fontFamily || '';
  outputText.style.fontWeight = format.fontWeight || '';
  outputText.style.textDecoration = format.textDecoration || '';
  outputText.style.fontStyle = format.fontStyle || '';
}

inputText.addEventListener('input', updateOutput);

function updateOutput() {
  outputText.textContent = inputText.value;
  applyFormat(activeButton ? activeButton.id : null);
}
autoUpdateCheckbox.addEventListener('change', () => {
  if (autoUpdateCheckbox.checked) {
    inputText.addEventListener('input', updateOutput);
    updateOutput();
  } else {
    inputText.removeEventListener('input', updateOutput);
  }
});
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', copyOutputText);
function copyOutputText() {
  const formattedContent = outputText.innerHTML;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.style.position = 'absolute';
  tempTextArea.style.left = '-9999px';
  tempTextArea.style.opacity = '0';
  tempTextArea.innerHTML = formattedContent;
  document.body.appendChild(tempTextArea);
  const range = document.createRange();
  range.selectNode(tempTextArea);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  try {
    const successful = document.execCommand('copy');
    const message = successful
      ? 'Formatted content copied to clipboard successfully!'
      : 'Unable to copy content to clipboard.';
    console.log(message);
  } catch (err) {
    console.error('Error copying content to clipboard:', err);
  }
  window.getSelection().removeAllRanges();
  document.body.removeChild(tempTextArea);
}
function downloadAsTxt() {
  const content = outputText.textContent;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'output.txt';
  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Add event listener to the "Download" button
download.addEventListener('click', () => {
  downloadAsTxt();
});

