function calculateARI() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/).length;
    const sentences = Math.max(1, inputText.split(/[.!?]+/).length - 1); // Ensure sentences is at least 1
    const characters = inputText.replace(/\s/g, '').length;

    const ari = 4.71 * (characters / words) + 0.5 * (words / sentences) - 21.43;
    const gradeLevel = calculateGradeLevel(ari);

    const resultElement = document.getElementById('ariResult');
    resultElement.innerHTML = `ARI Score: ${ari.toFixed(2)}<br>Reading Difficulty: ${getReadingDifficulty(gradeLevel)}<br>Grade Level: ${gradeLevel}<br>Age Range: ${getAgeRange(gradeLevel)}`;
  }

  function calculateGradeLevel(ari) {
    return Math.max(1, Math.round(ari * 10) / 10); 
  }

  function getReadingDifficulty(gradeLevel) {
    if (gradeLevel < 3) {
      return 'Very Easy';
    } else if (gradeLevel < 6) {
      return 'Easy';
    } else if (gradeLevel < 9) {
      return 'Fairly Easy';
    } else if (gradeLevel < 12) {
      return 'Moderate';
    } else if (gradeLevel < 15) {
      return 'Fairly Difficult';
    } else {
      return 'Difficult';
    }
  }

  function getAgeRange(gradeLevel) {
    const minAge = Math.round(5 + gradeLevel);
    const maxAge = minAge + 1;
    return `${minAge}-${maxAge}`;
  }
      
        function loadSampleText() {
          document.getElementById('inputText').value = "The quick brown fox jumps over the lazy dog.";
          enableCalculateButton();
        }
      
        function loadFile() {
          const fileInput = document.getElementById('fileInput');
          const fileName = document.getElementById('fileName');
          const file = fileInput.files[0];
      
          if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
              document.getElementById('inputText').value = e.target.result;
              enableCalculateButton();
            };
            reader.readAsText(file);
            fileName.textContent = file.name;
          }
        }
      
        function clearText() {
          document.getElementById('inputText').value = "";
          disableCalculateButton();
        }
      
        function enableCalculateButton() {
          document.getElementById('calculateButton').removeAttribute('disabled');
        }
      
        function disableCalculateButton() {
          document.getElementById('calculateButton').setAttribute('disabled', 'true');
        }
      

        document.getElementById('inputText').addEventListener('input', enableCalculateButton);