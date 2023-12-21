document.addEventListener('DOMContentLoaded', () => {
    const permutationType = document.getElementById('permutation-type');
    const inputSection = document.getElementById('input-section');
    const generateButton = document.getElementById('generate-button');
    const outputSection = document.getElementById('output-section');
    const outputTextarea = document.getElementById('output');
  
    permutationType.addEventListener('change', () => {
      const selectedType = permutationType.value;
      inputSection.innerHTML = '';
  
      if (selectedType === 'digits' || selectedType === 'letters') {
        const inputLabel = selectedType === 'digits' ? 'Range (N):' : 'Size:';
        const inputPlaceholder = selectedType === 'digits' ? 'Enter a number' : 'Enter a size';
        const inputField = `
          <label class="label">${inputLabel}</label>
          <div class="control">
            <input type="number" id="permutation-input" class="input" placeholder="${inputPlaceholder}" required>
          </div>
        `;
        inputSection.innerHTML = inputField;
      } else if (selectedType === 'anagrams' || selectedType === 'custom') {
        const inputLabel = selectedType === 'anagrams' ? 'Word:' : 'List of items (comma-separated):';
        const inputPlaceholder = selectedType === 'anagrams' ? 'Enter a word' : 'e.g., item1, item2, item3';
        const inputField = `
          <label class="label">${inputLabel}</label>
          <div class="control">
            <input type="text" id="permutation-input" class="input" placeholder="${inputPlaceholder}" required>
          </div>
        `;
        inputSection.innerHTML = inputField;
      }
  
      inputSection.classList.remove('is-hidden');
      outputSection.classList.add('is-hidden');
    });
  
    generateButton.addEventListener('click', () => {
      const selectedType = permutationType.value;
      const input = document.getElementById('permutation-input').value;
      const distinguishable = document.getElementById('distinguishable').checked;
      const separator = document.getElementById('separator').value;
  
      let permutations = [];
  
      if (selectedType === 'digits') {
        const n = parseInt(input);
        for (let i = 1; i <= n; i++) {
          permutations.push(i);
        }
      } else if (selectedType === 'letters') {
        const size = parseInt(input);
        if (size > 0 && size <= 26) {
          for (let i = 0; i < size; i++) {
            permutations.push(String.fromCharCode(65 + i));
          }
        } else {
          alert('Invalid size for letters. Enter a value between 1 and 26.');
          return;
        }
      } else if (selectedType === 'anagrams') {
        const word = input.toLowerCase().replace(/\s/g, '');
        generateAnagrams(word, '', distinguishable);
      } else if (selectedType === 'custom') {
        const items = input.split(',').map(item => item.trim());
        generatePermutationsCustom(items, [], distinguishable);
      }
  
      outputTextarea.value = permutations.join(separator);
      outputSection.classList.remove('is-hidden');
    });
  
    function generateAnagrams(word, currentAnagram, distinguishable) {
      if (word === '') {
        permutations.push(currentAnagram);
        return;
      }
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const remainingChars = word.slice(0, i) + word.slice(i + 1);
        generateAnagrams(remainingChars, currentAnagram + char, distinguishable);
      }
    }
  
    function generatePermutationsCustom(items, currentPermutation, distinguishable) {
      if (items.length === 0) {
        permutations.push(currentPermutation.join(', '));
        return;
      }
  
      for (let i = 0; i < items.length; i++) {
        const remainingItems = [...items.slice(0, i), ...items.slice(i + 1)];
        generatePermutationsCustom(remainingItems, [...currentPermutation, items[i]], distinguishable);
      }
    }
  });
  