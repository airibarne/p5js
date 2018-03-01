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

    var myElement = document.getElementById('body');
    var mc = new Hammer(myElement);
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    
    // panup pandown events for swipe effect using hammer.js
    mc.on("panup pandown", function(ev) {
        if(ev.type=="panup") {
            console.log("up");
        } else if (ev.type=="pandown") {
            console.log("down");
        }
    });

    // On reload or refresh scroll to top
    scrollToPosition(posts[0])
    // next click event
    next.click(function(evt) {
        //Scroll to next position
        prev.show();
        position+=1;
        scrollToPosition(posts[position]);
        if (position === posts.length - 1) {
            next.hide();
        }
    });
    // prev click event
    prev.click(function(evt) {
        //Scroll to prev position    
        next.show();
        position -= 1
        scrollToPosition(posts[position]);
        if (position === 0) {
            prev.hide();
        }
    });
    // Mouse wheel event
    $('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            console.log('scrolling up !');
        }
        else{
            console.log('scrolling down !');
        }
    });
});

