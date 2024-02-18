// Function to encode using base32-js library
function base32Encode(input, inputType) {
    let encodedText;

    if (inputType === 'hex') {
        const buffer = new Uint8Array(input.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        encodedText = base32.encode(buffer);
    } else if (inputType === 'binary') {
        const buffer = new TextEncoder('utf-8').encode(input);
        encodedText = base32.encode(buffer);
    } else {
        const encoder = new TextEncoder('utf-8');
        const buffer = encoder.encode(input);
        encodedText = base32.encode(buffer);
    }

    return encodedText;
}

// Function to handle the button click
function encodeBase32() {
    const inputText = document.getElementById('inputText').value;
    const inputType = document.getElementById('inputType').value;
    const encodedText = base32Encode(inputText, inputType);
    document.getElementById('outputText').value = encodedText;
}
