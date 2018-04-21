// Retrieve modal id
var modal = document.getElementById('id01');
var loginF = document.getElementById('id00');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        loginF.style.display= "block";
    }
}

function test() {
    alert("Hello");
}

//When click button, bring up Modal
function bringUp() {
    //var modal = document.getElementById('id01');
    modal.style.display = "block";
    loginF.style.display= "none";
}

//Bringdown Modal
function bringDown(){
modal.style.display="none";
loginF.style.display= "block";
}



