var signupStep = document.getElementById('signupStep');
var confirmStep = document.getElementById('confirmStep');

function confirmInfo()
{
    debugger;
   var i,x = document.getElementById('id02');
   for (i=0;i<x.length;i++)
   {
       alert(x[i].value);
   }
}
function nextForm()
{
  
    signupStep.style.display="none";
    confirmStep.style.display="block";
    confirmInfo();
}

function prevForm()
{
    signupStep.style.display="block";
    confirmStep.style.display="none";
}

function confirmForm()
{
    alert("confirm");
}