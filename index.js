var myMenu = document.getElementById("menu"),
    myBack = document.getElementById("back"),
    myBarList = document.getElementById("show-hide"),
    mySwitchColor = document.getElementById("switchColor"),
    myColor = ["red", ""],
    myRandomColor = Math.floor(myColor.length  * Math.random());



myMenu.onclick = function(){
    'use strict';
    myBarList.style.right="0",
    myBack.style.display = "inline"

}

myBack.onclick = function() {
    'use strict';
    setTimeout(function(){
        myBarList.style.right= "2000px",
        myBack.display= "none"
    }, 500)

}

window.onload = function(){
    'use strict';

       setInterval(function() {
        mySwitchColor.classList.toggle(myColor[myRandomColor])
       }, 5000) 
}

