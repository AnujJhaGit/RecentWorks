var loadfile = function (event) {
    var img = document.getElementById('img');
    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function(){
        URL.revokeObjectURL(img.src)
        img.style.transform = null
    }   
 }

 const flipH = document.getElementById('flipH')
 const flipV = document.getElementById('flipV')
 
 flipH.addEventListener('click', flipHH)
 flipV.addEventListener('click', flipVV)
function flipHH(e){
    if(img.style.webkitTransform === ''){
        img.style.webkitTransform = 'scaleY(-1)'
    }else if(img.style.webkitTransform === 'scaleY(-1)'){
        img.style.webkitTransform = ''
    }else if(img.style.webkitTransform === 'scaleX(-1)') {
        img.style.webkitTransform = 'scale(-1, -1)'
    }else if(img.style.webkitTransform === 'scale(-1, -1)'){
        img.style.webkitTransform = 'scaleX(-1)'
    }
}

function flipVV(e){
    if(img.style.webkitTransform === ''){
        img.style.webkitTransform = 'scaleX(-1)'
    }else if(img.style.webkitTransform === 'scaleX(-1)'){
        img.style.webkitTransform = ''
    }else if(img.style.webkitTransform === 'scaleY(-1)') {
        img.style.webkitTransform = 'scale(-1,-1)'
    }else if(img.style.webkitTransform === 'scale(-1, -1)'){
        img.style.webkitTransform = 'scaleY(-1)'
    }
}
const btn = document.getElementById('button')

function downloadimg(){
    console.log(img.src)
}
