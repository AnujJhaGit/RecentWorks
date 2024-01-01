function findHedgeWords() {
    const inputText = document.getElementById('inputText').value;
    const hedgeWordsTableBody = document.getElementById('hedgeWordsTableBody');

    // Hedge words list
    // Hedge words list
    const hedgeWordsList = ["largely", "generally", "often", "rarely", "sometimes", "frequently", "occasionally", "seldom",
    "usually", "most", "several", "some", "almost", "practically", "apparently", "virtually", "basically",
    "approximately", "roughly", "somewhat", "somehow", "partially", "actually", "like", "something",
    "someone", "somebody", "somewhere", "think", "thinks", "thought", "believe", "believed", "believes",
    "consider", "considers", "considered", "assume", "assumes", "assumed", "understand", "understands",
    "understood", "find", "found", "finds", "appear", "appears", "appeared", "seem", "seems", "seemed",
    "suppose", "supposes", "supposed", "guess", "guesses", "guessed", "estimate", "estimates", "estimated",
    "speculate", "speculates", "speculated", "suggest", "suggests", "suggested", "may", "could", "should",
    "might", "surely", "probably", "likely", "maybe", "perhaps", "unsure", "probable", "unlikely", "possibly",
    "possible", "read", "say", "says", "looks like", "look like", "don't know", "necessarily", "kind of",
    "much", "bunch", "couple", "few", "little", "really", "and all that", "and so forth", "et cetera",
    "in my mind", "in my opinion", "their impression", "my impression", "in my understanding", "my thinking is",
    "my understanding is", "in my view", "if I'm understanding you correctly", "something or other", "so far",
    "at least", "english-language-skills", "about", "around", "can", "effectively", "evidently", "fairly",
    "hopefully", "in general", "mainly", "more or less", "mostly", "overall", "presumably", "Such as",
    "pretty strong", "pretty weak", "pretty", "quite clearly", "quite", "rather", "sort of", "supposedly",
    "uefap", "tend", "appear to be", "doubt", "be sure", "indicate", "will", "must", "would", "certainly",
    "definitely", "clearly", "conceivably", "certain", "definite", "clear", "assumption", "possibility",
    "probability", "Others", "many", "almost never", "improbable", "always", "never", "rare", "consistent with",
    "not", "doubtful", "suggestive", "diagnostic", "inconclusive", "apparent", "alleged", "allege", "a bit",
    "presumable"
];

    // Initialize an object to store the count of each hedge word
    const countMap = {};

    // Iterate through the hedge words list
    hedgeWordsList.forEach(hedgeWord => {
        // Use a regular expression to find all occurrences of the hedge word in the input text
        const regex = new RegExp(`\\b${hedgeWord}\\b`, 'gi');
        const matches = inputText.match(regex);

        // If matches are found, update the count in the countMap
        if (matches) {
            countMap[hedgeWord] = matches.length;
        } else {
            countMap[hedgeWord] = 0; // Set count to 0 if no matches are found
        }
    });

    // Filter out hedge words with zero counts
    const filteredCountMap = Object.fromEntries(
        Object.entries(countMap).filter(([hedgeWord, count]) => count > 0)
    );

    // Clear existing rows
    hedgeWordsTableBody.innerHTML = '';

    // Append new rows to the table
    for (const hedgeWord in filteredCountMap) {
        const count = filteredCountMap[hedgeWord];
        const row = `<tr><td>${hedgeWord}</td><td>${count}</td></tr>`;
        hedgeWordsTableBody.innerHTML += row;
    }
}





    // Other functions for handling UI interactions go here

    function handleTextChange() {
        const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
        const findHedgeWordsButton = document.getElementById('findHedgeWordsButton');
        if (autoUpdateCheckbox.checked) {
            findHedgeWords();
        } else {
            findHedgeWordsButton.disabled = false;
        }
    }

    function handleAutoUpdateChange() {
        const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
        const findHedgeWordsButton = document.getElementById('findHedgeWordsButton');
        if (autoUpdateCheckbox.checked) {
            findHedgeWordsButton.disabled = true;
            findHedgeWords();
        } else {
            findHedgeWordsButton.disabled = false;
        }
    }

    function loadSampleText() {
        document.getElementById('inputText').value = "This is some sample text with hedge words like 'probably' and 'maybe'.";
        findHedgeWords();
    }

    function loadFile() {
        const fileInput = document.getElementById('fileInput');
        const fileNameElement = document.getElementById('fileName');
        const file = fileInput.files[0];

        if (file) {
            fileNameElement.textContent = file.name;

            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('inputText').value = e.target.result;
                findHedgeWords();
            };

            reader.readAsText(file);
        } else {
            fileNameElement.textContent = 'No file chosen';
        }
    }

    function clearText() {
        document.getElementById('inputText').value = '';
        document.getElementById('hedgeWordsTableBody').innerHTML = '';
    }
