let hPaddingInput = document.getElementById('hPadding');
let vPaddingInput = document.getElementById('vPadding');


const btnbrColorInput = document.getElementById('btnbrColor');
const btnbrtxtColorInput = document.getElementById('btntxtbrcolor');
const vSizeInput = document.getElementById('vSize');
const showvSize = document.getElementById('showvSize')
const showhSize = document.getElementById('showhSize')
const hSizeInput = document.getElementById('hSize');
const widthHoverInput = document.getElementById('widthHover');
const showwHover = document.getElementById('wHover');
const showupHover = document.getElementById('muHover');
const upHoverInput = document.getElementById('upHover');
const hoverbgColorInput = document.getElementById('bgColor');
const hovertxtbgColor = document.getElementById('txtbgColor');

// Button text and border styling inputs
const btnText = document.getElementById('btnText');
const trList = document.getElementById('trList');
const fStyle = document.getElementById('fStyle');
const fWeight = document.getElementById('fWeight');
const showfWeight = document.getElementById('showfWeight');
const fSize = document.getElementById('fSize');
const fColor = document.getElementById('fColor');
const colorInput = document.getElementById('colorInput');
const brColor = document.getElementById('brColor');
const txtbrcolor = document.getElementById('txtbrcolor');
const btLeft = document.getElementById('btLeft');
const showbtLeft = document.getElementById('showbtLeft');
const btRight = document.getElementById('btRight');
const showbtRight = document.getElementById('showbtRight');
const bbRight = document.getElementById('bbRight');
const showbbRight = document.getElementById('showbbRight');
const bbLeft = document.getElementById('bbLeft');
const showbbLeft = document.getElementById('showbbLeft');
const button = document.getElementById('btn');
const htmlCode = document.getElementById('para-copy');
const cssCode = document.getElementById('content-to-copy')
const copyHtml = document.getElementById('btn-copy');
const copyCss = document.getElementById('copy-button');
updateButtonStyles();
updateButton();





function updateButton(){

  button.style.cssText = `
    padding: ${hPaddingInput.value}px ${vPaddingInput.value}px;
    border-top-left-radius: ${btLeft.value}px;
    border-top-right-radius: ${btRight.value}px;
    border-bottom-right-radius: ${bbRight.value}px;
    border-bottom-left-radius: ${bbLeft.value}px;
    font-weight: ${fWeight.value};
    font-size: ${fSize.value}px;
    font-family: ${fStyle.value};
    text-transform: ${trList.value};
    color: ${fColor.value};
    border: solid 1px ${brColor.value};
    background-color: ${btnbrColorInput.value};
    width: ${hSizeInput.value}px;
    height: ${vSizeInput.value}px;
    transition: width 0.5s, margin-top 0.5s;
  `
  ;
  
  button.addEventListener('mouseover', () => {
    button.style.width = `${widthHoverInput.value}px`;
    button.style.height = `${upHoverInput.value}px`;
    button.style.marginTop = '-5px';
    button.style.backgroundColor = hoverbgColorInput.value;
  });
  button.addEventListener('mouseout', () => {
    button.style.width = `${hSizeInput.value}px`;
    button.style.height = `${vSizeInput.value}px`;
    button.style.marginTop = '0px';
    button.style.backgroundColor = btnbrColorInput.value;
  });

  htmlCode.innerText = `<button>${btnText.value}</button>`
  // hljs.highlight('htmlCode',{language: 'html'}).value;

  cssCode.innerHTML = 
`
button 
{
padding: ${hPaddingInput.value}px ${vPaddingInput.value}px;
border-top-left-radius: ${btLeft.value}px;
border-top-right-radius: ${btRight.value}px;
border-bottom-right-radius: ${bbRight.value}px;
border-bottom-left-radius: ${bbLeft.value}px;
font-weight: ${fWeight.value};
font-size: ${fSize.value}px;
font-family: ${fStyle.value};
text-transform: ${trList.value};
color: ${fColor.value};
border: solid 1px ${brColor.value};
background-color: ${btnbrColorInput.value};
width: ${hSizeInput.value}px;
height: ${vSizeInput.value}px;
transition: width 0.5s, margin-top 0.5s;
}

button:hover
{
width: ${widthHoverInput.value}px;
height: ${upHoverInput.value}px;
background-color: ${hoverbgColorInput.value};
}
  `
  hljs.highlightAll();

}
updateCode();
function updateCode(){
  copyHtml.addEventListener('click', () => {
    navigator.clipboard.writeText(htmlCode.innerText);
    copyHtml.textContent = 'Copied!';
    setTimeout(() => {
      copyHtml.textContent = 'Copy';
    }, 2000);
  });
  
  copyCss.addEventListener('click', () => {
    navigator.clipboard.writeText(cssCode.innerText);
    copyCss.textContent = 'Copied!';
    setTimeout(() => {
      copyCss.textContent = 'Copy';
    }, 2000);
  });
}

const btn1 = document.getElementById('btn1');
btn1.style.cssText = `
padding: ${hPaddingInput.value}px ${vPaddingInput.value}px;
border-top-left-radius: ${btLeft.value}px;
border-top-right-radius: ${btRight.value}px;
border-bottom-right-radius: ${bbRight.value}px;
border-bottom-left-radius: ${bbLeft.value}px;
font-weight: 300;
font-size: ${fSize.value}px;
font-family: ${fStyle.value};
text-transform: ${trList.value};
color: ${fColor.value};
border: solid 1px ${brColor.value};
background-color: ${btnbrColorInput.value};
width: ${hSizeInput.value}px;
height: ${vSizeInput.value}px;
transition: width 0.5s, margin-top 0.5s;
`




