// Retrieve modal id
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function test() {
    alert("Hello");
}

//When click button, bring up Modal
function bringUp() {
    //var modal = document.getElementById('id01');
    modal.style.display = "block";
}

//Bringdown Modal
function bringDown(){
modal.style.display="none";
}



