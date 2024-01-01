function handleTextChange() {
    updateCalculateButtonStatus();
    updateAutoUpdate();
}

function handleAutoUpdateChange() {
    updateCalculateButtonStatus();
}

function updateCalculateButtonStatus() {
    const inputText = document.getElementById('inputText').value;
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = inputText.trim() === '';
}
document.getElementById('inputText').addEventListener('input',updateAutoUpdate);
function updateAutoUpdate() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
    
    if (autoUpdateCheckbox.checked) {
        calculateGunningFog();
    }
}

function calculateGunningFog() {
    const inputText = document.getElementById('inputText').value;
    const gunningFogResult = document.getElementById('gunningFogResult');

    const fogScore = calculateFogScore(inputText);
    
    gunningFogResult.textContent = `Gunning-Fog Readability Score: ${fogScore.toFixed(2)} (${getGradeLevel(fogScore)})`;
}

function calculateFogScore(text) {
    const words = text.match(/\b\w+\b/g);
    const sentences = text.split(/[.!?]+/);

    const asl = words.length / sentences.length;

    const hardWords = words.filter(word => countSyllables(word) >= 3 && !isExcludedWord(word));
    const phw = hardWords.length / words.length * 100;

    return 0.4 * (asl + phw);
}

function countSyllables(word) {
   
    const syllableRegex = /[^aeiouy]*[aeiouy]+/gi;
    const matches = word.match(syllableRegex);
    return matches ? matches.length : 0;
}

function isExcludedWord(word) {
   
    return false;
}

function getGradeLevel(score) {
       const roundedScore = Math.round(score);

    if (roundedScore <= 5) return '5th Grade and below';
    if (roundedScore === 6) return '6th Grade';
    if (roundedScore === 7) return '7th Grade';
    if (roundedScore === 8) return '8th Grade (Conversational English)';
    if (roundedScore >= 9 && score <= 12) return '9th - 12th Grade';
    if (roundedScore >= 13 && score <= 16) return 'College';
    if (roundedScore === 17) return 'College Graduate';
    if (roundedScore >= 18 ) return 'Professional';
}

function loadSampleText() {
    const sampleText = "Your sample text goes here. Make sure it's at least 100 words.";
    document.getElementById('inputText').value = sampleText;
    calculateGunningFog();
}

function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('inputText').value = e.target.result;
            calculateGunningFog();
        };
        reader.readAsText(file);
        document.getElementById('fileName').textContent = file.name;
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('gunningFogResult').textContent = 'Gunning-Fog Readability Score will be displayed here.';
    document.getElementById('fileName').textContent = 'No file chosen';
    updateCalculateButtonStatus();
}
