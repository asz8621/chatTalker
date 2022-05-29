$(document).ready(function() {
  // navbar
  if($(window).scrollTop() > 50) {
    $('.navbar').addClass('scroll')
    $('.goTop').fadeIn(250)
  } else {
    $('.navbar').removeClass('scroll')
		$('.goTop').fadeOut(250)
  }
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('.navbar').addClass('scroll')
      $('.goTop').fadeIn()
    } else {
      $('.navbar').removeClass('scroll')
		  $('.goTop').fadeOut()
    }
  })

  // goTop
  $('.goTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  })

  // slick
  $('.slick-evaluation').slick({
    dotsClass: 'slick-dots d-flex justify-content-center align-items-center flex-row pos-s',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
})
