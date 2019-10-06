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
    },{offset : '70%'});



  $('.top-backnumber__scroll').waypoint(function(direction){
    var activePoint = $(this.element);
    if (direction === 'down') {//scroll down
        activePoint.addClass('active');
    }
    else{ //scroll up
        activePoint.removeClass('active');
    }
    },{offset : '90%'});

    $('.top-member__wrap2').waypoint(function(direction){
        var activePoint = $(this.element);
        if (direction === 'down') {//scroll down
            activePoint.addClass('active');
        }
        else{ //scroll up
            activePoint.removeClass('active');
        }
        },{offset : '80%'});
    
        $('.top-performance-wrap2').waypoint(function(direction){
            var activePoint = $(this.element);
            if (direction === 'down') {//scroll down
                activePoint.addClass('active');
            }
            else{ //scroll up
                activePoint.removeClass('active');
            }
            },{offset : '80%'});
       
        $('.recrute-coment').waypoint(function(direction){
            var activePoint = $(this.element);
            if (direction === 'down') {//scroll down
                activePoint.addClass('active');
            }
            else{ //scroll up
                activePoint.removeClass('active');
            }
            },{offset : '80%'});

  });   
 