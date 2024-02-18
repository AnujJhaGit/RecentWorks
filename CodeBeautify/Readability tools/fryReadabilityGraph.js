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

function updateGraph(longSentences, longWords) {
  const ctx = fryGraph.getContext("2d");

  if (myChart) {
    myChart.destroy();
  }

  // Clear the graph
  ctx.clearRect(0, 0, fryGraph.width, fryGraph.height);

  // Draw x-axis
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(0, fryGraph.height / 2);
  ctx.lineTo(fryGraph.width, fryGraph.height / 2);
  ctx.stroke();

  // Draw y-axis
  ctx.beginPath();
  ctx.moveTo(fryGraph.width / 2, 0);
  ctx.lineTo(fryGraph.width / 2, fryGraph.height);
  ctx.stroke();

  // Draw points on the x-axis
  const pointInterval = 4;
  for (let x = 108; x <= 172; x += pointInterval) {
    const xPosition = mapValue(x, 108, 172, 0, fryGraph.width);
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(xPosition, fryGraph.height / 2, 3, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Draw dotted lines based on user input
  drawDottedLines(ctx, longSentences, longWords);
}

function mapValue(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function drawDottedLines(ctx, xValue, yValue, xDash, yDash) {
  // Dotted line for x-axis
  ctx.setLineDash([xDash, xDash]);
  ctx.strokeStyle = 'rgba(255, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(xValue, 0);
  ctx.lineTo(xValue, fryGraph.height);
  ctx.stroke();
  ctx.setLineDash([]); // Reset line dash

  // Dotted line for y-axis
  ctx.setLineDash([yDash, yDash]);
  ctx.strokeStyle = 'rgba(0, 255, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(0, yValue);
  ctx.lineTo(fryGraph.width, yValue);
  ctx.stroke();
  ctx.setLineDash([]); // Reset line dash

  // Intersection point
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.beginPath();
  ctx.arc(xValue, yValue, 5, 0, 2 * Math.PI);
  ctx.fill();
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
