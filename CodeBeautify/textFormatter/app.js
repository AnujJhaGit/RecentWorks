function formatText(action) {
    let inputText = document.getElementById('input-text').value;
    let outputText = '';
    switch (action) {
      case 'uppercase-all':
        outputText = inputText.toUpperCase();
        break;
      case 'lowercase-all':
        outputText = inputText.toLowerCase();
        break;
      case 'capitalize-sentences':
        outputText = inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) { return c.toUpperCase(); });
        break;
      case 'capitalize-words':
        outputText = inputText.toLowerCase().replace(/\b\w/g, function(c) { return c.toUpperCase(); });
        break;
      case 'find-and-replace':
        let findText = document.getElementById('find-text').value;
        let replaceText = document.getElementById('replace-text').value;
        let isCaseSensitive = document.getElementById('case-sensitive').checked;
        let regexOption = isCaseSensitive ? 'g' : 'gi';
        outputText = inputText.replace(new RegExp(findText, regexOption), replaceText);
        break;
      case 'add-text':
        let addText = document.querySelector('input[type="text"]').value;
        let position = document.getElementById('select').value;
        let textArray = inputText.split('\n');
        for (let i = 0; i < textArray.length; i++) {
          if (position === 'Start') {
            textArray[i] = addText + textArray[i];
          } else {
            textArray[i] = textArray[i] + addText;
          }
        }
        outputText = textArray.join('\n');
        break;
      case 'trim-text':
        let trimPosition = document.getElementById('trimPos').value;
        let trimCharacters = parseInt(document.getElementById('trimChar').value, 10);
        let linesArray = inputText.split('\n');
        for (let i = 0; i < linesArray.length; i++) {
          if (trimPosition === 'First') {
            linesArray[i] = linesArray[i].substr(trimCharacters);
          } else {
            linesArray[i] = linesArray[i].substr(0, linesArray[i].length - trimCharacters);
          }
        }
        outputText = linesArray.join('\n');
        break;
      case 'bold':
        outputText = '<b>' + inputText + '</b>';
        break;
      case 'italic':
        outputText = '<i>' + inputText + '</i>';
        break;
      case 'underline':
        outputText = '<u>' + inputText + '</u>';
        break;
    }
    document.getElementById('output-text').innerHTML = outputText;
  }
  