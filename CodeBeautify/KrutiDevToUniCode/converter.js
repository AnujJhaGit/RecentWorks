// Get DOM elements
const krutiDevInput = document.getElementById('krutiDevInput');
const unicodeOutput = document.getElementById('unicodeOutput');
const convertButton = document.getElementById('convertButton');
const sampleButton = document.getElementById('sampleButton');
const resetButton = document.getElementById('resetButton');
const copyButton = document.getElementById('copyButton');
const autoCheckbox = document.getElementById('autoCheckbox');

var kruti_array = new Array("Ã±","Q+Z","sas","aa",")Z","ZZ","â€˜","â€™","â€œ","â€","Ã¥",  "Æ’",  "â€ž",   "â€¦",   "â€ ",   "â€¡",   "Ë†",   "â€°",   "Å ",   "â€¹", "Â¶+",   "d+", "[+k","[+", "x+",  "T+",  "t+", "M+", "<+", "Q+", ";+", "j+", "u+","Ã™k", "Ã™", "Ã¤", "â€“", "â€”","Ã©","â„¢","=kk","f=k",  "Ã ",   "Ã¡",    "Ã¢",   "Ã£",   "Âºz",  "Âº",   "Ã­", "{k", "{", "=",  "Â«", "NÃ®",   "VÃ®",    "BÃ®",   "MÃ®",   "<Ã®", "|", "K", "}","J",   "VÂª",   "MÂª",  "<ÂªÂª",  "NÂª",   "Ã˜",  "Ã", "nzZ",  "Ã¦", "Ã§", "Ã", "xz", "#", ":", "vâ€š","vks",  "vkS",  "vk",    "v",  "bÂ±", "Ãƒ",  "bZ",  "b",  "m",  "Ã…",  ",s",  ",",   "_","Ã´",  "d", "Dk", "D", "[k", "[", "x","Xk", "X", "Ã„", "?k", "?",   "Â³", "pkS",  "p", "Pk", "P",  "N",  "t", "Tk", "T",  ">", "Ã·", "Â¥","Ãª",  "Ã«",   "V",  "B",   "Ã¬",   "Ã¯", "M+", "<+", "M",  "<", ".k", ".", "r",  "Rk", "R",   "Fk", "F",  ")", "n", "/k", "Ã¨k",  "/", "Ã‹", "Ã¨", "u", "Uk", "U",   "i",  "Ik", "I",   "Q",    "Â¶",  "c", "Ck",  "C",  "Hk",  "H", "e", "Ek",  "E", ";",  "Â¸",   "j",    "y", "Yk",  "Y",  "G",  "o", "Ok", "O", "'k", "'",   "\"k",  "\"",  "l", "Lk",  "L",   "g",  "Ãˆ", "z", "ÃŒ", "Ã", "ÃŽ",  "Ã",  "Ã‘",  "Ã’",  "Ã“",  "Ã”",   "Ã–",  "Ã˜",  "Ã™","Ãœk", "Ãœ","â€š",    "ks",   "kS",   "k",  "h",    "q",   "w",   "`",    "s",    "S", "a",    "Â¡",    "%",     "W",  "â€¢", "Â·", "âˆ™", "Â·", "~j",  "~", "\\","+"," à¤ƒ","^", "*",  "Ãž", "ÃŸ", "(", "Â¼", "Â½", "Â¿", "Ã€", "Â¾", "A", "-", "&", "&", "Å’", "]","~ ","@");
  var unicode_array = new Array("à¥°","QZ+","sa","a","à¤°à¥à¤¦à¥à¤§","Z","\"","\"","'","'", "à¥¦",  "à¥§",  "à¥¨",  "à¥©",     "à¥ª",   "à¥«",  "à¥¬",   "à¥­",   "à¥®",   "à¥¯",  "à¥žà¥",  "à¥˜",  "à¥™", "à¥™à¥",  "à¥š", "à¤œà¤¼à¥", "à¥›",  "à¥œ",  "à¥",   "à¥ž",  "à¥Ÿ",  "à¤±",  "à¤©",  "à¤¤à¥à¤¤", "à¤¤à¥à¤¤à¥", "à¤•à¥à¤¤",  "à¤¦à¥ƒ",  "à¤•à¥ƒ","à¤¨à¥à¤¨","à¤¨à¥à¤¨à¥","=k","f=", "à¤¹à¥à¤¨",  "à¤¹à¥à¤¯",  "à¤¹à¥ƒ",  "à¤¹à¥à¤®",  "à¤¹à¥à¤°",  "à¤¹à¥",   "à¤¦à¥à¤¦",  "à¤•à¥à¤·", "à¤•à¥à¤·à¥", "à¤¤à¥à¤°", "à¤¤à¥à¤°à¥",  "à¤›à¥à¤¯",  "à¤Ÿà¥à¤¯",  "à¤ à¥à¤¯",  "à¤¡à¥à¤¯",  "à¤¢à¥à¤¯", "à¤¦à¥à¤¯", "à¤œà¥à¤ž", "à¤¦à¥à¤µ", "à¤¶à¥à¤°",  "à¤Ÿà¥à¤°",    "à¤¡à¥à¤°",    "à¤¢à¥à¤°",    "à¤›à¥à¤°",   "à¤•à¥à¤°",  "à¤«à¥à¤°", "à¤°à¥à¤¦à¥à¤°",  "à¤¦à¥à¤°",   "à¤ªà¥à¤°", "à¤ªà¥à¤°",  "à¤—à¥à¤°", "à¤°à¥",  "à¤°à¥‚", "à¤‘",   "à¤“",  "à¤”",  "à¤†",   "à¤…", "à¤ˆà¤‚", "à¤ˆ",  "à¤ˆ",   "à¤‡",  "à¤‰",   "à¤Š",  "à¤",  "à¤", "à¤‹", "à¤•à¥à¤•", "à¤•", "à¤•", "à¤•à¥", "à¤–", "à¤–à¥", "à¤—", "à¤—", "à¤—à¥", "à¤˜", "à¤˜", "à¤˜à¥", "à¤™", "à¤šà¥ˆ",  "à¤š", "à¤š", "à¤šà¥", "à¤›", "à¤œ", "à¤œ", "à¤œà¥",  "à¤",  "à¤à¥", "à¤ž", "à¤Ÿà¥à¤Ÿ",   "à¤Ÿà¥à¤ ",   "à¤Ÿ",   "à¤ ",   "à¤¡à¥à¤¡",   "à¤¡à¥à¤¢",  "à¤¡à¤¼", "à¤¢à¤¼", "à¤¡",   "à¤¢", "à¤£", "à¤£à¥", "à¤¤", "à¤¤", "à¤¤à¥", "à¤¥", "à¤¥à¥",  "à¤¦à¥à¤§",  "à¤¦", "à¤§", "à¤§", "à¤§à¥", "à¤§à¥", "à¤§à¥", "à¤¨", "à¤¨", "à¤¨à¥à¤¨",    "à¤ª", "à¤ª", "à¤ªà¥",  "à¤«", "à¤«à¥",  "à¤¬", "à¤¬", "à¤¬à¥",  "à¤­", "à¤­à¥",  "à¤®",  "à¤®", "à¤®à¥", "à¤¯", "à¤¯à¥",  "à¤°", "à¤²", "à¤²", "à¤²à¥",  "à¤³",  "à¤µ", "à¤µ", "à¤µà¥", "à¤¶", "à¤¶à¥",  "à¤·", "à¤·à¥", "à¤¸", "à¤¸", "à¤¸à¥", "à¤¹", "à¥€à¤‚", "à¥à¤°", "à¤¦à¥à¤¦", "à¤Ÿà¥à¤Ÿ","à¤Ÿà¥à¤ ","à¤¡à¥à¤¡","à¤•à¥ƒ","à¤­","à¥à¤¯","à¤¡à¥à¤¢","à¤à¥","à¤•à¥à¤°","à¤¤à¥à¤¤à¥","à¤¶","à¤¶à¥","à¥‰",  "à¥‹",   "à¥Œ",   "à¤¾",   "à¥€",   "à¥",   "à¥‚",   "à¥ƒ",   "à¥‡",   "à¥ˆ", "à¤‚",   "à¤",   "à¤ƒ",   "à¥…",  "à¤½", "à¤½", "à¤½", "à¤½", "à¥à¤°",  "à¥", "?", "à¤¼",":", "â€˜",   "â€™",   "â€œ",   "â€",  ";",  "(",    ")",   "{",    "}",   "=", "à¥¤", ".", "-",  "Âµ", "à¥°", ",","à¥ ","/");

  function convertKrutiDevToUnicode(krutiDevText) {
    var unicodeText = krutiDevText;

    for (var i = 0; i < kruti_array.length; i++) {
      var krutiChar = kruti_array[i];
      var unicodeChar = unicode_array[i];

      var regex = new RegExp(krutiChar, "g");
      unicodeText = unicodeText.replace(regex, unicodeChar);
    }

    return unicodeText;
  }
