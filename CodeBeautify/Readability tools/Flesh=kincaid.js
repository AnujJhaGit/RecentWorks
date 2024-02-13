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
  
    var fleschkincaidGrade = function(text) {
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
    var Ease = [];
    var obj = {};
    (function() {
  
      // FRE
      var fre = obj.fleschReadingEase = fleschReadingEase(text);
      if (fre < 100 && fre >= 90) {
        Ease.push(5);
      } else if (fre < 90 && fre >= 80) {
        Ease.push(6);
      } else if (fre < 80 && fre >= 70) {
        Ease.push(7);
      } else if (fre < 70 && fre >= 60) {
        Ease.push(8);
        Ease.push(9);
      } else if (fre < 60 && fre >= 50) {
        Ease.push(10);
      } else if (fre < 50 && fre >= 40) {
        Ease.push(11);
      } else if (fre < 40 && fre >= 30) {
        Ease.push(12);
      } else {
        Ease.push(13);
      }
  
      // FK
      var fk = obj.fleschkincaidGrade = fleschkincaidGrade(text);
      Ease.push(Math.floor(fk));
      Ease.push(Math.ceil(fk));
  
      // SMOG
      var smog = obj.smogIndex = smogIndex(text);
      Ease.push(Math.floor(smog));
      Ease.push(Math.ceil(smog));
  
      // CL
      var cl = obj.colemanLiauIndex = colemanLiauIndex(text);
      Ease.push(Math.floor(cl));
      Ease.push(Math.ceil(cl));
  
      // ARI
      var ari = obj.automatedReadabilityIndex = automatedReadabilityIndex(text);
      Ease.push(Math.floor(ari));
      Ease.push(Math.ceil(ari));
  
      // LWF
      var lwf = obj.linsearWriteFormula = linsearWriteFormula(text);
      Ease.push(Math.floor(lwf));
      Ease.push(Math.ceil(lwf));
  
      // RIX
      var rixScore = obj.rix = rix(text);
      if (rixScore >= 7.2) {
        Ease.push(13);
      } else if (rixScore < 7.2 && rixScore >= 6.2) {
        Ease.push(12);
      } else if (rixScore < 6.2 && rixScore >= 5.3) {
        Ease.push(11);
      } else if (rixScore < 5.3 && rixScore >= 4.5) {
        Ease.push(10);
      } else if (rixScore < 4.5 && rixScore >= 3.7) {
        Ease.push(9);
      } else if (rixScore < 3.7 && rixScore >= 3.0) {
        Ease.push(8);
      } else if (rixScore < 3.0 && rixScore >= 2.4) {
        Ease.push(7);
      } else if (rixScore < 2.4 && rixScore >= 1.8) {
        Ease.push(6);
      } else if (rixScore < 1.8 && rixScore >= 1.3) {
        Ease.push(5);
      } else if (rixScore < 1.3 && rixScore >= 0.8) {
        Ease.push(4);
      } else if (rixScore < 0.8 && rixScore >= 0.5) {
        Ease.push(3);
      } else if (rixScore < 0.5 && rixScore >= 0.2) {
        Ease.push(2);
      } else {
        Ease.push(1);
      }
  
      // Find median Ease
      Ease = Ease.sort(function(a, b) { return a - b; });
      var midPoint = Math.floor(Ease.length / 2);
      var medianEase = legacyRound(
        Ease.length % 2 ? 
        Ease[midPoint] : 
        (Ease[midPoint-1] + Ease[midPoint]) / 2.0
      );
      obj.medianEase = medianEase;
  
    })();
  
    obj.readingTime = readingTime(text);
  
    return obj;
  };


  function calculateFleschkincaidGrade() {
    const text = document.getElementById('inputText').value;
    const { fleschReadingEase, fleschkincaidGrade } = getScores(text);
    const gradeLevel = getGradeLevel(fleschReadingEase)
    const wordCount = countWords(text);
    var numberOfSentences = countSentences(text);
    const avgWordsPerSentence = (wordCount/numberOfSentences).toFixed(2);
    document.getElementById('fleschKincaidResult').innerHTML = `
    <strong>Flesch Kincaid Ease:</strong> ${fleschReadingEase.toFixed(2)}<br>
    <strong>Flesch Kincaid Grade:</strong> ${fleschkincaidGrade.toFixed(2)}<br>
    <strong>Grade Level:</strong> ${gradeLevel}<br>
    <strong>Words:</strong> ${wordCount}<br>
    <strong>Sentences:</strong> ${numberOfSentences}<br>
    <strong>Average Number of Words Per Sentence:</strong> ${avgWordsPerSentence}
`;

    
console.log("Number of sentences:", numberOfSentences);
}
const countSentences = text => {
  return text.split(/[.?!]/g).filter(Boolean).length;
};
function countWords(str) {
  var matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}


function calculateFleschkincaidGradeScore(text) {
    const { fleschReadingEase } = getScores(text);
    return fleschReadingEase;
}

function getGradeLevel(score) {
  if (score >= 90 && score <= 100) {
      return "5th grade";
  } else if (score >= 80 && score < 90) {
      return "6th grade";
  } else if (score >= 70 && score < 80) {
      return "7th grade";
  } else if (score >= 60 && score < 70) {
      return "8th and 9th grade";
  } else if (score >= 50 && score < 60) {
      return "10th to 12th grade (high school)";
  } else if (score >= 30 && score < 50) {
      return "College";
  } else if (score >= 0 && score < 30) {
      return "College graduate";
  } else {
      return "Invalid score";
  }
}



  document.getElementById('calculateButton').addEventListener('click',calculateFleschkincaidGrade);

  let autoUpdate = document.getElementById('autoUpdateCheckbox');

  function handleTextChange() {
    const inputText = document.getElementById('inputText').value;
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.disabled = !inputText.trim();
    if (autoUpdate.checked) {
      calculateFleschkincaidGrade(); // Fixed function name
    }
  }
  
  function handleAutoUpdateChange() {
    if (autoUpdate.checked) {
      calculateFleschkincaidGrade(); // Fixed function name
    }
  }

  function loadSampleText() {
    document.getElementById('inputText').value = "Pride and Prejudice by Jane Austen.\nChapter 1.\n\nIt is a truth universally acknowledged, ...";
    calculateFleschkincaidGrade(); // Fixed function name
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
    document.getElementById('fleschKincaidResult').innerText = 'Flesch Kincaid Ease Score/Grade will be displayed here.';
  }

  console.log(getScores("Anuj jha"));