// function getButtonStyles(){
// const styles = getComputedStyle(button);
// const padding = styles.getPropertyValue('padding');
// const [vPadding, hPadding] = padding.split(' ');
// vPaddingInput.value = parseInt(vPadding);
// hPaddingInput.value = parseInt(hPadding);
// const borderRadiusTopLeft = styles.getPropertyValue('border-top-left-radius');
// btLeft.value = parseInt(borderRadiusTopLeft);
// showbtLeft.innerHTML = btLeft.value;
// const borderRadiusTopRight = styles.getPropertyValue('border-top-right-radius');
// btRight.value = parseInt(borderRadiusTopRight);
// showbtRight.innerHTML = btRight.value;
// const borderRadiusBottomRight = styles.getPropertyValue('border-bottom-right-radius');
// bbRight.value = parseInt(borderRadiusBottomRight);
// showbbRight.innerHTML = bbRight.value;
// const borderRadiusBottomLeft = styles.getPropertyValue('border-bottom-left-radius');
// bbLeft.value = parseInt(borderRadiusBottomLeft);
// showbbLeft.innerHTML = bbLeft.value;
// const fontWeight = styles.getPropertyValue('font-weight');
// fWeight.value = parseInt(fontWeight);
// showfWeight.innerHTML = fWeight.value;
// const fontSize = styles.getPropertyValue('font-size');
// fSize.value = parseInt(fontSize);
// function rgbToHex(color) {
//   const values = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(',');
//   const hexValues = values.map((value) => {
//     const hex = Number(value).toString(16);
//     return hex.length === 1 ? `0${hex}` : hex;
//   });
//   return `#${hexValues.join('')}`;
// }
// const color = styles.getPropertyValue('color');
// const hexColor = rgbToHex(color);
// fColor.value = hexColor;
// colorInput.value = fColor.value;
// const borderColor = styles.getPropertyValue('border-color');
// const hexBorderColor = rgbToHex(borderColor);
// brColor.value = hexBorderColor;
// txtbrcolor.value = brColor.value;
// const backgroundColor = styles.getPropertyValue('background-color');
// const hexBackgroundColor = rgbToHex(backgroundColor);
// btnbrColorInput.value = hexBackgroundColor;
// btnbrtxtColorInput.value = btnbrColorInput.value;
// const width = styles.getPropertyValue('width');
// hSizeInput.value = parseInt(width);
// showhSize.innerHTML = hSizeInput.value;
// const height = styles.getPropertyValue('height');
// vSizeInput.value = parseInt(height);
// showvSize.innerHTML = vSizeInput.value;
//   const hoverStyles = getComputedStyle(button, ':hover');
//   const hoverWidth = hoverStyles.getPropertyValue('width');
//   const hoverHeight = hoverStyles.getPropertyValue('height');
//   const hoverBackgroundColor = hoverStyles.getPropertyValue('background-color');
//   const hexHoverBackgroundColor = rgbToHex(hoverBackgroundColor);
//   hoverbgColorInput.value = hexHoverBackgroundColor;
//   hovertxtbgColor.value = hoverbgColorInput.value;
//   widthHoverInput.value = parseInt(hoverWidth);
//   showwHover.innerHTML= widthHoverInput.value;
//   upHoverInput.value = parseInt(hoverHeight);
//   showupHover.innerHTML = upHoverInput.value;
// }
function updateButtonStyles(){
  btnText.addEventListener('keyup', function(){
  button.innerHTML = btnText.value;
  updateButton();
  });
  fSize.oninput = function(){
    updateButton();
  }
  trList.onchange = function(){
    updateButton();
  }
  fStyle.onchange = function(){
    updateButton();
  }
  hPaddingInput.oninput = function(){
    updateButton();
  }
  vPaddingInput.oninput = function(){
    updateButton();
  }
  fWeight.oninput = function() {
    showfWeight.innerHTML = this.value;
    updateButton();
  }
  btLeft.oninput = function() {
    showbtLeft.innerHTML = this.value;
    updateButton();
  }
  btRight.oninput = function() {
    showbtRight.innerHTML = this.value;
    updateButton();
  }
  bbRight.oninput = function() {
    showbbRight.innerHTML = this.value;
    updateButton();
  }
  bbLeft.oninput = function() {
    showbbLeft.innerHTML = this.value;
    updateButton();
  }
  vSizeInput.oninput = function() {
    showvSize.innerHTML = this.value;
    updateButton();
  }
  hSizeInput.oninput = function() {
    showhSize.innerHTML = this.value;
    updateButton();
  }
  widthHoverInput.oninput = function(){
  showwHover.innerHTML = this.value;
  updateButton();
  }
  upHoverInput.oninput =  function(){
  showupHover.innerHTML = this.value;
  updateButton();
  }
  fColor.addEventListener("input", function () {
    colorInput.value = fColor.value;
    updateButton();
  });
  colorInput.addEventListener("input", function () {
    fColor.value = colorInput.value;
    updateButton();
  });
  brColor.addEventListener("input", function () {
    txtbrcolor.value = brColor.value;
    updateButton();
  });
  txtbrcolor.addEventListener("input", function () {
    brColor.value = txtbrcolor.value;
    updateButton();
  });
  btnbrColorInput.addEventListener("input", function () {
    btnbrtxtColorInput.value = btnbrColorInput.value;
    updateButton();
  });
  btnbrtxtColorInput.addEventListener("input", function () {
    btnbrColorInput.value = btnbrtxtColorInput.value;
    updateButton();
  });
  hoverbgColorInput.addEventListener('input',function(){
    hovertxtbgColor.value = hoverbgColorInput.value;
    updateButton();
  })
  hovertxtbgColor.addEventListener('input',function(){
    hoverbgColorInput.value = hovertxtbgColor.value;
    updateButton();
  })
}