convertButton.addEventListener('click', () => {
  const krutiDevText = krutiDevInput.value;
  const unicodeText = convertKrutiDevToUnicode(krutiDevText);
  unicodeOutput.value = unicodeText;
});

sampleButton.addEventListener('click', () => {
  const sampleKrutiDevText = "à¤•à¥ƒà¤¤à¤¿à¤¦à¥‹à¤‚ à¤•à¥‡ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤®à¥‡à¤‚ à¤†à¤ª à¤†à¤ªà¤•à¥€ à¤…à¤®à¥à¤¬à¤¨à¤¿à¤à¤·à¤¨ à¤ªà¤¡à¤¼à¥‡ à¤…à¤ªà¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤‚à¤—à¥à¤°à¤¹ à¤•à¥€ à¤¹à¥ˆ"; // Replace with your sample text
  krutiDevInput.value = sampleKrutiDevText;
});


resetButton.addEventListener('click', () => {
  krutiDevInput.value = '';
  unicodeOutput.value = '';
});

// Copy button click event
copyButton.addEventListener('click', () => {
  unicodeOutput.select();
  document.execCommand('copy');
});

// Auto checkbox change event
autoCheckbox.addEventListener('change', () => {
  if (autoCheckbox.checked) {
    // Automatically convert when the checkbox is checked
    const krutiDevText = krutiDevInput.value;
    const unicodeText = convertKrutiDevToUnicode(krutiDevText);
    unicodeOutput.value = unicodeText;
  } else {
    unicodeOutput.value = '';
  }
});
