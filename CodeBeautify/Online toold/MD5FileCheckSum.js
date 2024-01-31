    function copyToClipboard() {
      var outputTextArea = document.getElementById("output");
      outputTextArea.select();
      document.execCommand("copy");
  
      var copyButton = document.getElementById("copy-button");
      copyButton.textContent = "Copied!";
      setTimeout(function () {
        copyButton.textContent = "Copy";
      }, 2000);
    }
  
    function calculateHash() {
      var inputFile = document.getElementById("file-input").files[0];
      var isHmacEnabled = document.getElementById("hmac-enabled").checked;
      var hmacInputType = document.getElementById("hmac-input-type").value;
      var hmacKey = document.getElementById("hmac-key").value;
      var autoUpdate = document.getElementById("auto-update").checked;
  
      var outputTextArea = document.getElementById("output");
  
      if (inputFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var fileContent = e.target.result;
          var hash;
          if (isHmacEnabled) {
            hash = CryptoJS.HmacMD5(fileContent, hmacKey, { asBytes: true }).toString(CryptoJS.enc[hmacInputType]);
          } else {
            hash = CryptoJS.MD5(fileContent).toString();
          }
  
          outputTextArea.value = hash;
  
          
        };
        reader.readAsText(inputFile);
      } else {
        outputTextArea.value = "Please select a file.";
      }
    }
  
    document.getElementById("hash-button").addEventListener("click", calculateHash);
  
    document.getElementById("file-input").addEventListener("change", function () {
      var fileNameDisplay = document.getElementById("file-name");
      fileNameDisplay.textContent = this.files[0].name;
  
      calculateHash();
    });
  
    document.getElementById("hmac-enabled").addEventListener("change", function () {
      var hmacSection = document.querySelector(".hmac");
      hmacSection.style.display = this.checked ? "block" : "none";
  
      calculateHash();
    });
  
    document.getElementById("hmac-input-type").addEventListener("change", function () {
      calculateHash();
    });
  
    document.getElementById("hmac-key").addEventListener("input", function () {
      calculateHash();
    });
  
    document.getElementById("auto-update").addEventListener("change", function () {
      if (this.checked) {
        calculateHash();
      }
    });
