// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

/** SERVICE SECTION*/ 
function dropDownService(){
    var dropDownService01 = document.getElementById("dropDownService01");
    if (dropDownService01.className.indexOf("w3-show") == -1) { 
        dropDownService01.className += " w3-show";
    } else {
        dropDownService01.style.display = "none";
    }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeModals(event) {
    // Get the modal
    var modal = document.getElementById('modal');
    var modal02 = document.getElementById('modal02');
    var modal03 = document.getElementById('modal03');
    var modal04 = document.getElementById('modal04');
    var modal05 = document.getElementById('modal05');
    var modal06 = document.getElementById('modal06');
    var modal07 = document.getElementById('modal07');
    var modal08 = document.getElementById('modal08');
    var modal09 = document.getElementById('modal09');
    switch(event.target){
        case modal:
            modal.style.display ="none";
            break;
        case modal02:
            modal02.style.display ="none";
            break;
        case modal03:
            modal03.style.display ="none";
            break;
        case modal04:
            modal04.style.display ="none";
            break;
        case modal05:
            modal05.style.display ="none";
            break;
        case modal06:
            modal06.style.display ="none";
            break;
        case modal07:
            modal07.style.display ="none";
            break;
        case modal08:
            modal08.style.display ="none";
            break;
        case modal09:
            modal09.style.display ="none";
            break;
        default:
            break;        
    }
}

/**END OF SERVICE SECTION*/