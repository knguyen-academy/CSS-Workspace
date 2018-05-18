
function autoHScroll(targetElement, speed) {
  debugger
    var scrollWidth = $(targetElement).get(0).scrollWidth;
    var clientWidth = $(targetElement).get(0).clientWidth;
     $(targetElement).animate({ scrollLeft: scrollWidth - clientWidth },
    {
        duration: speed,
        complete: function () {
            targetElement.animate({ scrollLeft: 0 },
            {
                duration: speed,
                complete: function () {
                autoHScroll(targetElement, speed);
                }
            }).delay(1000);
        }
    }).delay(1000);
  };
  
  //calling funciton
  autoHScroll($('.galleryContainer'), 18000);
  
  $(".leftBtn").click(function(){
        // var a = $(".galleryContainer").width();
      //  var currentL = $(".galleryContainer").scrollLeft();
      // alert(currentL);
      // alert(a);
      $(".galleryContainer").stop();
        $(".galleryContainer").animate({
          scrollLeft: "-=600px"
        }, "slow");
  
      });
  
      $(".rightBtn").click(function(){
        $(".galleryContainer").stop();
          $(".galleryContainer").animate({
              scrollLeft: "+=600px"
          }, "slow");
        
        });
$("#playBtn").click(function(){
  autoHScroll($('.galleryContainer'), 5000);
});