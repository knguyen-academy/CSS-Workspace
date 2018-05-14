function openImgModal(selector)
{
    // debugger;
    var imgSrc = selector.src;
    // alert(imgSrc);
    $(".imgContent").attr("src",imgSrc);
    $("#imgModal").show();
    
    // var tmp = document.getElementById('imgModal');
    // tmp.style.display="block";
}

$(".close").click(function(){
    $("#imgModal").hide();
});

var modal = document.getElementById('imgModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}