$(document).ready(function(){
  /* Валидация формы */
  $('#form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength:15
      },
      email:{
        required: true,
        email: true
      },
      userphone: {
        required: true
      }
    },
    errorElement: "span",
    errorClass: "error",
    messages: {
      username: {
        required: "Поле обязательно для заполнения"
      },
      userphone: {
        required: "Поле обязательно для заполнения",
      },
      email: {
        required: "Поле обязательно для заполнения",
        email: "Введите корректный email"
      }
    },
  });
  /* живой бургер */
  $('.header__burger').click(function(event) {
    $('.header__burger,.nav-wrap,.logo__text').toggleClass('active');
    $('body').toggleClass('lock');
  });

  /* Живой сайдбар */

  $('.type__sidebar_1').click(function(event) {
    $('.type__burger_1').toggleClass('open');
  })
  $('.type__sidebar_2').click(function(event) {
    $('.type__burger_2').toggleClass('open');
  })
  $('.type__sidebar_3').click(function(event) {
    $('.type__burger_3').toggleClass('open');
  })
  $('.type__sidebar_4').click(function(event) {
    $('.type__burger_4').toggleClass('open');
  })
  
  /* живой сайдбар */

  $('.offer__link1').mouseover(function (event) {
    $('.bl__b1').addClass('good');
    $('.offer-block').addClass('color-w');
    $('.offer__link1').addClass('colorfull');
    $('.offer__link2').addClass('color-w');
    $('.offer__link3').addClass('color-w');
  });
  $('.offer__link1').mouseout(function (event) {
    $('.offer-block').removeClass('color-w');
    $('.bl__b1').removeClass('good');
    $('.offer__link1').removeClass('colorfull');
    $('.offer__link2').removeClass('color-w');
    $('.offer__link3').removeClass('color-w');
  });
  $('.offer__link2').mouseover(function (event) {
    $('.bl__b2').addClass('good');
    $('.offer-block').addClass('color-w');
    $('.offer__link2').addClass('colorfull');
    $('.offer__link1').addClass('color-w');
    $('.offer__link3').addClass('color-w');
  });
  $('.offer__link2').mouseout(function (event) {
    $('.bl__b2').removeClass('good');
    $('.offer-block').removeClass('color-w');
    $('.offer__link2').removeClass('colorfull');
    $('.offer__link1').removeClass('color-w');
    $('.offer__link3').removeClass('color-w');
  });
  $('.offer__link3').mouseover(function (event) {
    $('.bl__b3').addClass('good');
    $('.offer-block').addClass('color-w');
    $('.offer__link3').addClass('colorfull');
    $('.offer__link1').addClass('color-w');
    $('.offer__link2').addClass('color-w');
  });
  $('.offer__link3').mouseout(function (event) {
    $('.bl__b3').removeClass('good');
    $('.offer-block').removeClass('color-w');
    $('.offer__link3').removeClass('colorfull');
    $('.offer__link1').removeClass('color-w');
    $('.offer__link2').removeClass('color-w');
  });
});





$('.brg').click(function () {
  $('.fix').toggleClass( "bb" );
  $('.fade-menu').toggleClass( "tdown" );
  $('.brg').toggleClass('crs'); 
  $('.orl').toggleClass('hh'); 
/*               $('.logotype').toggleClass( "mm" );
  $('.brg').toggleClass( "mn" )*/
});


$('.downf').click(function () {
  $( ".mob-drop" ).toggle( );
  $(this).toggleClass('filtd');
});













