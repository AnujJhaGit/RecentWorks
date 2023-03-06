const inputTextEl = document.getElementById('input-text');
const outputTextEl = document.getElementById('output-text');
const copyWrapperEl = document.getElementById('copy-wrapper');
const copyBtnEl = document.getElementById('copy-btn');
const copyIconEl = document.getElementById('copy-icon');

function formatText(action) {
  const inputText = inputTextEl.value.trim();
  let outputText = '';

  switch (action) {
    case 'uppercase-all':
      outputText = inputText.toUpperCase();
      break;
    case 'lowercase-all':
      outputText = inputText.toLowerCase();
      break;
    case 'capitalize-sentences':
      outputText = inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
      break;
    case 'capitalize-words':
      outputText = inputText.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
      break;
    case 'find-and-replace':
      const findText = document.getElementById('find-text').value.trim();
      const replaceText = document.getElementById('replace-text').value.trim();
      const isCaseSensitive = document.getElementById('case-sensitive').checked;
      const regexOption = isCaseSensitive ? 'g' : 'gi';
      outputText = inputText.replace(new RegExp(findText, regexOption), replaceText);
      break;
    case 'add-text':
      const addText = document.querySelector('input[type="text"]').value.trim();
      const position = document.getElementById('select').value;
      const textArray = inputText.split('\n').map(line => position === 'Start' ? addText + line : line + addText);
      outputText = textArray.join('\n');
      break;
    case 'trim-text':
      const trimPosition = document.getElementById('trimPos').value;
      const trimCharacters = parseInt(document.getElementById('trimChar').value, 10);
      const linesArray = inputText.split('\n').map(line => trimPosition === 'First' ? line.substr(trimCharacters) : line.substr(0, line.length - trimCharacters));
      outputText = linesArray.join('\n');
      break;
    case 'bold':
      outputText = `<b>${inputText}</b>`;
      break;
    case 'italic':
      outputText = `<i>${inputText}</i>`;
      break;
    case 'underline':
      outputText = `<u>${inputText}</u>`;
      break;
  }

  outputTextEl.innerHTML = outputText;
}

function addCopyButtonListener() {
    const copyBtn = document.querySelector('#copy-btn');
    const copyDiv = document.querySelector('#copy-wrapper');
    const copyIcon = document.querySelector('#copy-icon');
    const outputText = document.querySelector('#output-text');
  
    if (outputText) {
      copyDiv.addEventListener('click', () => {
        const tempElem = document.createElement('div');
        tempElem.innerHTML = outputText.innerHTML;
        navigator.clipboard.writeText(tempElem.textContent)
          .then(() => {
            copyBtn.textContent = 'Copied!';
            copyIcon.classList.add('fa-check');
            setTimeout(() => {
              copyBtn.textContent = 'Copy';
              copyIcon.classList.remove('fa-check');
            }, 2000);
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err);
          });
      });
    }
  }
  function countWords(text) {
    return text.trim().split(/\s+/).length;
  }
  
  function countCharacters(text) {
    return text.length;
  }
inputTextEl.addEventListener("keyup", () => {
  console.log(inputTextEl.value)
document.getElementById("word-count").value = countWords(inputTextEl.value);
document.getElementById("char-count").value = countCharacters(inputTextEl.value);
});
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("output-word-count").value = countWords(outputTextEl.innerHTML);
    document.getElementById("output-char-count").value = countCharacters(outputTextEl.innerHTML);
  });
});
document.getElementById('reset').addEventListener('click',function(){
  location.reload();
})
addCopyButtonListener();
