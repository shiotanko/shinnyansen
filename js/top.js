$(function(){
    // ここにプログラムを記述
    $('.description__coment').waypoint(function(direction){
        var activePoint = $(this.element);
        if (direction === 'down') {//scroll down
            activePoint.addClass('active');
        }
        else{ //scroll up
            activePoint.removeClass('active');
        }
    },{offset : '50%'});
  }); 
  
 