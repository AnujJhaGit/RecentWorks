var getScores = function(text) {

     
  var sampleLimit = 1000;
  var sentenceRegex = new RegExp('[.?!]\\s[^a-z]', 'g');

  var syllableRegex = new RegExp('[aiouy]+e*|e(?!d$|ly).|[td]ed|le$', 'g');

  var freBase = {
    base: 206.835,
    sentenceLength: 1.015,
    syllablesPerWord: 84.6,
    syllableThreshold: 3
  };

  var cache = {};

  var punctuation = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

  var legacyRound = function(number, precision) {
    var k = Math.pow(10, (precision || 0));
    return Math.floor((number * k) + 0.5 * Math.sign(number)) / k;
  };

  var charCount = function(text) {
    if (cache.charCount) return cache.charCount;
    if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
    text = text.replace(/\s/g, '');
    return cache.charCount = text.length;
  };

  var removePunctuation = function(text) {
    return text.split('').filter(function(c) {
      return punctuation.indexOf(c) === -1;
    }).join('');
  };

  var letterCount = function(text) {
    if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
    text = text.replace(/\s/g, '');
    return removePunctuation(text).length;
  };

  var lexiconCount = function(text, useCache, ignoreSample) {
    if (useCache && cache.lexiconCount) return cache.lexiconCount;
    if (ignoreSample !== true && sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
    text = removePunctuation(text);
    var lexicon = text.split(' ').length;
    return useCache ? cache.lexiconCount = lexicon : lexicon;
  };

  var getWords = function(text, useCache) {
    if (useCache && cache.getWords) return cache.getWords;
    if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
    text = text.toLowerCase();
    text = removePunctuation(text);
    var words = text.split(' ');
    return useCache ? cache.getWords = words : words;
  }

  var syllableCount = function(text, useCache) {
    if (useCache && cache.syllableCount) return cache.syllableCount;
    var count = 0;
    var syllables = getWords(text, useCache).reduce(function(a, c) {  
      return a + (c.match(syllableRegex) || [1]).length;
    }, 0);
    return useCache ? cache.syllableCount = syllables : syllables;
  };

  var polySyllableCount = function(text, useCache) {
    var count = 0;
    getWords(text, useCache).forEach(function(word) {
      var syllables = syllableCount(word);
      if (syllables >= 3) {
        count += 1;
      }
    });
    return count;
  };

  var sentenceCount = function(text, useCache) {
    if (useCache && cache.sentenceCount) return cache.sentenceCount;
    if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
    var ignoreCount = 0;
    var sentences = text.split(sentenceRegex);
    sentences.forEach(function(s) {
      if (lexiconCount(s, true, false) <= 2) { ignoreCount += 1; }
    });
    var count = Math.max(1, sentences.length - ignoreCount);
    return useCache ? cache.sentenceCount = count : count;
  };

  var avgSentenceLength = function(text) {
    var avg = lexiconCount(text, true) / sentenceCount(text, true);
    return legacyRound(avg, 2);
  };

  var avgSyllablesPerWord = function(text) {
    var avg = syllableCount(text, true) / lexiconCount(text, true);
    return legacyRound(avg, 2);
  };

  var avgCharactersPerWord = function(text) {
    var avg = charCount(text) / lexiconCount(text, true);
    return legacyRound(avg, 2);
  };

  var avgLettersPerWord = function(text) {
    var avg = letterCount(text, true) / lexiconCount(text, true);
    return legacyRound(avg, 2);
  };

  var avgSentencesPerWord = function(text) {
    var avg = sentenceCount(text, true) / lexiconCount(text, true);
    return legacyRound(avg, 2);
  };

  var fleschReadingEase = function(text) {
    var sentenceLength = avgSentenceLength(text);
    var syllablesPerWord = avgSyllablesPerWord(text);
    return legacyRound(
      freBase.base - 
      freBase.sentenceLength * sentenceLength - 
      freBase.syllablesPerWord * syllablesPerWord,
      2
    );
  };

  var fleschKincaidGrade = function(text) {
    var sentenceLength = avgSentenceLength(text);
    var syllablesPerWord = avgSyllablesPerWord(text);
    return legacyRound(
      0.39 * sentenceLength +
      11.8 * syllablesPerWord -
      15.59,
      2
    );
  };

  var smogIndex = function(text) {
    var sentences = sentenceCount(text, true);
    if (sentences >= 3) {
      var polySyllables = polySyllableCount(text, true);
      var smog = 1.043 * (Math.pow(polySyllables * (30 / sentences), 0.5)) + 3.1291;
      return legacyRound(smog, 2);
    }
    return 0.0;
  };

  var colemanLiauIndex = function(text) {
    var letters = legacyRound(avgLettersPerWord(text) * 100, 2);
    var sentences = legacyRound(avgSentencesPerWord(text) * 100, 2);
    var coleman = 0.0588 * letters - 0.296 * sentences - 15.8;
    return legacyRound(coleman, 2);
  };

  var automatedReadabilityIndex = function(text) {
    var chars = charCount(text);
    var words = lexiconCount(text, true);
    var sentences = sentenceCount(text, true);
    var a = chars / words;
    var b = words / sentences;
    var readability = (
      4.71 * legacyRound(a, 2) +
      0.5 * legacyRound(b, 2) -
      21.43
    );
    return legacyRound(readability, 2); 
  };

  var linsearWriteFormula = function(text) {
    var easyWord = 0;
    var difficultWord = 0;
    var roughTextFirst100 = text.split(' ').slice(0,100).join(' ');
    var plainTextListFirst100 = getWords(text, true).slice(0,100);
    plainTextListFirst100.forEach(function(word) {
      if (syllableCount(word) < 3) {
        easyWord += 1;
      } else {
        difficultWord += 1;
      }
    });
    var number = (easyWord + difficultWord * 3) / sentenceCount(roughTextFirst100);
    if (number <= 20) {
      number -= 2;
    }
    return legacyRound(number / 2, 2);
  };

  var rix = function(text) {
    var words = getWords(text, true);
    var longCount = words.filter(function(word) {
      return word.length > 6;
    }).length;
    var sentencesCount = sentenceCount(text, true);
    return legacyRound(longCount / sentencesCount, 2);
  };

  var readingTime = function(text) {
    var wordsPerSecond = 4.17;
    // To get full reading time, ignore cache and sample
    return legacyRound(lexiconCount(text, false, true) / wordsPerSecond, 2);
  };

  // Build textStandard
  var grade = [];
  var obj = {};
  (function() {

    // FRE
    var fre = obj.fleschReadingEase = fleschReadingEase(text);
    if (fre < 100 && fre >= 90) {
      grade.push(5);
    } else if (fre < 90 && fre >= 80) {
      grade.push(6);
    } else if (fre < 80 && fre >= 70) {
      grade.push(7);
    } else if (fre < 70 && fre >= 60) {
      grade.push(8);
      grade.push(9);
    } else if (fre < 60 && fre >= 50) {
      grade.push(10);
    } else if (fre < 50 && fre >= 40) {
      grade.push(11);
    } else if (fre < 40 && fre >= 30) {
      grade.push(12);
    } else {
      grade.push(13);
    }

    // FK
    var fk = obj.fleschKincaidGrade = fleschKincaidGrade(text);
    grade.push(Math.floor(fk));
    grade.push(Math.ceil(fk));

    // SMOG
    var smog = obj.smogIndex = smogIndex(text);
    grade.push(Math.floor(smog));
    grade.push(Math.ceil(smog));

    // CL
    var cl = obj.colemanLiauIndex = colemanLiauIndex(text);
    grade.push(Math.floor(cl));
    grade.push(Math.ceil(cl));

    // ARI
    var ari = obj.automatedReadabilityIndex = automatedReadabilityIndex(text);
    grade.push(Math.floor(ari));
    grade.push(Math.ceil(ari));

    // LWF
    var lwf = obj.linsearWriteFormula = linsearWriteFormula(text);
    grade.push(Math.floor(lwf));
    grade.push(Math.ceil(lwf));

    // RIX
    var rixScore = obj.rix = rix(text);
    if (rixScore >= 7.2) {
      grade.push(13);
    } else if (rixScore < 7.2 && rixScore >= 6.2) {
      grade.push(12);
    } else if (rixScore < 6.2 && rixScore >= 5.3) {
      grade.push(11);
    } else if (rixScore < 5.3 && rixScore >= 4.5) {
      grade.push(10);
    } else if (rixScore < 4.5 && rixScore >= 3.7) {
      grade.push(9);
    } else if (rixScore < 3.7 && rixScore >= 3.0) {
      grade.push(8);
    } else if (rixScore < 3.0 && rixScore >= 2.4) {
      grade.push(7);
    } else if (rixScore < 2.4 && rixScore >= 1.8) {
      grade.push(6);
    } else if (rixScore < 1.8 && rixScore >= 1.3) {
      grade.push(5);
    } else if (rixScore < 1.3 && rixScore >= 0.8) {
      grade.push(4);
    } else if (rixScore < 0.8 && rixScore >= 0.5) {
      grade.push(3);
    } else if (rixScore < 0.5 && rixScore >= 0.2) {
      grade.push(2);
    } else {
      grade.push(1);
    }

    // Find median grade
    grade = grade.sort(function(a, b) { return a - b; });
    var midPoint = Math.floor(grade.length / 2);
    var medianGrade = legacyRound(
      grade.length % 2 ? 
      grade[midPoint] : 
      (grade[midPoint-1] + grade[midPoint]) / 2.0
    );
    obj.medianGrade = medianGrade;

  })();

  obj.readingTime = readingTime(text);

  return obj;
};





let autoUpdate = true;
  function handleTextChange() {
    if (autoUpdate) {
      calculateLinsear();
    }
    const inputText = document.getElementById('inputText').value;
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = !inputText.trim();
  }
  function handleAutoUpdateChange() {
    autoUpdate = document.getElementById('autoUpdateCheckbox').checked;
    if (autoUpdate) {
      calculateLinsear();
    }
  }
  function calculateLinsear() {
    const text = document.getElementById('inputText').value;
    const linsearScore = calculateLinsearScore(text);
    document.getElementById('linsearWriteResult').innerText = `Linsear Score: ${linsearScore.toFixed(2)}`;
  }
  function loadSampleText() {
    document.getElementById('inputText').value = `Pride and Prejudice by Jane Austen
    Chapter 1
    
    It is a truth universally acknowledged, that a single man in
    possession of a good fortune, must be in want of a wife.
    
    However little known the feelings or views of such a man may be
    on his first entering a neighbourhood, this truth is so well
    fixed in the minds of the surrounding families, that he is
    considered the rightful property of some one or other of their
    daughters.
    
    “My dear Mr. Bennet,” said his lady to him one day, “have you
    heard that Netherfield Park is let at last?”
    
    Mr. Bennet replied that he had not.
    
    “But it is,” returned she; “for Mrs. Long has just been here, and
    she told me all about it.”
    
    Mr. Bennet made no answer.
    
    “Do you not want to know who has taken it?” cried his wife
    impatiently.
    
    “_You_ want to tell me, and I have no objection to hearing it.”
    
    This was invitation enough.
    
    “Why, my dear, you must know, Mrs. Long says that Netherfield is
    taken by a young man of large fortune from the north of England;
    that he came down on Monday in a chaise and four to see the
    place, and was so much delighted with it, that he agreed with Mr.
    Morris immediately; that he is to take possession before
    Michaelmas, and some of his servants are to be in the house by
    the end of next week.”
    
    “What is his name?”
    
    “Bingley.”
    
    “Is he married or single?”
    
    “Oh! Single, my dear, to be sure! A single man of large fortune;
    four or five thousand a year. What a fine thing for our girls!”
    
    “How so? How can it affect them?”
    
    “My dear Mr. Bennet,” replied his wife, “how can you be so
    tiresome! You must know that I am thinking of his marrying one of
    them.”
    
    “Is that his design in settling here?”
    
    “Design! Nonsense, how can you talk so! But it is very likely
    that he _may_ fall in love with one of them, and therefore you
    must visit him as soon as he comes.”
    
    “I see no occasion for that. You and the girls may go, or you may
    send them by themselves, which perhaps will be still better, for
    as you are as handsome as any of them, Mr. Bingley may like you
    the best of the party.”
    
    “My dear, you flatter me. I certainly _have_ had my share of
    beauty, but I do not pretend to be anything extraordinary now.
    When a woman has five grown-up daughters, she ought to give over
    thinking of her own beauty.”
    
    “In such cases, a woman has not often much beauty to think of.”
    
    “But, my dear, you must indeed go and see Mr. Bingley when he
    comes into the neighbourhood.”
    
    “It is more than I engage for, I assure you.”
    
    “But consider your daughters. Only think what an establishment it
    would be for one of them. Sir William and Lady Lucas are
    determined to go, merely on that account, for in general, you
    know, they visit no newcomers. Indeed you must go, for it will be
    impossible for _us_ to visit him if you do not.”
    
    “You are over-scrupulous, surely. I dare say Mr. Bingley will be
    very glad to see you; and I will send a few lines by you to
    assure him of my hearty consent to his marrying whichever he
    chooses of the girls; though I must throw in a good word for my
    little Lizzy.”
    
    “I desire you will do no such thing. Lizzy is not a bit better
    than the others; and I am sure she is not half so handsome as
    Jane, nor half so good-humoured as Lydia. But you are always
    giving _her_ the preference.”
    
    “They have none of them much to recommend them,” replied he;
    “they are all silly and ignorant like other girls; but Lizzy has
    something more of quickness than her sisters.”
    
    “Mr. Bennet, how can you abuse your own children in such a way?
    You take delight in vexing me. You have no compassion for my poor
    nerves.”
    
    “You mistake me, my dear. I have a high respect for your nerves.
    They are my old friends. I have heard you mention them with
    consideration these last twenty years at least.”
    
    “Ah, you do not know what I suffer.”
    
    “But I hope you will get over it, and live to see many young men
    of four thousand a year come into the neighbourhood.”
    
    “It will be no use to us, if twenty such should come, since you
    will not visit them.”
    
    “Depend upon it, my dear, that when there are twenty, I will
    visit them all.”
    
    Mr. Bennet was so odd a mixture of quick parts, sarcastic humour,
    reserve, and caprice, that the experience of three-and-twenty
    years had been insufficient to make his wife understand his
    character. _Her_ mind was less difficult to develop. She was a
    woman of mean understanding, little information, and uncertain
    temper. When she was discontented, she fancied herself nervous.
    The business of her life was to get her daughters married; its
    solace was visiting and news.
    `;

    calculateLinsear();
    handleTextChange();
  }
  function loadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileNameElement = document.getElementById('fileName');
    const file = fileInput.files[0];
    fileNameElement.innerText = file ? file.name : 'No file chosen';
  }
  function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('linsearWriteResult').innerText = 'Linsear Score will be displayed here.';
  }
  function calculateLinsearScore(text) {
    console.log(getScores(text))

      const linsearScore = getScores(text).linsearWriteFormula
      ;
return isNaN(linsearScore) ? -1 : linsearScore;
console.log(getScores(text))

}






