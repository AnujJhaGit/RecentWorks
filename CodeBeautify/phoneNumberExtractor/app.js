document.getElementById('extractButton').addEventListener('click', function() {
    var inputText = document.getElementById('input').value;
    var sanitizedText = inputText.replace(/[\(\)\+\-\"]/g, '');
    var extractedNumbers = sanitizedText.match(/(\(\d{3}\)\s)?\d{3}-\d{3}-\d{4}|\d{3}-\d{3}-\d{4}/g);
    var outputTextarea = document.getElementById('output');
    var copyButton = document.getElementById('copyButton');
  
    if (sanitizedText === '') {
      outputTextarea.value = 'No phone numbers found.';
      copyButton.disabled = true;
    } else if (extractedNumbers === null) {
      outputTextarea.value = 'No valid phone numbers found.';
      copyButton.disabled = true;
    } else {
      var validNumbers = extractedNumbers.filter(function(number) {
        return number.length === 12 || number.length === 13 || number.length === 14;
      });
  
      if (validNumbers.length === 0) {
        outputTextarea.value = 'No valid phone numbers found.';
        copyButton.disabled = true;
      } else {
        outputTextarea.value = validNumbers.join('\n');
        copyButton.disabled = false;
      }
    }
  });
  
  
  document.getElementById('copyButton').addEventListener('click', function() {
    var outputTextarea = document.getElementById('output');
    outputTextarea.select();
    outputTextarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Copied to clipboard!');
  });
  
  document.getElementById('sampleButton').addEventListener('click', function() {
    var sampleInput = 'Sample text with phone numbers: (123) 456-7890 and +1-234-567-8901';
    document.getElementById('input').value = sampleInput;
  });
  