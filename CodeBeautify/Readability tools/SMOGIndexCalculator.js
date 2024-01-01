function countPolysyllables(inString) {
  let polysTotal = 0;
  let wordList = inString.match(/(?:(?:\w-\w)|[\wÀ-ÿ'’])+/g);
  if (wordList) {wordList.forEach((word) => {
      if (word === "'"||word==="’") {return;} //bandaid solution.
      if (word.length <= 3) {return;} //quick return on short words
      let syllables = 0;
      if (word.endsWith("s'")||word.endsWith("s’")) {word.slice(-1);} //ending with s'
      if (word.endsWith("s's")||word.endsWith("s’s")) {word.slice(-1,-3);} //ending with s's
      const cEndings = word.match(/(?<=\w{3})(side|\wess|(?<!ed)ly|ment|ship|board|ground|(?<![^u]de)ville|port|ful(ly)?|berry|box|nesse?|such|m[ae]n|wom[ae]n|horse|anne)s?$/mi);
      if (cEndings) {word = word.replace(cEndings[0],"\n" + cEndings[0]);} //Splits into two words and evaluates them as such
      const cBeginnings = word.match(/^(ware|side|p?re(?!ach|agan|al|au))/mi);
      if (cBeginnings) {word = word.replace(cBeginnings[0],""); syllables++;}
      const esylp = word.match(/ie($|l|t|rg)|([cb]|tt|pp)le$|phe$|kle(s|$)|[^n]scien|sue|aybe$|[^aeiou]shed|[^lsoai]les$|([^e]r|g)ge$|(gg|ck|yw|etch)ed$|(sc|o)he$|seer|^re[eiuy]/gmi);
      if (esylp) {syllables += esylp.length;} //E clustered positive
      const esylm = word.match(/every|some([^aeiouyr]|$)|[^trb]ere(?!d|$|o|r|t|a[^v]|n|s|x)|[^g]eous|niet/gmi);
      if (esylm) {syllables -= esylm.length;} //E clustered negative
      const isylp = word.match(/rie[^sndfvtl]|(?<=^|[^tcs]|st)ia|siai|[^ct]ious|quie|[lk]ier|settli|[^cn]ien[^d]|[aeio]ing$|dei[tf]|isms?$/gmi);
      if (isylp) {syllables += isylp.length;} //I clustered positive
      const osylp = word.match(/nyo|osm(s$|$)|oinc|ored(?!$)|(^|[^ts])io|oale|[aeiou]yoe|^m[ia]cro([aiouy]|e)|roe(v|$)|ouel|^proa|oolog/gmi);
      if (osylp) {syllables += osylp.length;} //O clustered positive
      const osylm = word.match(/[^f]ore(?!$|[vcaot]|d$|tte)|fore|llio/gmi);
      if (osylm) {syllables -= osylm.length;} //O clustered negative
      const asylp = word.match(/asm(s$|$)|ausea|oa$|anti[aeiou]|raor|intra[ou]|iae|ahe$|dais|(?<!p)ea(l(?!m)|$)|(?<!j)ean|(?<!il)eage/gmi);
      if (asylp) {syllables += asylp.length;} //A clustered positive
      const asylm = word.match(/aste(?!$|ful|s$|r)|[^r]ared$/gmi);
      if (asylm) {syllables -= asylm.length;} //A clustered negative
      const usylp = word.match(/uo[^y]|[^gq]ua(?!r)|uen|[^g]iu|uis(?![aeiou]|se)|ou(et|ille)|eu(ing|er)|uye[dh]|nuine|ucle[aeiuy]/gmi);
      if (usylp) {syllables += usylp.length;} //U clustered positive
      const usylm = word.match(/geous|busi|logu(?!e|i)/gmi);
      if (usylm) {syllables -= usylm.length;} //U clustered negative
      const ysylp = word.match(/[ibcmrluhp]ya|nyac|[^e]yo|[aiou]y[aiou]|[aoruhm]ye(tt|l|n|v|z)|pye|dy[ae]|oye[exu]|lye[nlrs]|olye|aye(k|r|$|u[xr]|da)|saye\w|iye|wy[ae]|[^aiou]ying/gmi);
      if (ysylp) {syllables += ysylp.length;} //Y clustered positive
      const ysylm = word.match(/arley|key|ney$/gmi);
      if (ysylm) {syllables -= ysylm.length;}
      const essuffix = word.match(/((?<!c[hrl]|sh|[iszxgej]|[niauery]c|do)es$)/gmi);
      if (essuffix) {syllables--;}//es suffix
      const edsuffix = word.match(/([aeiouy][^aeiouyrdt]|[^aeiouy][^laeiouyrdtbm]|ll|bb|ield|[ou]rb)ed$|[^cbda]red$/gmi);
      if (edsuffix) {syllables--}
      const csylp = word.match(/chn[^eai]|mc|thm/gmi);
      if (csylp) {syllables += csylp.length;} //Consonant clustered negative
      const eVowels = word.match(/[aiouy](?![aeiouy])|ee|e(?!$|-|[iua])/gmi);
      if (eVowels) {syllables += eVowels.length;} //Applicable vowel count (all but e at end of word)
      if (syllables <= 0) {syllables = 1;} //catch-all
      if (word.match(/[^aeiou]n['’]t$/i)) {syllables ++;} //ending in n't, but not en't
      if (word.match(/en['’]t$/i)) {syllables --;} //ending in en't
      if (syllables >= 3) {polysTotal++;}
  });}
  return polysTotal;
}

function calculateSMOG(text) {
  const sentences = text.split(/[.?!]/g).filter(Boolean);
  console.log(sentences.length);
  const numSentences = sentences.length;
  console.log(numSentences);

  const polysyllables = countPolysyllables(sentences.slice(0, numSentences).join(" "));
  console.log(sentences,numSentences,polysyllables);
  const smogIndex = 1.043 * Math.sqrt(polysyllables * (30 / numSentences)) + 3.1291;

  return smogIndex;
}

function enableCalculateButton() {
  const inputText = document.getElementById("inputText").value.trim();
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.disabled = !inputText;
}

document.getElementById("inputText").addEventListener("input", enableCalculateButton);

function handleTextChange() {
  if (document.getElementById("autoUpdateCheckbox").checked) {
      calculateSMOGAndDisplay();
  }
}

function calculateSMOGAndDisplay() {
  var inputText = document.getElementById("inputText").value.trim();

  if (inputText === "") {
      document.getElementById("smogResult").textContent = "SMOG Index: -";
  } else {
      const smogIndex = calculateSMOG(inputText);
      document.getElementById("smogResult").textContent = `SMOG Index: ${smogIndex.toFixed(1)}`;
  }
}

document.getElementById("calculateButton").addEventListener("click", calculateSMOGAndDisplay);

function loadSampleText() {
  const sampleText = "This is some sample text with a few polysyllabic words to demonstrate the SMOG Index calculation.";
  document.getElementById("inputText").value = sampleText;
  calculateSMOGAndDisplay();
  enableCalculateButton();
}

function loadFile() {
  const file = document.getElementById("fileInput").files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
          document.getElementById("inputText").value = event.target.result;
          calculateSMOGAndDisplay();
          enableCalculateButton();
      };
      reader.onerror = function(event) {
          console.error("Error reading the file:", event.target.error);
      };
      reader.readAsText(file);
  }
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("smogResult").textContent = "SMOG Index will be displayed here.";
  enableCalculateButton();
}
