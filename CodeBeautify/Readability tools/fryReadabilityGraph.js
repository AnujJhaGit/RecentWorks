const inputText = document.getElementById("inputText");
const calculateButton = document.getElementById("calculateButton");
const autoUpdateCheckbox = document.getElementById("autoUpdateCheckbox");
const fryGraph = document.getElementById("fryGraph");
const fileName = document.getElementById("fileName");
let myChart;

function calculateFry() {
  const text = inputText.value;

  const passages = getPassages(text, 100);

  const averageSentencesPer100Words = passages.reduce((sum, passage) => {
    const sentences = passage.split(/[.!?]/);
    return sum + sentences.length + estimateLastSentence(sentences);
  }, 0) / 3;

  const averageSyllablesPer100Words = passages.reduce((sum, passage) => {
    const syllables = passage.split(/\s+/).reduce((syllCount, word) => {
      return syllCount + countSyllables(word);
    }, 0);
    return sum + syllables + 100;
  }, 0) / 3;

  updateGraph(averageSentencesPer100Words, averageSyllablesPer100Words);
}

function getPassages(text, wordsPerPassage) {
  const passages = [];
  let currentPassage = "";
  let wordCount = 0;

  for (const word of text.split(/\s+/)) {
    currentPassage += word + " ";
    wordCount++;

    if (wordCount === wordsPerPassage) {
      passages.push(currentPassage);
      currentPassage = "";
      wordCount = 0;
    }
  }

  if (currentPassage !== "") {
    passages.push(currentPassage);
  }

  return passages;
}

function estimateLastSentence(sentences) {
  const lastSentence = sentences[sentences.length - 1];
  const words = lastSentence.split(/\s+/);
  const wordCount = words.length;

  if (wordCount > 4) {
    return 0.5; 
  } else {
    return 0;
  }
}

function countSyllables(word) {
  const vowels = "aeiouy";
  let syllCount = 0;
  let prevVowel = false;
  for (const char of word) {
    if (vowels.includes(char.toLowerCase())) {
      if (!prevVowel) {
        syllCount++;
      }
      prevVowel = true;
    } else {
      prevVowel = false;
    }
  }
  return syllCount;
}


function updateGraph(averageSentencesPer100Words, averageSyllablesPer100Words) {
    const ctx = fryGraph.getContext("2d");

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Fry Graph',
                    data: [{ x: 0, y: 0 }, { x: averageSyllablesPer100Words, y: averageSentencesPer100Words }],
                    fill: false,
                    pointRadius: 0,
                    showLine: true, // Show line connecting the points
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                },
            ],
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Syllables per 100 Words',
                    },
                    min: 0,
                    max: averageSyllablesPer100Words + 10,
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Sentences per 100 Words',
                    },
                    min: 0,
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    display: true,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20,
                },
            },
        },
    });
}

  
  
function handleAutoUpdateChange() {
  if (autoUpdateCheckbox.checked) {
    calculateButton.disabled = true;
    inputText.addEventListener("input", calculateFry);
  } else {
    calculateButton.disabled = false;
    inputText.removeEventListener("input", calculateFry);
  }
}


function loadSampleText() {
  inputText.value = "This is some sample text to demonstrate the Fry readability calculator.";
  calculateFry();
}


function loadFile() {
  const file = document.getElementById("fileInput").files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    inputText.value = e.target.result;
    calculateFry();
  };
  reader.readAsText(file);
  fileName.textContent = file.name;
}

function clearText() {
  inputText.value = "";

  fryGraph.innerHTML = ""; // Clear the graph
  fileName.textContent = "No file chosen";
}

handleAutoUpdateChange();
autoUpdateCheckbox.addEventListener("change", handleAutoUpdateChange);
