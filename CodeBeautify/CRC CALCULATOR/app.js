const inputData = document.getElementById("inputData");
const crcPolynomial = document.getElementById("crcPolynomial");
const crcInitialValue = document.getElementById("crcInitialValue");
const crcResult = document.getElementById("crcResult");
const xorOutput = document.getElementById("xorOutput");
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function() {
  // Get the values of the input fields.
  const data = inputData.value;
  const polynomial = crcPolynomial.value;
  const initialValue = crcInitialValue.value;

  // Calculate the CRC value.
  const crc = calculateCRC(data, polynomial, initialValue);

  // Set the value of the CRC result field.
  crcResult.value = crc;

  // Calculate the XOR output.
  const xorOutput = calculateXOR(data, polynomial);

  // Set the value of the XOR output field.
  xorOutput.value = xorOutput;
});

function calculateCRC(data, polynomial, initialValue) {
  // Initialize the CRC value.
  let crc = initialValue;

  // For each bit in the data:
  for (let i = 0; i < data.length; i++) {
    // XOR the CRC value with the bit.
    crc ^= data[i];

    // Shift the CRC value one bit to the right.
    crc >>= 1;

    // If the bit shifted out is 1, then XOR the CRC value with the polynomial.
    if (crc & 1) {
      crc ^= polynomial;
    }
  }

  // Return the CRC value.
  return crc;
}

function calculateXOR(data, polynomial) {
  // Initialize the XOR output.
  let xorOutput = 0;

  // For each bit in the data:
  for (let i = 0; i < data.length; i++) {
    // XOR the XOR output with the bit.
    xorOutput ^= data[i];
  }

  // Return the XOR output.
  return xorOutput;
}
