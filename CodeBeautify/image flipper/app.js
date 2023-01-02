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


// function downloadimg(){
// //  document.getElementById('button').href = "img."
// console.log(img.src)

// axios({
//     url: img.src,
//     method:'GET',
//     responseType: 'blob'
// })
// .then((response) => {
//    const url = window.URL
//    .createObjectURL(new Blob([response.data]));
//           const link = document.getElementById('button');
//           link.href = url;
//           link.setAttribute('download', 'image.jpg');
//           link.click();
// })
// }

var download = document.createElement('a');
download.innerHTML = 'download';
download.addEventListener('click', function(e){
    download.href = img.src;
    download.download = 'img.png';
}, false)

const btn = document.getElementById('button');
console.log(btn)
btn.appendChild(download)