// This is where it all goes :)

$(document).ready(function(){
  $('#menu-toggle').click(function(e){
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
  });

  $('#menu-close').click(function(e){
    e.preventDefault();
    $('#sidebar-wrapper').toggleClass('active');
  });

  // Show to-top when scrolled 250px
  var fixed = false;
  $(document).scroll(function(){
    if($(this).scrollTop() > 250){
      if(!fixed) {
        fixed = true;
        $('#to-top').show('slow', function(){
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        })
      }
    }else{
      if (fixed) {
        fixed = false;
        $('#to-top').hide('slow', function(){
          $('#to-top').css({
            display: 'none'
          });
        })
      }
    }
  })

  //Close menu if item clicked
  $('.sidebar-nav li a').click(function(e) {
    $('#sidebar-wrapper').toggleClass('active');
  });

  // Smooth scrolling to in page divs
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
