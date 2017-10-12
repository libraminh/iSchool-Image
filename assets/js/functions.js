$(function(){
  playCarousel();
  countDown();
  activeNiceSelect();
  activeLightbox();
  activeFilter();
  activeHoverDirection();
  openSubMenu();

})

$(window).scroll(function(){
  scrollNav();
  scrollNav1();
})

$(window).resize(function(){
  changeNavLogo();
})

// Function Area
function openSubMenu() {
  if($(window).width() < 992) {
    $('.navbar-nav a').on('click', function(){
      $(this).parent().find('.sub-menu').slideToggle();
    })

    $('.sub-menu a').on('click', function(){
      $(this).parent().find('.sub-menu-2').slideToggle();
      $(this).toggleClass('rotate-icon');
    })
  }
}

function activeHoverDirection() {
  $(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
}

function activeFilter() {
  if($('body').is('.gallery-page')) {
    $('.filtr-container').filterizr();
  }
}

function activeLightbox() {
  if($('body').is('.gallery-page, .home2')) {
    $('.gallery-item').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  }
}

function changeNavLogo() {
  if($('body').is('.home2, .index-page')) {
    if($(window).width() > 992){
      $('.menu .navbar-brand img').attr("src", "assets/img/home/logo.png");
    } else {
      $('.menu .navbar-brand img').attr("src", "assets/img/home/logo-1.png");
    }
  }
}

function scrollNav() {

  if($('body').is('.home2, .index-page')) {

    var wScroll = $(window).scrollTop();

    if(wScroll > 50) {

      if($(window).width() > 992) {
        $('.menu').addClass('menu-open');
        $('.menu .navbar-brand img').attr("src", "assets/img/home/logo-1.png");
      } else {
        $('.menu').addClass('menu-open');
      }

    } else {
      if($(window).width() > 992) {
        $('.menu').removeClass('menu-open');
        $('.menu .navbar-brand img').attr("src", "assets/img/home/logo.png");
      }
    }
  }
}

function scrollNav1() {
  if(!$('body').is('.home2, .index-page')) {

    var wScroll = $(window).scrollTop();

    if(wScroll > 50) {
      $('.menu').addClass('menu-open');
    } else {
      $('.menu').removeClass('menu-open');
    }
  }
}

function activeNiceSelect() {
  if($('body').is('.home2')) {
    $('#home-search-select, #home-search-select2').niceSelect();
  }
}

function playCarousel() {
  $('.carousel-1').owlCarousel({
    items: 3,
    margin: 40,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 10,
          items:2,
      },
      1000:{
          items:3,
          dots: true,
      },
    }
  });

  $('.carousel-2').owlCarousel({
    items: 2,
    margin: 60,
    loop: true,
    nav: false,
    dots: true,
    center: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:3,
          dots: true,
      },
    }
  });

  $('.carousel-3').owlCarousel({
    items: 1,
    margin: 60,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:1,
      },
      1000:{
          items:1,
          dots: true,
      },
    }
  });

  $('.carousel-4').owlCarousel({
    items: 1,
    margin: 60,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:1,
      },
      1000:{
          items:1,
          dots: true,
      },
    }
  });

  $('.carousel-5').owlCarousel({
    items: 2,
    margin: 55,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:2,
      },
      1000:{
          items:2,
          dots: true,
      },
    }
  });

  $('.carousel-6').owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:2,
      },
      1000:{
          items:3,
          dots: true,
      },
    }
  });

  $('.carousel-7').owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:2,
      },
      1000:{
          items:3,
          dots: true,
      },
    }
  });

  $('.carousel-8').owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:1,
      },
      1000:{
          items:1,
          dots: true,
      },
    }
  });

  $('.carousel-9').owlCarousel({
    items: 3,
    margin: 10,
    loop: false,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
          items:1,
      },
      768:{
          margin: 20,
          items:2,
      },
      1000:{
          items:3,
          dots: true,
      },
    }
  });

  $('.carousel-10').owlCarousel({
    items: 1,
    margin: 10,
    loop: false,
    nav: false,
    dots: false,
    animateIn: 'fadeInDown',
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });

  $('.carousel-11').owlCarousel({
    items: 1,
    margin: 10,
    loop: false,
    nav: true,
    dots: false,
    animateIn: 'zoomIn',
    navText: ['<span class="navi-btn pre-btn"> <i class="fa fa-angle-left" aria-hidden="true"></i> </span>','<span class="navi-btn pre-btn"> <i class="fa fa-angle-right" aria-hidden="true"></i> </span>'],
    responsive:{
      0:{
          margin: 20,
          items:1,
      },
      768:{
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-12').owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: false,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    URLhashListener:true,
    startPosition: 'URLHash',
    responsive:{
      0:{
          margin: 20,
          items:1,
      },
      768:{
          margin: 20,
          items:2,
      },
      1000:{
          items:4,
          dots: false,
      },
    }
  });
}

function countDown() {
  $('#clock').countdown('2017/12/20', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="wrap-count"> <span class="top-count"> %D </span> <span class="break">Days</span> </span>'
      + '<span class="wrap-count"> <span class="top-count"> %H </span> <span class="break">Hours</span> </span>'
      + '<span class="wrap-count"> <span class="top-count"> %M </span> <span class="break">Minutes</span> </span>'
      + '<span class="wrap-count"> <span class="top-count"> %S </span> <span class="break">Seconds</span> </span>'
      ));
  });

  $('#single-course-right-post-img-clock').countdown('2017/12/20', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="wrap-count"> <span class="top-count"> %D </span> <span class="break">Days</span> </span>'
      + '<span class="wrap-count"> <span class="top-count"> %H </span> <span class="break">Hours</span> </span>'
      + '<span class="wrap-count"> <span class="top-count"> %M </span> <span class="break">Minutes</span> </span>'
      + '<span class="wrap-count"> <span class="top-count"> %S </span> <span class="break">Seconds</span> </span>'
      ));
  });
}
