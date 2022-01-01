(function($) {

  

  "use strict";  



  $(window).on('load', function() {

    

  /*Page Loader active

    ========================================================*/

    $('#preloader').fadeOut();



  // Sticky Nav

    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 50) {

            $('.scrolling-navbar').addClass('top-nav-collapse');

        } else {

            $('.scrolling-navbar').removeClass('top-nav-collapse');

        }

    });



    /* ==========================================================================

       countdown timer

       ========================================================================== */

     jQuery('#clock').countdown('2021/07/1 11:00',function(event){

      var $this=jQuery(this).html(event.strftime(''

      +'<div class="time-entry days"><span>%-D</span> Gün</div> '

      +'<div class="time-entry hours"><span>%H</span> Saat</div> '

      +'<div class="time-entry minutes"><span>%M</span> DAKİKA</div> '

      +'<div class="time-entry seconds"><span>%S</span> SANİYE</div> '));

    });



    /* slicknav mobile menu active  */

    $('.mobile-menu').slicknav({

        prependTo: '.navbar-header',

        parentTag: 'liner',

        allowParentLinks: true,

        duplicate: true,

        label: '',

        closeOnClick:true

      });



      /* WOW Scroll Spy

    ========================================================*/

     var wow = new WOW({

      //disabled for mobile

        mobile: false

    });

    wow.init();



    /* Nivo Lightbox 

    ========================================================*/

    $('.lightbox').nivoLightbox({

        effect: 'fadeScale',

        keyboardNav: true,

      });



    // one page navigation 

    $('.navbar-nav').onePageNav({

            currentClass: 'active'

    }); 



    /* Back Top Link active

    ========================================================*/

      var offset = 200;

      var duration = 500;

      $(window).scroll(function() {

        if ($(this).scrollTop() > offset) {

          $('.back-to-top').fadeIn(400);

        } else {

          $('.back-to-top').fadeOut(400);

        }

      });



      $('.back-to-top').on('click',function(event) {

        event.preventDefault();

        $('html, body').animate({

          scrollTop: 0

        }, 600);

        return false;

      });



  });      

  var initialSrc = "assets/img/logo16.png";
  var scrollSrc = "assets/img/logo13.png";

  $(window).scroll(function () {
    var value = $(this).scrollTop();
    if (value > 100) {
      $(".scroll-image").attr("src", scrollSrc);
    }
    else {
      $(".scroll-image").attr("src", initialSrc);
    }
  });

}(jQuery));