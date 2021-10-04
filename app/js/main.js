$(function () {
  $('.intro-slider__list').slick({
    prevArrow: '<svg class="intro-slider__arrow-left" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M22.0383 32.0149L38.0516 46.6079C38.5771 47.1307 39.4293 47.1307 39.9548 46.6079C40.4802 46.0851 40.4802 45.2369 39.9548 44.7141L24.907 31L39.9534 17.2859C40.4789 16.7631 40.4789 15.9148 39.9534 15.3921C39.428 14.8693 38.5758 14.8693 38.0503 15.3921L22.037 29.9851C21.7569 30.2638 21.6369 30.6332 21.6556 30.9986C21.6381 31.3654 21.7582 31.7348 22.0383 32.0149Z" fill="#505050"/></svg>',

    nextArrow: '<svg class="intro-slider__arrow-right" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M39.9641 29.9851L23.9508 15.3921C23.4254 14.8693 22.5731 14.8693 22.0477 15.3921C21.5222 15.9149 21.5222 16.7631 22.0477 17.2859L37.0954 31L22.049 44.7141C21.5235 45.2369 21.5235 46.0852 22.049 46.6079C22.5745 47.1307 23.4267 47.1307 23.9521 46.6079L39.9654 32.0149C40.2455 31.7362 40.3656 31.3668 40.3469 31.0014C40.3643 30.6346 40.2443 30.2652 39.9641 29.9851Z" fill="#505050"/></svg>',

    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          dots: true,
          slidesToScroll: 1
        }
      },
    ]
  });

  $('.header__catalog-btn').on('click', function () {
    $(this).toggleClass('header__catalog-btn--active');
    $('.header__catalog-list').toggleClass('header__catalog-list--active');
  });

  $('.user-nav__item--search').on('click', function () {
    $('.header__form').toggleClass('header__form--active')
  });

  $('.select-style').styler();

  $('.header__burger').on('click', function () {
    $(this).toggleClass('header__burger--active');
    $('.sidebar').toggleClass('sidebar--active');
    $('.sidebar__close').removeClass('sidebar__close--active');
    $('.content-overflow').toggleClass('content-overflow--show');
    $('body').toggleClass('overflow');
  });

  $('.sidebar__close').on('click', function () {
    $(this).toggleClass('sidebar__close--active');
    $('.sidebar').removeClass('sidebar--active');
    $('.header__burger').removeClass('header__burger--active');
    $('.content-overflow').removeClass('content-overflow--show');
    $('body').removeClass('overflow');
  });

  $('.filter__btn').on('click', function () {
    $(this).toggleClass('filter__btn--active');
  });

  $('.filter__btn--categories').on('click', function () {
    $('.filter__list--categories').toggleClass('filter__list--active');
  });

  $('.filter__btn--brands').on('click', function () {
    $('.filter__list--brands').toggleClass('filter__list--active');
  });

  $('.filter__btn--offers').on('click', function () {
    $('.filter__list--offers').toggleClass('filter__list--active');
  });

  $('.filter__btn--price').on('click', function () {
    $('.filter__price-wrapper').toggleClass('filter__price-wrapper--active');
  });

  $('.catalog-content__view-btn').on('click', function () {
    $('.catalog-content__view-btn').removeClass('catalog-content__view-btn--active');
    $(this).addClass('catalog-content__view-btn--active');
  });

  $('.catalog-content__view-btn--list').on('click', function () {
    $('.catalog-content__list').addClass('catalog-content__list--modifiled');
  });

  $('.catalog-content__view-btn--grid').on('click', function () {
    $('.catalog-content__list').removeClass('catalog-content__list--modifiled');
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });



  $('.select-style').on('click', function () {
    $(this)
    .closest('div')
    .find('.jq-selectbox__trigger')
    .toggleClass('jq-selectbox__trigger--active');
  });

  $('.select-style').on('click', function () {
    $(this)
    .closest('div')
    .find('.jq-selectbox__select')
    .toggleClass('jq-selectbox__select--active');
  });

  $(document).mouseup(function (e){
		var selectBtn = $('.jq-selectbox__select--active'); 
		if (!selectBtn.is(e.target)
		    && selectBtn.has(e.target).length === 0) {
      selectBtn.removeClass('jq-selectbox__select--active');
		} 
	});

  $(document).mouseup(function (e){
		var sidebar = $('.sidebar--active'); 
		if (!sidebar.is(e.target)
		    && sidebar.has(e.target).length === 0) {
      sidebar.removeClass('sidebar--active');
      $('.content-overflow').removeClass('content-overflow--show');
      $('.header__burger').removeClass('header__burger--active');
      $('.sidebar').removeAttr ("");
      $('body').removeClass('overflow');
		} 
	});


  // prise-slider
  var $range = $(".filter__price-slider"),
  $inputFrom = $(".filter__price-input--from"),
  $inputTo = $(".filter__price-input--to"),
  instance,
  min = 0,
  max = 1000,
  from = 100,
  to = 900;

  $('.filter__price-slider').ionRangeSlider({
    type: "double",
      min: min,
      max: max,
      from: from,
      to: to,
      prefix: "₽",
      onStart: updateInputs,
      onChange: updateInputs
  });

  instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});

  ​
//mixitUp

  var mixitup1 = document.querySelector('[data-ref="mixitup-1"]');
  var mixitup2 = document.querySelector('[data-ref="mixitup-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  }

  var mixer1 = mixitup(mixitup1, config);
  var mixer2 = mixitup(mixitup2, config);
});