$(document).ready(function () {

  // main visual slide slick
  $('.main__visual .slide').slick({
    infinite : true,
    autoplay : true,
    dots : true,
    arrows : false
  });

  // main best product slide slick
  $('.main__bestProduct .product').slick({
      infinite : true,
      autoplay : true,
      arrows : false,
      slidesToShow: 2,
      centerMode: true,
  })

  // main sns
  $('.main__sns .product').slick({
    infinite : true,
    autoplay : true,
    arrows : false,
    slidesToShow: 4,
    centerMode: true,
})


  // detail thumbnail
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    centerPadding: '90px',
    arrows: false,
    focusOnSelect: true
  });

  // detail goods related
  $('.related-goods .product').slick({
    infinite : true,
    autoplay : true,
    arrows : true,
    slidesToShow: 4,
    slidesToScroll: 1
  })


  $('[data-tab=""]').on('click', function(e){
    e.preventDefault();
    $('.tab__link').add('.login__link').add('.nav__link').add('.goods-view-tab_link').removeClass('active');
    $(this).addClass('active');
    $('.tab-item').hide();
    var target = $(this).data('targetId');
    $('#' + target).show();
  })

  $('.left-nav__gnb .depth button').on('click', function(){
    $('.left-nav__gnb .links').hide();
    $(this).siblings('.left-nav__gnb .links').show();
  })

  $('.header__menu').on('click', function(){
    $('.header-layout .bg').show();
    $('.header-layout .left-nav').addClass('active');
  });
  $('.bg').add('.left-nav .close').on('click', function(){
    $('.header-layout .bg').hide();
    $('.header-layout .left-nav').removeClass('active');
  });


});
