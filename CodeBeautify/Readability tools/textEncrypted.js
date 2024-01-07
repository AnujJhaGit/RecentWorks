function performEncryption() {
    var inputText = document.getElementById('inputText').value;
    var password = document.getElementById('password').value;
    var encryptedText = teaEncrypt(inputText, password);
    document.getElementById('outputText').value = encryptedText;
}

function performDecryption() {
    var inputText = document.getElementById('inputText').value;
    var password = document.getElementById('password').value;
    var decryptedText = teaDecrypt(inputText, password);
    document.getElementById('outputText').value = decryptedText;
}

function teaEncrypt(plainText, password) {
    // Implement your TEA encryption logic here
    // This is a basic example, you should replace this with the actual TEA algorithm
    return 'Encrypted: ' + plainText;
}

function teaDecrypt(encryptedText, password) {
    // Implement your TEA decryption logic here
    // This is a basic example, you should replace this with the actual TEA algorithm
    return encryptedText.replace('Encrypted: ', '');
}

function generateRandomPassword() {
    // Generate a random password and set it to the password field
    var randomPassword = Math.random().toString(36).substring(2, 18);
    document.getElementById('password').value = randomPassword;
}

function copyToClipboard() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

function downloadText() {
    var outputText = document.getElementById('outputText').value;
    var blob = new Blob([outputText], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'encrypted_text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function downloadJSON() {
    var outputText = document.getElementById('outputText').value;
    var jsonData = { encryptedText: outputText };
    var blob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'encrypted_text.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadSampleText() {
    // Replace this with your desired sample text
    var sampleText = 'This is a sample text.';
    document.getElementById('inputText').value = sampleText;
}





function copyToClipboard(elementId) {
    var copyText = document.querySelector(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  }

  function loadSampleText() {
    document.querySelector("#en-message").value = "This is a sample input.";
    document.querySelector("#de-message").value = "Sample encrypted text";
  }

  var enForm = document.querySelector("#encryptForm");

  enForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(enForm);
    let key = formData.get("key");
    let message = formData.get("message");
    let msg = encryptMe(message, key);
    document.querySelector("#en-message").value = msg;
  });

  var deForm = document.querySelector("#decryptForm");

  deForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(deForm);
    let key = formData.get("key");
    let encrypted = formData.get("encrypted");
    let msg = decryptMe(encrypted, key);
    document.querySelector("#de-message").value = msg;
  });

  function encryptMe(mes, key) {
    return CryptoJS.AES.encrypt(mes, key).toString();
  }

  function decryptMe(mes, key) {
    var bytes = CryptoJS.AES.decrypt(mes, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

