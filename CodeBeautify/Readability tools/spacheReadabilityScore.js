// Define the Spache Word List

const spacheWordList = [
  // A
  'a', 'able', 'about', 'above', 'across', 'act', 'add', 'afraid', 'after', 'afternoon', 'again', 'against', 'ago', 'air', 'airplane', 'alarm', 'all', 'almost', 'alone', 'along', 'already', 'also', 'always', 'am', 'among', 'an', 'and', 'angry', 'animal', 'another', 'answer', 'any', 'anyone', 'appear', 'apple', 'are', 'arm', 'around', 'arrow', 'as', 'ask', 'asleep', 'at', 'ate', 'attention', 'aunt', 'awake', 'away',
  
  // B
  'b', 'baby', 'back', 'bad', 'bag', 'ball', 'balloon', 'bang', 'bank', 'bark', 'barn', 'basket', 'be', 'bean', 'bear', 'beat', 'beautiful', 'became', 'because', 'become', 'bed', 'bee', 'been', 'before', 'began', 'begin', 'behind', 'believe', 'bell', 'belong', 'bend', 'bent', 'beside', 'best', 'better', 'between', 'big', 'bird', 'birthday', 'bit', 'bite', 'black', 'blanket', 'blew', 'block', 'blow', 'blue', 'board', 'boat', 'book', 'boot', 'born', 'borrow', 'both', 'bother', 'bottle', 'bottom', 'bought', 'bow', 'box', 'boy', 'branch', 'brave', 'bread', 'break', 'breakfast', 'breath', 'brick', 'bridge', 'bright', 'bring', 'broke', 'broken', 'brother', 'brought', 'brown', 'brush', 'build', 'bump', 'burn', 'bus', 'busy', 'but', 'butter', 'button', 'buy', 'by',

  // C
  'c', 'cabin', 'cage', 'cake', 'call', 'came', 'camp', 'can', 'candle', 'candy', 'can\'t', 'cap', 'captain', 'car', 'card', 'care', 'careful', 'carrot', 'carry', 'case', 'castle', 'cat', 'catch', 'cattle', 'caught', 'cause', 'cent', 'certain', 'chair', 'chance', 'change', 'chase', 'chicken', 'chief', 'child', 'children', 'church', 'circle', 'circus', 'city', 'clap', 'clean', 'clever', 'cliff', 'climb', 'clock', 'close', 'cloth', 'clothes', 'clown', 'coat', 'cold', 'color', 'come', 'comfortable', 'company', 'contest', 'continue', 'cook', 'cool', 'corner', 'could', 'count', 'country', 'course', 'cover', 'cow', 'crawl', 'cream', 'cry', 'cup', 'curtain', 'cut',

  // D
  'd', 'Dad', 'dance', 'danger', 'dangerous', 'dark', 'dash', 'daughter', 'day', 'dear', 'decide', 'deep', 'desk', 'did', 'didn\'t', 'die', 'different', 'dig', 'dinner', 'direction', 'disappear', 'disappoint', 'discover', 'distance', 'do', 'doctor', 'does', 'dog', 'dollar', 'done', 'don\'t', 'door', 'down', 'dragon', 'dream', 'dress', 'drink', 'drive', 'drop', 'drove', 'dry', 'duck', 'during', 'dust',

  // E
  'e', 'each', 'eager', 'ear', 'early', 'earn', 'earth', 'easy', 'eat', 'edge', 'egg', 'eight', 'eighteen', 'either', 'elephant', 'else', 'empty', 'end', 'enemy', 'enough', 'enter', 'even', 'ever', 'every', 'everything', 'exact', 'except', 'excite', 'exclaim', 'explain', 'eye',

  // F
  'face', 'fact', 'fair', 'fall', 'family', 'far', 'farm', 'farmer', 'farther', 'fast', 'fat', 'father', 'feather', 'feed', 'feel', 'feet', 'fell', 'fellow', 'felt', 'fence', 'few', 'field', 'fierce', 'fight', 'figure', 'fill', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'first', 'fish', 'five', 'flag', 'flash', 'flat', 'flew', 'floor', 'flower', 'fly', 'follow', 'food', 'for', 'forest', 'forget', 'forth', 'found', 'four', 'fourth', 'fox', 'fresh', 'friend', 'frighten', 'frog', 'from', 'front', 'fruit', 'full', 'fun', 'funny', 'fur',

  // G
  'g', 'game', 'garden', 'gasp', 'gate', 'gave', 'get', 'giant', 'gift', 'girl', 'give', 'glad', 'glass', 'go', 'goat', 'gone', 'good', 'got', 'grandfather', 'grandmother', 'grass', 'gray', 'great', 'green', 'grew', 'grin', 'ground', 'group', 'grow', 'growl', 'guess', 'gun',

  // H
  'h', 'had', 'hair', 'half', 'hall', 'hand', 'handle', 'hang', 'happen', 'happiness', 'happy', 'hard', 'harm', 'has', 'hat', 'hate', 'have', 'he', 'head', 'hear', 'heard', 'heavy', 'held', 'hello', 'help', 'hen', 'her', 'here', 'herself', 'he\'s', 'hid', 'hide', 'high', 'hill', 'him', 'himself', 'his', 'hit', 'hold', 'hole', 'holiday', 'home', 'honey', 'hop', 'horn', 'horse', 'hot', 'hour', 'house', 'how', 'howl', 'hum', 'hundred', 'hung', 'hungry', 'hunt', 'hurry', 'hurt', 'husband',

  // I
  'i', 'I', 'ice', 'idea', 'if', 'I\'ll', 'I\'m', 'imagine', 'important', 'in', 'inch', 'indeed', 'inside', 'instead', 'into', 'invite', 'is', 'it', 'it\'s', 'its',

  // J
  'j', 'jacket', 'jar', 'jet', 'job', 'join', 'joke', 'joy', 'jump', 'just',

  // K
  'k', 'keep', 'kept', 'key', 'kick', 'kill', 'kind', 'king', 'kitchen', 'kitten', 'knee', 'knew', 'knock', 'know',

  // L
  'l', 'ladder', 'lady', 'laid', 'lake', 'land', 'large', 'last', 'late', 'laugh', 'lay', 'lazy', 'lead', 'leap', 'learn', 'least', 'leave', 'left', 'leg', 'less', 'let', 'let\'s', 'letter', 'lick', 'lift', 'light', 'like', 'line', 'lion', 'list', 'listen', 'little', 'live', 'load', 'long', 'look', 'lost', 'lot', 'loud', 'love', 'low', 'luck', 'lump', 'lunch',

  // M
  'm', 'machine', 'made', 'magic', 'mail', 'make', 'man', 'many', 'march', 'mark', 'market', 'master', 'matter', 'may', 'maybe', 'me', 'mean', 'meant', 'meat', 'meet', 'melt', 'men', 'merry', 'met', 'middle', 'might', 'mile', 'milk', 'milkman', 'mind', 'mine', 'minute', 'miss', 'mistake', 'moment', 'money', 'monkey', 'month', 'more', 'morning', 'most', 'mother', 'mountain', 'mouse', 'mouth', 'move', 'much', 'mud', 'music', 'must', 'my', 'n', 'name', 'near', 'neck', 'need', 'needle', 'neighbor', 'neighborhood', 'nest', 'never', 'new', 'next', 'nibble', 'nice', 'night', 'nine', 'no', 'nod', 'noise', 'none', 'north', 'nose', 'not', 'note', 'nothing', 'notice', 'now', 'number',

  // N
  'n', 'name', 'near', 'neck', 'need', 'needle', 'neighbor', 'neighborhood', 'nest', 'never', 'new', 'next', 'nibble', 'nice', 'night', 'nine', 'no', 'nod', 'noise', 'none', 'north', 'nose', 'not', 'note', 'nothing', 'notice', 'now', 'number',

  // O
  'o', 'ocean', 'of', 'off', 'offer', 'often', 'oh', 'old', 'on', 'once', 'one', 'only', 'open', 'or', 'orange', 'order', 'other', 'our', 'out', 'outside', 'over', 'owl', 'own',

  // P
  'p', 'pack', 'paid', 'pail', 'paint', 'pair', 'palace', 'pan', 'paper', 'parade', 'parent', 'park', 'part', 'party', 'pass', 'past', 'pasture', 'path', 'paw', 'pay', 'peanut', 'peek', 'pen', 'penny', 'people', 'perfect', 'perhaps', 'person', 'pet', 'pick', 'picnic', 'picture', 'pie', 'piece', 'pig', 'pile', 'pin', 'place', 'plan', 'plant', 'play', 'pleasant', 'please', 'plenty', 'plow', 'picket', 'point', 'poke', 'pole', 'policeman', 'pond', 'poor', 'pop', 'postman', 'pot', 'potato', 'pound', 'pour', 'practice', 'prepare', 'present', 'pretend', 'pretty', 'princess', 'prize', 'probably', 'problem', 'promise', 'protect', 'proud', 'puff', 'pull', 'puppy', 'push', 'put',

  // Q
  'q', 'queen', 'queer', 'quick', 'quiet', 'quite',

  // R
  'r', 'rabbit', 'raccoon', 'race', 'radio', 'rag', 'rain', 'raise', 'ran', 'ranch', 'rang', 'reach', 'read', 'ready', 'real', 'red', 'refuse', 'remember', 'reply', 'rest', 'return', 'reward', 'rich', 'ride', 'right', 'ring', 'river', 'road', 'roar', 'rock', 'rode', 'roll', 'roof', 'room', 'rope', 'round', 'row', 'rub', 'rule', 'run', 'rush',

  's', 'sad', 'safe', 'said', 'sail', 'sale', 'salt', 'same', 'sand', 'sang', 'sat', 'save', 'saw', 'say', 'scare', 'school', 'scold', 'scratch', 'scream', 'sea', 'seat', 'second', 'secret', 'see', 'seed', 'seem', 'seen', 'sell', 'send', 'sent', 'seven', 'several', 'sew', 'shadow', 'shake', 'shall', 'shape', 'she', 'sheep', 'shell', 'shine', 'ship', 'shoe', 'shone', 'shook', 'shoot', 'shop', 'shore', 'short', 'shot', 'should', 'show', 'sick', 'side', 'sight', 'sign', 'signal', 'silent', 'silly', 'silver', 'since', 'sing', 'sister', 'sit', 'six', 'size', 'skip', 'sky', 'sled', 'sleep', 'slid', 'slide', 'slow', 'small', 'smart', 'smell', 'smile', 'smoke', 'snap', 'sniff', 'snow', 'so', 'soft', 'sold', 'some', 'something', 'sometimes', 'son', 'song', 'soon', 'sorry', 'sound', 'speak', 'special', 'spend', 'spill', 'splash', 'spoke', 'spot', 'spread', 'spring', 'squirrel', 'stand', 'star', 'start', 'station', 'stay', 'step', 'stick', 'still', 'stone', 'stood', 'stop', 'store', 'story', 'straight', 'strange', 'street', 'stretch', 'strike', 'strong', 'such', 'sudden', 'sugar', 'suit', 'summer', 'sun', 'supper', 'suppose', 'sure', 'surprise', 'swallow', 'sweet', 'swim', 'swing',

  // T
  't', 'table', 'tail', 'take', 'talk', 'tall', 'tap', 'taste', 'teach', 'teacher', 'team', 'tear', 'teeth', 'telephone', 'tell', 'ten', 'tent', 'than', 'thank', 'that', 'that\'s', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'thick', 'thin', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'three', 'threw', 'through', 'throw', 'tie', 'tiger', 'tight', 'time', 'tiny', 'tip', 'tire', 'to', 'today', 'toe', 'together', 'told', 'tomorrow', 'too', 'took', 'tooth', 'top', 'touch', 'toward', 'tower', 'town', 'toy', 'track', 'traffic', 'train', 'trap', 'tree', 'trick', 'trip', 'trot', 'truck', 'true', 'trunk', 'try', 'turkey', 'turn', 'turtle', 'twelve', 'twin', 'two',

  // U
  'u', 'ugly', 'uncle', 'under', 'unhappy', 'until', 'up', 'upon', 'upstairs', 'us', 'use', 'usual',

  // V
  'v', 'valley', 'vegetable', 'very', 'village', 'visit', 'voice',

  // W
  'w', 'wag', 'wagon', 'wait', 'wake', 'walk', 'want', 'war', 'warm', 'was', 'wash', 'waste', 'watch', 'water', 'wave', 'way', 'we', 'wear', 'weather', 'week', 'well', 'went', 'were', 'wet', 'what', 'wheel', 'when', 'where', 'which', 'while', 'whisper', 'whistle', 'white', 'who', 'whole', 'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wing', 'wink', 'winter', 'wire', 'wise', 'wish', 'with', 'without', 'woke', 'wolf', 'woman', 'women', 'wonder', 'won\'t', 'wood', 'word', 'wore', 'work', 'world', 'worm', 'worry', 'worth', 'would', 'wrong',

  // X - Y
  'x', 'y', 'yard', 'year', 'yell', 'yellow', 'yes', 'yet', 'you', 'young', 'your',

  // Z
  'z', 'zoo',
]

  
  function calculateSpache() {
    
    const inputText = document.getElementById('inputText').value;
  
    if (inputText.trim() === '') {
        alert('Please enter text to calculate the Spache Score.');
        document.getElementById('spacheResult').innerHTML = `Spache Score will be displayed here.`;
        return;
    }
        const sentences = inputText.split(/[.!?]+/);
    
    const totalSentences = Math.max(1, sentences.length - 1);
    console.log(sentences);
    console.log(totalSentences);
    const words = inputText.split(/\s+/);
    const totalWords = words.length;
    console.log(words);
    const asl = totalWords / totalSentences;
      const difficultWords = words.filter(word => !spacheWordList.includes(word.toLowerCase()));
    console.log(difficultWords);
    const pdw = (difficultWords.length / totalWords) * 100;
  
    const srl = (0.141 * asl) + (0.086 * pdw) + 0.839;
  
    
    const resultElement = document.getElementById('spacheResult');
    const gradeLevel = calculateGradeLevel(srl);


    resultElement.innerHTML = `Spache Score: ${srl.toFixed(2)}<br>Reading Difficulty: ${getReadingDifficulty(gradeLevel)}<br>Grade Level: ${gradeLevel}<br>Age Range: ${getAgeRange(gradeLevel)}`;
}


