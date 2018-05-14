// 
function openImgModal(selector)
{
    // debugger;

    // save image source of object (img)
    var imgSrc = selector.src;
    
    // set Modal source = imgSrc 
    $(".imgContent").attr("src",imgSrc);

    // display modal
    $("#imgModal").show();
    
    // var tmp = document.getElementById('imgModal');
    // tmp.style.display="block";
}


//for all img tags in imgFlexBox class, call openImgModal() func
$(".imgFlexBox img").click(function(){
    openImgModal(this);
});

//hide modal
$(".close").click(function(){
    $("#imgModal").hide();
});

// close modal on anywhere but modal
var modal = document.getElementById('imgModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

 