// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//     	$('#atom').animatescroll();
//    } else {
//     	$('#band').animatescroll();
//    }
//    lastScrollTop = st;
// });

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