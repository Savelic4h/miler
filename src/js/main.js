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
});