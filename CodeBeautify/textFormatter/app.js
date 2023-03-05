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
    }
    document.getElementById('output-text').value = outputText;
  }