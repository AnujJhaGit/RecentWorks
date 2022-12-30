var loadfile = function (event) {
    var img = document.getElementById('img');
    img.src = URL.createObjectURL(event.target.files[0]);
   
 }

 
    
function flipImage(){
    img.style.transform = 'scaleY(-1)'
    img.onload = function(){
        URL.revokeObjectURL(img.src)
    }
}
