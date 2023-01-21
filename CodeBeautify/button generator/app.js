const generateButton = document.getElementById('genBtn');
const cssButton = document.createElement('button');
const cssCode = document.createElement('p');
const htmlCode = document.createElement('p')
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
    fColor.addEventListener('change',function(){
        textColorInput.value = fColor.value;
    });   
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
    const borderColor = document.getElementById('brColor');
    const txtborderColor = document.getElementById('txtbrcolor');
    txtborderColor.addEventListener('keyup',function(){
        borderColor.value = txtborderColor.value;
    });
    borderColor.addEventListener('change',function(){
        txtborderColor.value = borderColor.value;
    });
    const btnbrColor = document.getElementById('btnbrColor');
    const btntxtbrcolor = document.getElementById('btntxtbrcolor')
    btntxtbrcolor.addEventListener('keyup',function(){
        btnbrColor.value = btntxtbrcolor.value;
    })
    btnbrColor.addEventListener('change',function(){
        btntxtbrcolor.value = btnbrColor.value;
    })
    const verticalSize = document.getElementById('vSize');
    const showvSize = document.getElementById('showvSize');
    showvSize.innerText = verticalSize.value;
    verticalSize.addEventListener('change',function(){
    showvSize.innerText = verticalSize.value;
    })
    const horizontalSize = document.getElementById('hSize');
    const showhSize = document.getElementById('showhSize');
    showhSize.innerText = horizontalSize.value;
    horizontalSize.addEventListener('change',function(){
    showhSize.innerText = horizontalSize.value;
    })
    const widthHover = document.getElementById('widthHover');
    const showWidth = document.getElementById('wHover');
    showWidth.innerText = widthHover.value;
    widthHover.addEventListener('change',function(){
    showWidth.innerText = widthHover.value;
    })
    const mupHover = document.getElementById('upHover');
    const showupHover = document.getElementById('muHover');
    showupHover.innerText = mupHover.value;
    mupHover.addEventListener('change',function(){
    showupHover.innerText = mupHover.value;
    })
    const bgButton = document.getElementById('bgColor');
    const txtbgColor = document.getElementById('txtbgColor');
    txtbgColor.value = bgButton.value;
    bgButton.addEventListener('change',function(){
    txtbgColor.value = bgButton.value;
    })
    txtbgColor.addEventListener('keyup',function(){
        bgButton.value = txtbgColor.value;
    })
    window.addEventListener('DOMContentLoaded',function(){
        generateButton.click();
        var copyButton = document.getElementById("copy-button");
        var originalText = copyButton.textContent;
        var contentToCopy = document.getElementById("content-to-copy");
        copyButton.addEventListener("click", function() {
            navigator.clipboard.writeText(contentToCopy.textContent)
            .then(function() {
                copyButton.textContent = "Copied";
                setTimeout(function(){
                  copyButton.textContent = originalText;
                },2000);
            })
            .catch(function(err) {
                console.error('Failed to copy text: ', err);
            });
        });

        var copyButton1 = document.getElementById("btn-copy");
        var originalText1 = copyButton1.textContent;
        var contentToCopy1 = document.getElementById("para-copy");
        copyButton1.addEventListener("click", function() {
            navigator.clipboard.writeText(contentToCopy1.textContent)
            .then(function() {
                copyButton1.textContent = "Copied";
                setTimeout(function(){
                copyButton1.textContent = originalText1;
                },2000);
            })
            .catch(function(err) {
                console.error('Failed to copy text: ', err);
            });
        });
    
    })
generateButton.addEventListener('click',function(){
    cssButton.innerText = buttonText.value;
    cssButton.style.textTransform = textTransform.value;
    cssButton.style.fontFamily = fontStyle.value;
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
    cssButton.style.borderColor = borderColor.value;
    cssButton.style.backgroundColor = btnbrColor.value;
    cssButton.style.height = `${verticalSize.value}px`;
    cssButton.style.width = `${horizontalSize.value}px`;
    const buttonDiv = document.getElementById('cssButton');
    buttonDiv.appendChild(cssButton)
    const cssdiv = document.getElementById('csscode')
cssCode.innerText = `button{
    textTransform = ${textTransform.value};
    fontFamily = ${fontStyle.value};
    fontWeight = ${fontWeight.value};
    fontSize = ${fontSize.value}px;
    color = ${fColor.value};
    borderTopLeftRadius = ${borderTopLeftRadius.value}px;
    borderTopRightRadius = ${borderTopRightRadius.value}px;
    borderBottomRightRadius = ${borderBottomRightRadius.value}px;
    borderBottomLeftRadius = ${borderBottomLeftRadius.value}px;
    paddingLeft = ${horizontalPadding.value}px;
    paddingRight = ${horizontalPadding.value}px;
    paddingTop = ${verticalPadding.value}px;
    paddingBottom = ${verticalPadding.value}px;
    borderColor = ${borderColor.value};
    backgroundColor = ${btnbrColor.value};
    height = ${verticalSize.value}px;
    width = ${horizontalSize.value}px;  
}
button:hover{
    width = ${widthHover.value}px;
    height = ${mupHover.value}px;
    backgroundColor = ${bgButton.value};
}`;
cssCode.id = "content-to-copy";

htmlCode.innerText = `<button>${buttonText.value}</button>`;
htmlCode.id = "para-copy";
const hcode = document.getElementById('htmlCode');
hcode.appendChild(htmlCode)
    cssdiv.appendChild(cssCode)
})

cssButton.onmouseover = function(){
    cssButton.style.width = `${widthHover.value}px`;
    cssButton.style.height = `${mupHover.value}px`;
    cssButton.style.backgroundColor = bgButton.value;
}
cssButton.onmouseout = function(){
    cssButton.style.height = `${verticalSize.value}px`;
    cssButton.style.width = `${horizontalSize.value}px`;
    cssButton.style.backgroundColor = btnbrColor.value;
}


const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click',function(){
   location.reload();
})



  