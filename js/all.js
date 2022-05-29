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

  // 方案選擇
  $('.selectBtn').click(function() {
    const basic = 600
    const standard = basic + 1000
    $(this).addClass('active')
    $(this).parent().siblings().find('.selectBtn').removeClass('active')
    switch($(this).attr('data-num')) {
    case '10000':
      $('#basicNum').text($(this).attr('data-num'))
      $('#basicPrice').text(basic)
      $('#standardNum').text($(this).attr('data-num'))
      $('#standardPrice').text(standard)
      break
    case '15000':
      $('#basicNum').text($(this).attr('data-num'))
      $('#basicPrice').text(basic * 2)
      $('#standardNum').text($(this).attr('data-num'))
      $('#standardPrice').text(standard * 2)
      break
    case '20000':
      $('#basicNum').text($(this).attr('data-num'))
      $('#basicPrice').text(basic * 3)
      $('#standardNum').text($(this).attr('data-num'))
      $('#standardPrice').text(standard * 3)
      break
    case '25000':
      $('#basicNum').text($(this).attr('data-num'))
      $('#basicPrice').text(basic * 4)
      $('#standardNum').text($(this).attr('data-num'))
      $('#standardPrice').text(standard * 4)
      break
    default:
      $('#basicNum').text($(this).attr('data-num'))
      $('#basicPrice').text(basic * 5)
      $('#standardNum').text($(this).attr('data-num'))
      $('#standardPrice').text(standard * 5)
      break
    }
  })
})
