function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function scrollToPosition(element) {
    if (element !== undefined) {
        $("body").scrollTo(element, 800, {
            margin: true
        });
    }
}

$(function() {
    //Create an Array of posts
    var posts = $('.post');
    var position = 0; //Start Position
    var next = $('#next');
    var prev = $('#prev').hide();
    // On reload or refresh scroll to top
    scrollToPosition(posts[0])
    //Better performance to use Id selectors than class selectors
    next.click(function(evt) {
        //Scroll to next position
        prev.show();
        position+=1;
        console.log(posts[position]);
        scrollToPosition(posts[position]);
        if (position === posts.length - 1) {
            next.hide();
        }
    });

    prev.click(function(evt) {
        //Scroll to prev position    
        next.show();
        position -= 1
        scrollToPosition(posts[position]);
        if (position === 0) {
            prev.hide();
        }
    });
});

//Mouse wheel event
$(document).ready(function(){
    $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            console.log('scrolling up !');
        }
        else{
            console.log('scrolling down !');
        }
    });
});