function calculateGradeLevel(srl) {
    return Math.max(1, Math.round(srl * 10) / 10); 
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
    const sampleText = "Why This Matters: Leaders from all over the world gathered online for the 30th Conference of the Parties (COP30) to talk about how to fight climate change. They made a big agreement to change how we deal with global warming and make the Earth healthier.\
Who Was There: People from almost every country came to this meeting. They all had one big worry: climate change is a big problem, and we need to do something about it quickly.\
\
What They Agreed On:\
1. Less Pollution: Countries promised to make less pollution, which causes climate change. This time, they're promising even bigger cuts. The goal is to stop the Earth from getting more than 2 degrees Celsius hotter than it was before factories and cars started making a lot of pollution. Ideally, we'd like to keep it to just 1.5 degrees hotter.\
\
2. Helping Others: Rich countries said they will give more money to help poor countries deal with climate change. This money will help them get ready for climate changes and use cleaner ways to do things.\
\
3. Paying for Pollution: The deal says countries should put a price on pollution. This means if a country makes a lot of pollution, they should have to pay for it. This makes countries want to pollute less.\
\
4. Clean Energy: The agreement talks a lot about using cleaner energy sources like wind and sun power. It also says we should stop giving money to support dirty energy like coal, oil, and gas.\
\
5. Protecting Nature: The deal says we should take care of our natural world too. It's not just about the climate; it's also about saving our forests and the creatures that live there.\
\
6. Getting Ready: With climate change, we need to be ready for things like rising sea levels and bad weather. The agreement says we should help communities that are most at risk.\
\
7. Money for Climate Projects: The deal also reminds us to give enough money for the Green Climate Fund. This fund helps pay for climate projects in poor countries.\
\
What People Think: Some folks say the goals might not be enough to stop the worst parts of climate change. But it's a good start, and now countries need to act fast to keep their promises.\
\
What the UN Leader Says: The United Nations Secretary-General [Secretary-General's Name] liked the deal and said it shows that countries can work together. But now, it's time to stop talking and start doing things to make our world safe and healthy for everyone.\
\
What Comes Next: Doing this deal will be hard, and countries need to work together. But it's a hopeful moment in the fight against climate change, and it gives us a chance for a better and cleaner future.";
    document.getElementById('inputText').value = sampleText;
    calculateSpache();
    enableCalculateButton();
    
}

  function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileNameElement = document.getElementById('fileName');
    
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      
      reader.onload = function (e) {
        document.getElementById('inputText').value = e.target.result;
        calculateSpache();
      };
  
      reader.readAsText(file);
      fileNameElement.textContent = file.name;
    }
  }
  function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('spacheResult').textContent = 'Spache Score will be displayed here.';
    document.getElementById('autoUpdateCheckbox').checked = true;
    document.getElementById('calculateButton').disabled = true;
    document.getElementById('fileName').textContent = 'No file chosen';
  }
  document.addEventListener('DOMContentLoaded', function () {
    const autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
    autoUpdateCheckbox.checked = true;
  });
  
  function enableCalculateButton() {
    document.getElementById('calculateButton').removeAttribute('disabled');
  }

  

  function handleTextChange() {
    var autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
  
    if (autoUpdateCheckbox.checked) {
      calculateSpache();
    }
  }
  
  document.getElementById('inputText').addEventListener('input', enableCalculateButton);