const frySightWords = [
    // 1st 100 Fry Sight Words
    'a', 'about', 'all', 'an', 'and', 'are', 'as', 'at', 'be', 'been', 'but', 'by', 'called', 'can', 'come',
    'could', 'day', 'did', 'do', 'down', 'each', 'find', 'first', 'for', 'from', 'get', 'go', 'had', 'has',
    'have', 'he', 'her', 'him', 'his', 'how', 'I', 'if', 'in', 'into', 'is', 'it', 'like', 'long', 'look', 'made',
    'make', 'many', 'may', 'more', 'my', 'no', 'not', 'now', 'number', 'of', 'oil', 'on', 'one', 'or', 'other',
    'out', 'part', 'people', 'said', 'see', 'she', 'sit', 'so', 'some', 'than', 'that', 'the', 'their', 'them',
    'then', 'there', 'these', 'they', 'this', 'time', 'to', 'two', 'up', 'use', 'was', 'water', 'way', 'we',
    'were', 'what', 'when', 'which', 'who', 'will', 'with', 'words', 'would', 'write', 'you', 'your',

    // 2nd 100 Fry Sight Words
    'after', 'again', 'air', 'also', 'America', 'animal', 'another', 'answer', 'any', 'around', 'ask',
    'away', 'back', 'because', 'before', 'big', 'boy', 'came', 'change', 'different', 'does', 'end', 'even',
    'follow', 'form', 'found', 'give', 'good', 'great', 'hand', 'help', 'here', 'home', 'house', 'just',
    'kind', 'know', 'land', 'large', 'learn', 'letter', 'line', 'little', 'live', 'man', 'me', 'means', 'men',
    'most', 'mother', 'move', 'much', 'must', 'name', 'need', 'new', 'off', 'old', 'only', 'our', 'over',
    'page', 'picture', 'place', 'play', 'point', 'put', 'read', 'right', 'same', 'say', 'sentence', 'set',
    'should', 'show', 'small', 'sound', 'spell', 'still', 'study', 'such', 'take', 'tell', 'things',
    'think', 'three', 'through', 'too', 'try', 'turn', 'us', 'very', 'want', 'well', 'went', 'where', 'why',
    'work', 'world', 'years',

    // 3rd 100 Fry Sight Words
    'above', 'add', 'almost', 'along', 'always', 'began', 'begin', 'being', 'below', 'between', 'book',
    'both', 'car', 'carry', 'children', 'city', 'close', 'country', 'cut', 'don’t', 'earth', 'eat',
    'enough', 'every', 'example', 'eyes', 'face', 'family', 'far', 'father', 'feet', 'few', 'food', 'four',
    'girl', 'got', 'group', 'grow', 'hard', 'head', 'hear', 'high', 'idea', 'important', 'Indian', 'it’s',
    'keep', 'last', 'late', 'leave', 'left', 'let', 'life', 'light', 'list', 'might', 'mile', 'miss',
    'mountains', 'near', 'never', 'next', 'night', 'often', 'once', 'open', 'own', 'paper', 'plant', 'real',
    'river', 'run', 'saw', 'school', 'sea', 'second', 'seem', 'side', 'something', 'sometimes', 'song',
    'soon', 'start', 'state', 'stop', 'story', 'talk', 'those', 'thought', 'together', 'took', 'tree',
    'under', 'until', 'walk', 'watch', 'while', 'white', 'without', 'young',

    // 4th 100 Fry Sight Words
    'across', 'against', 'area', 'become', 'best', 'better', 'birds', 'black', 'body', 'certain', 'cold',
    'color', 'complete', 'covered', 'cried', 'didn’t', 'dog', 'door', 'draw', 'during', 'early', 'easy',
    'ever', 'fall', 'farm', 'fast', 'field', 'figure', 'fire', 'fish', 'five', 'friends', 'ground',
    'happened', 'heard', 'himself', 'hold', 'horse', 'hours', 'however', 'hundred', 'I’ll', 'king',
    'knew', 'listen', 'low', 'map', 'mark', 'measure', 'money', 'morning', 'music', 'north', 'notice',
    'numeral', 'order', 'passed', 'pattern', 'piece', 'plan', 'problem', 'products', 'pulled',
    'questions', 'reached', 'red', 'remember', 'rock', 'room', 'seen', 'several', 'ship', 'short',
    'since', 'sing', 'slowly', 'south', 'space', 'stand', 'step', 'sun', 'sure', 'table', 'today', 'told',
    'top', 'toward', 'town', 'travel', 'true', 'unit', 'upon', 'usually', 'voice', 'vowel', 'war', 'waves',
    'whole', 'wind', 'wood',

    // 5th 100 Fry Sight Words
    'able', 'ago', 'am', 'among', 'ball', 'base', 'became', 'behind', 'boat', 'box', 'bring', 'brought',
    'building', 'built', 'cannot', 'carefully', 'check', 'circle', 'class', 'clear', 'common',
    'contain', 'correct', 'course', 'dark', 'decided', 'deep', 'done', 'dry', 'English', 'equation',
    'explain', 'fact', 'feel', 'filled', 'finally', 'fine', 'fly', 'force', 'front', 'full', 'game', 'gave',
    'government', 'green', 'half', 'heat', 'heavy', 'hot', 'inches', 'include', 'inside', 'island',
    'known', 'language', 'less', 'machine', 'material', 'minutes', 'note', 'nothing', 'noun', 'object',
    'ocean', 'oh', 'pair', 'person', 'plane', 'power', 'produce', 'quickly', 'ran', 'rest', 'road', 'round',
    'rule', 'scientists', 'shape', 'shown', 'six', 'size', 'special', 'stars', 'stay', 'stood', 'street',
    'strong', 'surface', 'system', 'ten', 'though', 'thousands', 'understand', 'verb', 'wait', 'warm',
    'week', 'wheels', 'yes', 'yet',

    // 6th 100 Fry Sight Words
    'anything', 'arms', 'beautiful', 'believe', 'beside', 'bill', 'blue', 'brother', 'can’t', 'cause',
    'cells', 'center', 'clothes', 'dance', 'describe', 'developed', 'difference', 'direction',
    'discovered', 'distance', 'divided', 'drive', 'drop', 'edge', 'eggs', 'energy', 'Europe',
    'exercise', 'farmers', 'felt', 'finished', 'flowers', 'forest', 'general', 'gone', 'grass', 'happy',
    'heart', 'held', 'instruments', 'interest', 'job', 'kept', 'lay', 'legs', 'length', 'love', 'main',
    'matter', 'meet', 'members', 'million', 'mind', 'months', 'moon', 'paint', 'paragraph', 'past',
    'perhaps', 'picked', 'present', 'probably', 'race', 'rain', 'raised', 'ready', 'reason', 'record',
    'region', 'represent', 'return', 'root', 'sat', 'shall', 'sign', 'simple', 'site', 'sky', 'soft',
    'square', 'store', 'subject', 'suddenly', 'sum', 'summer', 'syllables', 'teacher', 'test', 'third',
    'train', 'wall', 'weather', 'west', 'whether', 'wide', 'wild', 'window', 'winter', 'wish', 'written',

    // 7th 100 Fry Sight Words
    'act', 'Africa', 'age', 'already', 'although', 'amount', 'angle', 'appear', 'baby', 'bear', 'beat',
    'bed', 'bottom', 'bright', 'broken', 'build', 'buy', 'care', 'case', 'cat', 'century', 'consonant',
    'copy', 'couldn’t', 'count', 'cross', 'dictionary', 'died', 'dress', 'either', 'everyone',
    'everything', 'exactly', 'factors', 'fight', 'fingers', 'floor', 'fraction', 'free', 'French',
    'gold', 'hair', 'hill', 'hole', 'hope', 'ice', 'instead', 'iron', 'jumped', 'killed', 'lake', 'laughed',
    'lead', 'let’s', 'lot', 'melody', 'metal', 'method', 'middle', 'milk', 'moment', 'nation', 'natural',
    'outside', 'per', 'phrase', 'poor', 'possible', 'pounds', 'pushed', 'quiet', 'quite', 'remain',
    'result', 'ride', 'rolled', 'sail', 'scale', 'section', 'sleep', 'smiled', 'snow', 'soil', 'solve',
    'someone', 'son', 'speak', 'speed', 'spring', 'stone', 'surprise', 'tall', 'temperature',
    'themselves', 'tiny', 'trip', 'type', 'village', 'within', 'wonder',

    // 8th 100 Fry Sight Words
    'alone', 'art', 'bad', 'bank', 'bit', 'break', 'brown', 'burning', 'business', 'captain', 'catch',
    'caught', 'cents', 'child', 'choose', 'clean', 'climbed', 'cloud', 'coast', 'continued', 'control',
    'cool', 'cost', 'decimal', 'desert', 'design', 'direct', 'drawing', 'ears', 'east', 'else', 'engine',
    'England', 'equal', 'experiment', 'express', 'feeling', 'fell', 'flow', 'foot', 'garden', 'gas',
    'glass', 'God', 'grew', 'history', 'human', 'hunting', 'increase', 'information', 'itself',
    'joined', 'key', 'lady', 'law', 'least', 'lost', 'maybe', 'mouth', 'party', 'pay', 'period', 'plains',
    'please', 'practice', 'president', 'received', 'report', 'ring', 'rise', 'row', 'save', 'seeds',
    'sent', 'separate', 'serve', 'shouted', 'single', 'skin', 'statement', 'stick', 'straight',
    'strange', 'students', 'suppose', 'symbols', 'team', 'touch', 'trouble', 'uncle', 'valley', 'visit',
    'wear', 'whose', 'wire', 'woman', 'wrote', 'yard', 'you’re', 'yourself',

    // 9th 100 Fry Sight Words
    'addition', 'army', 'bell', 'belong', 'block', 'blood', 'blow', 'board', 'bones', 'branches',
    'cattle', 'chief', 'compare', 'compound', 'consider', 'cook', 'corner', 'crops', 'crowd', 'current',
    'doctor', 'dollars', 'eight', 'electric', 'elements', 'enjoy', 'entered', 'except', 'exciting',
    'expect', 'famous', 'fit', 'flat', 'fruit', 'fun', 'guess', 'hat', 'hit', 'indicate', 'industry',
    'insects', 'interesting', 'Japanese', 'lie', 'lifted', 'loud', 'major', 'mall', 'meat', 'mine',
    'modern', 'movement', 'necessary', 'observe', 'park', 'particular', 'planets', 'poem', 'pole',
    'position', 'process', 'property', 'provide', 'rather', 'rhythm', 'rich', 'safe', 'sand', 'science',
    'sell', 'send', 'sense', 'seven', 'sharp', 'shoulder', 'sight', 'silent', 'soldiers', 'spot',
    'spread', 'stream', 'string', 'suggested', 'supply', 'swim', 'terms', 'thick', 'thin', 'thus', 'tied',
    'tone', 'trade', 'tube', 'value', 'wash', 'wasn’t', 'weight', 'wife', 'wings', 'won’t',

// 10th 100 Fry Sight Words
'action', 'actually', 'adjective', 'afraid', 'agreed', 'ahead', 'allow', 'apple', 'arrived', 'born',
'bought', 'British', 'capital', 'chance', 'chart', 'church', 'column', 'company', 'conditions',
'corn', 'cotton', 'cows', 'create', 'dead', 'deal', 'death', 'details', 'determine', 'difficult',
'division', 'doesn’t', 'effect', 'entire', 'especially', 'evening', 'experience', 'factories',
'fair', 'fear', 'fig', 'forward', 'France', 'fresh', 'Greek', 'gun', 'hoe', 'huge', 'isn’t', 'led',
'level', 'located', 'march', 'match', 'molecules', 'northern', 'nose', 'office', 'opposite',
'oxygen', 'plural', 'prepared', 'pretty', 'printed', 'radio', 'repeated', 'rope', 'rose', 'score',
'seat', 'settled', 'shoes', 'shop', 'similar', 'sir', 'sister', 'smell', 'solution', 'southern',
'steel', 'stretched', 'substances', 'suffix', 'sugar', 'tools', 'total', 'track', 'triangle',
'truck', 'underline', 'various', 'view', 'Washington', 'we’ll', 'western', 'win', 'women',
'workers', 'wouldn’t', 'wrong', 'yellow'
];

