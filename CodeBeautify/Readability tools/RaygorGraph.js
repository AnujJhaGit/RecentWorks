let autoUpdate = true;
let raygorChart;

function handleAutoUpdateChange() {
  autoUpdate = document.getElementById('autoUpdateCheckbox');
  if (autoUpdate.checked) {
    calculateRaygor();
  }
}

function handleTextChange() {
  const text = document.getElementById('inputText').value.trim();
  let calculateButton = document.getElementById('calculateButton');
  calculateButton.disabled = text === '';
  autoUpdate = document.getElementById('autoUpdateCheckbox');
  if (autoUpdate.checked) {
    calculateRaygor();
  }
}

function calculateRaygor() {
  const inputText = document.getElementById('inputText').value;
  const raygorResult = document.getElementById('raygorResult');

  
  const samplePassage = getSamplePassage(inputText);
  const sentenceCount = countSentences(samplePassage);
  const wordCount = countWordsWithSixOrMoreLetters(samplePassage);

  
  const raygorGradeLevel = Math.round(sentenceCount + wordCount);

  raygorResult.innerHTML = `Raygor Estimate Grade Level: ${raygorGradeLevel}`;

  if (raygorChart) {
    raygorChart.destroy();
  }

  createGraph(raygorGradeLevel, sentenceCount, wordCount);
}

function getSamplePassage(text) {
  
  return text.split(/\s+/).slice(0, 100).join(' ');
}

function countSentences(text) {
  
  return text.split(/[.!?]+/).length - 1;
}

function countWordsWithSixOrMoreLetters(text) {
 
  return text.split(/\s+/).filter(word => word.length >= 6).length;
}


function createGraph(raygorGradeLevel, sentenceCount, wordCount) {
  const ctx = document.getElementById('raygorGraph').getContext('2d');


  if (raygorChart) {
    raygorChart.destroy();
  }

  raygorChart = new Chart(ctx, {
    type: 'line', 
    data: {
      labels: ['3.2', '3.4', '3.6', '28.0+'],
      datasets: [{
        label: 'Long Sentences',
        data: [0, sentenceCount, 0, 0], 
        fill: false, 
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      }, {
        label: 'Long Words',
        data: [0, wordCount, 0, 0], 
        fill: false, 
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Grade Levels'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Average Number of Sentences/Words per 100 Words'
          },
          beginAtZero: true
        }
      }
    }
  });
}

  

function loadSampleText() {
  document.getElementById('inputText').value = 'This is a sample text for testing.';
  handleTextChange();
  calculateRaygor();
}

function loadFile() {
  const fileNameElement = document.getElementById('fileName');
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    fileNameElement.textContent = file.name;

    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('inputText').value = e.target.result;
      handleTextChange();
    };
    reader.readAsText(file);
  } else {
    fileNameElement.textContent = 'No file chosen';
  }
}

function clearText() {
  document.getElementById('inputText').value = '';
  handleTextChange();
}

document.getElementById('inputText').addEventListener('input',handleTextChange);
document.getElementById('calculateButton').addEventListener('click',calculateRaygor);

