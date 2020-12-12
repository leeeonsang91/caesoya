$(document).ready(function () {

  $(window).on('scroll', function(){
    var t = $('html, body').scrollTop();
    console.log(t);
    if(t > 10) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  })

  // main visual slide slick
  $('.main__visual .slide').slick({
    infinite: true,
    autoplay: true,
    dots: true,
  });

  // main best product slide slick
  $('.main__bestProduct .product').slick({
    infinite: true,
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
  });

  // detail thumbnail
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    centerPadding: '90px',
    arrows: false,
    focusOnSelect: true,
  });

  // detail goods related
  $('.related-goods .product').slick({
    infinite: true,
    autoplay: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.sitemap').stop().slideToggle();
  });
});
