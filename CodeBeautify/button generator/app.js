const generateButton = document.getElementById('genBtn');
const cssButton = document.createElement('button');
    const buttonText = document.getElementById('btnText');
    const textTransform = document.getElementById('trList');
    const fontStyle = document.getElementById('fStyle');
    fontStyle.addEventListener('change',function(){
        console.log(fontStyle.value)
    })
    const fontWeight = document.getElementById('fWeight');
    const showFontWeight = document.getElementById('showfWeight');
    showFontWeight.innerText = fontWeight.value;
    fontWeight.addEventListener('change',function(){
        showFontWeight.innerText = fontWeight.value;
    });
    
    const fontSize = document.getElementById('fSize');
    const fColor = document.getElementById('fColor');
    const textColorInput = document.getElementById('colorInput');
    textColorInput.addEventListener('keyup',function(){
        fColor.value = textColorInput.value;
    })
    fColor.addEventListener('keyup',function(){
        textColorInput.value = fColor.value;
    });   
//     const tinycolor = require("tinycolor2");
// const colorHex = tinycolor(textColorInput.value).toHexString(); 
// textColorInput.addEventListener('change',function(){
//     fColor.value = colorHex;
// })
    const borderTopLeftRadius = document.getElementById('btLeft');
    const showBorderTopLeftRadius = document.getElementById('showbtLeft');
    showBorderTopLeftRadius.innerText = borderTopLeftRadius.value;
    borderTopLeftRadius.addEventListener('change',function(){
        showBorderTopLeftRadius.innerText = borderTopLeftRadius.value;
    })
    const borderTopRightRadius = document.getElementById('btRight');
    const showBorderTopRightRadius = document.getElementById('showbtRight');
    showBorderTopRightRadius.innerText = borderTopRightRadius.value;
    borderTopRightRadius.addEventListener('click',function(){
        showBorderTopRightRadius.innerText = borderTopRightRadius.value;
    })
    const borderBottomRightRadius = document.getElementById('bbRight')
    const showBorderBottomRightRadius = document.getElementById('showbbRight');
    showBorderBottomRightRadius.innerText = borderBottomRightRadius.value;
    borderBottomRightRadius.addEventListener('click',function(){
        showBorderBottomRightRadius.innerText = borderBottomRightRadius.value;
    })
    const borderBottomLeftRadius = document.getElementById('bbLeft');
    const showBorderBottomLeftRadius = document.getElementById('showbbLeft');
    showBorderBottomLeftRadius.innerText = borderBottomLeftRadius.value;
    borderBottomLeftRadius.addEventListener('click',function(){
        showBorderBottomLeftRadius.innerText = borderBottomLeftRadius.value;
    })
    const horizontalPadding = document.getElementById('hPadding');
    const verticalPadding = document.getElementById('vPadding');
    
generateButton.addEventListener('click',function(){
    cssButton.innerText = buttonText.value;
    cssButton.style.textTransform = textTransform.value;
    cssButton.style.fontStyle = fontStyle.value;
    cssButton.style.fontWeight = fontWeight.value;
    cssButton.style.fontSize = `${fontSize.value}px`
    cssButton.style.color = fColor.value;
    cssButton.style.borderTopLeftRadius = `${borderTopLeftRadius.value}px`;
    cssButton.style.borderTopRightRadius = `${borderTopRightRadius.value}px`;
    cssButton.style.borderBottomRightRadius = `${borderBottomRightRadius.value}px`;
    cssButton.style.borderBottomLeftRadius = `${borderBottomLeftRadius.value}px`;
    cssButton.style.paddingLeft = `${horizontalPadding.value}px`;
    cssButton.style.paddingRight = `${horizontalPadding.value}px`;
    cssButton.style.paddingTop = `${verticalPadding.value}px`;
    cssButton.style.paddingBottom = `${verticalPadding.value}px`;
    console.log(cssButton.style.horizontalPadding)

    const buttonDiv = document.getElementById('cssButton');
    buttonDiv.appendChild(cssButton)
})