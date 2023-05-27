const inputLabelPairs = [
    { inputId: 'input_cX1', labelId: 'cX1' },
    { inputId: 'input_cY1', labelId: 'cY1' },
    { inputId: 'input_cX2', labelId: 'cX2' },
    { inputId: 'input_cY2', labelId: 'cY2' }
  ];
  
  inputLabelPairs.forEach(function(pair) {
    const input = document.getElementById(pair.inputId);
    const label = document.getElementById(pair.labelId);
  
    if (input && label) {
      input.addEventListener('input', function(e) {
        label.textContent = input.value;
        drawBezierCurve();
      });
    } else {
      console.error('Input or label element not found for pair:', pair);
    }
  });
  
  function drawBezierCurve() {
    const canvas = document.getElementById('bezier');
    const context = canvas.getContext('2d');
    const cX1 = parseFloat(document.getElementById('input_cX1').value);
    const cY1 = parseFloat(document.getElementById('input_cY1').value);
    const cX2 = parseFloat(document.getElementById('input_cX2').value);
    const cY2 = parseFloat(document.getElementById('input_cY2').value);
  
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.bezierCurveTo(cX1, cY1, cX2, cY2, canvas.width, canvas.height / 2);
    context.stroke();
  }
  
  drawBezierCurve();
  