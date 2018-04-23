var i,x = document.getElementsByTagName("input");
       

function next()
{
  
    if(validForm())
    alert("valid");

}
function validForm()
{
  
    var valid = true;
    for (i=0; i<x.length; i++)
    {
        if (x[i].value=="")
        {
            x[i].className = "invalid";
            valid=false;
        }
    }
    return valid;
}

