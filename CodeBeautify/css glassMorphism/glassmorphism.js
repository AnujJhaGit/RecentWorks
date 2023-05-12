
const bgColorInput = document.getElementById('bg-color');
const blurAmountInput = document.getElementById('blur-amount');
const opacityInput = document.getElementById('opacity');
const glassPreview = document.getElementById('glass');
bgColorInput.addEventListener('input', updatePreview);
blurAmountInput.addEventListener('input', updatePreview);
opacityInput.addEventListener('input', updatePreview);
function updatePreview() {
  const bgColor = bgColorInput.value;
  const blurAmount = blurAmountInput.value;
  const opacity = opacityInput.value;
  glassPreview.style.backgroundColor = bgColor;
  glassPreview.style.opacity = opacity;
  glassPreview.style.boxShadow = `0 0 ${blurAmount}px ${blurAmount}px ${bgColor}66, 0 0 ${blurAmount * 2}px ${bgColor}33`;
}