console.log(frySightWords);
function handleTextChange() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');

    if (autoUpdateCheckbox.checked) {
        count();
    }

}

function count(){
    const inputText = document.getElementById('inputText').value;
        const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];

        const wordCount = {};
        words.forEach(word => {
            if (frySightWords.includes(word)) {
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
        });

        updateWordCountTable(wordCount);
}

function updateWordCountTable(wordCount) {
    const tableBody = document.getElementById('wordCountTableBody');
    tableBody.innerHTML = '';

    for (const word in wordCount) {
        const count = wordCount[word];

        const row = document.createElement('tr');
        const wordCell = document.createElement('td');
        const countCell = document.createElement('td');

        wordCell.textContent = word;
        countCell.textContent = count;

        row.appendChild(wordCell);
        row.appendChild(countCell);

        tableBody.appendChild(row);
    }
}

function handleAutoUpdateChange() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.disabled = autoUpdateCheckbox.checked;

    if (autoUpdateCheckbox.checked) {
        
        handleTextChange();
    }
}

function calculateWordCount() {
    count();
    handleTextChange();
}

function updateAutoUpdate() {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
    handleAutoUpdateChange();
}

function loadSampleText() {
    const sampleText = "Sample text with Fry Sight Words.";
    document.getElementById('inputText').value = sampleText;
    handleTextChange();
    calculateWordCount();
}

function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById('inputText').value = e.target.result;
        handleTextChange();
    };

    const file = fileInput.files[0];
    if (file) {
        fileName.textContent = file.name;
        reader.readAsText(file);
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    handleTextChange();
}

document.getElementById('calculateButton').addEventListener('click', calculateWordCount);

document.getElementById('autoUpdateCheckbox').addEventListener('click', updateAutoUpdate);