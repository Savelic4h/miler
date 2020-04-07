$(function () {
  $('.slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__thumbs'
  });
  $('.slider__thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.slider__big',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  new WOW().init();
  $(".rateYo").rateYo({
    rating: 5,
    starWidth: "14px",
    spacing: "7px",
    readOnly: true,

  });
  $('.clients-slider__inner').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.partners__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('#my-menu').mmenu({
    extensions: ["position-right", "position-back", 'theme-black', 'effect-menu-slide', 'pagedim-black'],
    navbar: {
      title: '<img src="img/logo.svg">'
    },
    offCanvas: {
      position: 'right'
    },
  });
  var apiMyMenu = $('#my-menu').data('mmenu');

  apiMyMenu.bind('open:finish', function () {
    $('.menu-aside__hamburger').addClass('is-active');
  });
  apiMyMenu.bind('close:finish', function () {
    $('.menu-aside__hamburger').removeClass('is-active');
  });
});