
function autoHScroll(targetElement, speed) {
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
  
  $("#prevBtn").click(function(){
        // var a = $(".galleryContainer").width();
      //  var currentL = $(".galleryContainer").scrollLeft();
      // alert(currentL);
      // alert(a);
      $(".galleryContainer").stop();
        $(".galleryContainer").animate({
          scrollLeft: "-=600px"
        }, "slow");
  
      });
  
      $("#nextBtn").click(function(){
        $(".galleryContainer").stop();
          $(".galleryContainer").animate({
              scrollLeft: "+=600px"
          }, "slow");
        
        });
  