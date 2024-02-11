// Function to encode input to Base32
function encodeBase32() {
    const inputData = document.getElementById('inputData').value;

    // Use the base32-encode library for encoding
    const encodedResult = base32.encode(inputData);

    document.getElementById('outputResult').value = encodedResult;

    // Update download link with encoded result
    updateDownloadLink(encodedResult);
}

// Function to update the download link with encoded result
function updateDownloadLink(encodedResult) {
    const downloadLink = document.getElementById('downloadLink');
    const blob = new Blob([encodedResult], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
}

// Function to handle auto-update checkbox state
function handleAutoUpdate() {
    const autoUpdateCheckbox = document.getElementById('autoUpdate');
    
    if (autoUpdateCheckbox.checked) {
        document.getElementById('inputData').addEventListener('input', encodeBase32);
    } else {
        document.getElementById('inputData').removeEventListener('input', encodeBase32);
    }
}

// Event listener for the "Encode to Base32" button
document.querySelector('button').addEventListener('click', encodeBase32);

// Event listener for auto-update checkbox
document.getElementById('autoUpdate').addEventListener('change', handleAutoUpdate);

// Event listener for file input change
document.getElementById('fileInput').addEventListener('change', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('inputData').value = e.target.result;

            if (document.getElementById('autoUpdate').checked) {
                encodeBase32();
            }
        };

        reader.readAsText(file);
    }
});
