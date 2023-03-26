/** NAV BAR SECTION */

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
/**END OF NAVBAR SECTION*/

/** SERVICE SECTION */ 

//Show other services description
function showInfo(container) {
    var x = container.children;
    var description = x[1];
    var title_icon = x[0].lastElementChild.lastElementChild;
    if (description.className.indexOf("w3-show") == -1){
        description.className += " w3-show";
        title_icon.className += " w3-icon-down";
    } else {
        description.className = description.className.replace(" w3-show", "");
        title_icon.className = title_icon.className.replace(" w3-icon-down", " w3-icon-up");
    }
    
}

//Show service  Reimmatricolazioni description
function showInfo2(container) {
    var x = container.children;
    var description = x[3];
    var title_icon = x[2];
    if (description.className.indexOf("w3-show") == -1){
        description.className += " w3-show";
        title_icon.className += " w3-icon-down";
    } else {
        description.className = description.className.replace(" w3-show", "");
        title_icon.className = title_icon.className.replace(" w3-icon-down", " w3-icon-up");
    }
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function closeModal(event) {
    // Get the modal
    var modal01 = document.getElementById('modal01');
    var modal02 = document.getElementById('modal02');
    var modal03 = document.getElementById('modal03');
    var modal04 = document.getElementById('modal04');
    var modal05 = document.getElementById('modal05');
    var modal06 = document.getElementById('modal06');
    var modal07 = document.getElementById('modal07');
    var modal08 = document.getElementById('modal08');
    var modal09 = document.getElementById('modal09');

    if (event.target == modal01) {
        modal01.style.display = "none";
    }

    if (event.target == modal02) {
        modal02.style.display = "none";
    }

    if (event.target == modal03) {
        modal03.style.display = "none";
    }

    if (event.target == modal04) {
        modal04.style.display = "none";
    }

    if (event.target == modal05) {
        modal05.style.display = "none";
    }

    if (event.target == modal06) {
        modal06.style.display = "none";
    }

    if (event.target == modal07) {
        modal07.style.display = "none";
    }

    if (event.target == modal08) {
        modal08.style.display = "none";
    }

    if (event.target == modal09) {
        modal09.style.display = "none";
    }
}

/**END OF SERVICE SECTION*/