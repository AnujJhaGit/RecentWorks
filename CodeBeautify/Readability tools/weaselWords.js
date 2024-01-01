const weaselWordsList = `
          most
          many
          various
          some
          a lot
          several
          few
          often
          probably
          huge
          tiny
          very
          fairly
          extremely
          exceedingly
          quite
          remarkably
          surprisingly
          mostly
          largely
          is a number
          are a number
          excellent
          interestingly
          significantly
          substantially
          clearly
          vast
          relatively
          completely
          literally
          not rocket science
          outside the box
          expert
          experts
          helps
          reportedly
          arguably
          linked to
          supports
          useful
          better
          improved
          gains
          acts
          works
          effective
          efficient
          seems
          appears
          looks
          is like
          virtually
          lots
          almost
          could
          combats
          felt
          heard
          saw
          knew
          realized
          realised
          wanted
          thought
          noticed
          seemed
          decided
          looked
          understood
          considered
          believed
          appeared
          watched
          smelled
          touched
          wondered
          recognized
          recognised
          wished
          supposed
          about
          just
          really
          started
          began
          all
          again
          that
          so
          then
          rather
          only
          like
          close
          even
          somehow
          sort
          pretty
          well
          back
          up
          down
          anyway
          real
          already
          own
          over
          ever
          be able to
          still
          bit
          far
          also
          enough
          might
        `;

        const weaselWords = weaselWordsList.split('\n').map(word => word.trim()).filter(Boolean);

        function handleTextChange() {
          var autoUpdateCheckbox = document.getElementById('autoUpdateCheckbox');
  
          if (autoUpdateCheckbox.checked) {
            findWeaselWords();
          }
        }

        function loadSampleText() {
          document.getElementById('inputText').value = "This is a sample text containing some weasel words. Some words may appear more than once. Some words may appear more than once.";
          enableCalculateButton();
          findWeaselWords();
        }

        function loadFile() {
          const fileInput = document.getElementById('fileInput');
          const fileName = document.getElementById('fileName');
          const reader = new FileReader();

          reader.onload = function (e) {
            document.getElementById('inputText').value = e.target.result;
            enableCalculateButton();
          };

          reader.readAsText(fileInput.files[0]);
          fileName.innerText = fileInput.files[0].name;
        }

        function clearText() {
          document.getElementById('inputText').value = '';
          document.getElementById('weaselWordsTableBody').innerHTML = '';
        }

        function findWeaselWords() {
          const inputText = document.getElementById('inputText').value.toLowerCase();
          const weaselWordsTableBody = document.getElementById('weaselWordsTableBody');

          const foundWeaselWords = inputText.match(/\b(most|many|various|some|a lot|several|few|often|probably|huge|tiny|very|fairly|extremely|exceedingly|quite|remarkably|surprisingly|mostly|largely|is a number|are a number|excellent|interestingly|significantly|substantially|clearly|vast|relatively|completely|literally|not rocket science|outside the box|expert|experts|helps|reportedly|arguably|linked to|supports|useful|better|improved|gains|acts|works|effective|efficient|seems|appears|looks|is like|virtually|lots|almost|could|combats|felt|heard|saw|knew|realized|realised|wanted|thought|noticed|seemed|decided|looked|understood|considered|believed|appeared|watched|smelled|touched|wondered|recognized|recognised|wished|supposed|about|just|really|started|began|all|again|that|so|then|rather|only|like|close|even|somehow|sort|pretty|well|back|up|down|anyway|real|already|own|over|ever|be able to|still|bit|far|also|enough|might)\b/gi);

          if (foundWeaselWords) {
            const countMap = {};

            foundWeaselWords.forEach(word => {
              countMap[word.toLowerCase()] = (countMap[word.toLowerCase()] || 0) + 1;
            });

            weaselWordsTableBody.innerHTML = '';

            for (const word in countMap) {
              const row = `<tr><td>${word}</td><td>${countMap[word]}</td></tr>`;
              weaselWordsTableBody.innerHTML += row;
            }
          } else {
            weaselWordsTableBody.innerHTML = '<tr><td colspan="2">No weasel words found.</td></tr>';
          }
        }

        function enableCalculateButton() {
          document.getElementById('calculateButton').removeAttribute('disabled');
        }

        document.getElementById('inputText').addEventListener('input', enableCalculateButton);
      