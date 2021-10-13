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

  $('.brands__list').slick({
    slidesToShow: 6,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  
  $('.recent__list').slick({
    prevArrow: '<svg class="recent__arrow recent__arrow--left" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M22.0383 32.0149L38.0516 46.6079C38.5771 47.1307 39.4293 47.1307 39.9548 46.6079C40.4802 46.0851 40.4802 45.2369 39.9548 44.7141L24.907 31L39.9534 17.2859C40.4789 16.7631 40.4789 15.9148 39.9534 15.3921C39.428 14.8693 38.5758 14.8693 38.0503 15.3921L22.037 29.9851C21.7569 30.2638 21.6369 30.6332 21.6556 30.9986C21.6381 31.3654 21.7582 31.7348 22.0383 32.0149Z" fill="#505050"/></svg>',

    nextArrow: '<svg class="recent__arrow recent__arrow--right" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M39.9641 29.9851L23.9508 15.3921C23.4254 14.8693 22.5731 14.8693 22.0477 15.3921C21.5222 15.9149 21.5222 16.7631 22.0477 17.2859L37.0954 31L22.049 44.7141C21.5235 45.2369 21.5235 46.0852 22.049 46.6079C22.5745 47.1307 23.4267 47.1307 23.9521 46.6079L39.9654 32.0149C40.2455 31.7362 40.3656 31.3668 40.3469 31.0014C40.3643 30.6346 40.2443 30.2652 39.9641 29.9851Z" fill="#505050"/></svg>',

    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4, 
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          slidesToScroll: 2,
        }
      }
    ]

  });

  $('.star').rateYo({
    readOnly: true,
    starWidth: '16px',
    normalFill: 'rgba(193, 193, 193, 0.3)',
    ratedFill: '#FFB800',
  });

  $('.reviews-tabs__star').rateYo({

  });

  $('.header__catalog-btn').on('click', function () {
    $(this).toggleClass('header__catalog-btn--active');
    $('.header__catalog-list').toggleClass('header__catalog-list--active');
  });

  $('.user-nav__item--search').on('click', function () {
    $('.header__form').toggleClass('header__form--active')
  });

  $('.select-style').styler();

  let filter = $('.filter-mobile');
  let closeBtn = $('.filter-mobile__close');
  let mobileFilter = $('.mobile-filter');
  let menuClose = $('.sidebar__close');
  let overlay = $('.content-blur');
  let body = $('body');
  let mobileMenu = $('.sidebar')

  $('.header__burger').on('click', function (){
    mobileMenu.toggleClass('sidebar--active');

    if(mobileMenu.hasClass('sidebar--active')) {
      overlay.toggleClass('content-blur--show');
      body.toggleClass('scroll-lock');

      menuClose.on('click', function () {
        mobileMenu.removeClass('sidebar--active');
        overlay.removeClass('content-blur--show');
        body.removeClass('scroll-lock');
      });
    }
  });

  mobileFilter.on('click', function(){
    filter.toggleClass('filter-mobile--active');

    if (filter.hasClass('filter-mobile--active')) {
      overlay.toggleClass('content-blur--show');
      body.toggleClass('scroll-lock');

      closeBtn.on('click', function () {
        filter.removeClass('filter-mobile--active');
        overlay.removeClass('content-blur--show');
        body.removeClass('scroll-lock');
      });
    }
  });

  overlay.on('click', function () {
    filter.removeClass('filter-mobile--active');
    overlay.removeClass('content-blur--show');
    body.removeClass('scroll-lock');
    mobileMenu.removeClass('sidebar--active');
  });

  $('.filter__title').on('click', function () {
    $(this).toggleClass('filter__title--active').next().slideToggle(700);
  });

  $('.view-catalog__btn').on('click', function () {
    $('.view-catalog__btn').removeClass('view-catalog__btn--active');
    $(this).addClass('view-catalog__btn--active');
  });

  $('.view-catalog__btn--list').on('click', function () {
    $('.catalog__list').addClass('catalog__list--modifiled');
  });

  $('.view-catalog__btn--grid').on('click', function () {
    $('.catalog__list').removeClass('catalog__list--modifiled');
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

 $(window).resize(function() {
    if ($(window).height() > 576) {
     $('.catalog__list').removeClass('catalog__list--modifiled');
    }
    else {
      $('catalog__list').addClass('catalogt__list--modifiled');
      $('.view-catalog__btn--list').removeClass('view-catalog__btn--active');
      $('.view-catalog__btn--grid').addClass('view-catalog__btn--active');
    }
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

  $('.tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).toggleClass('tabs__link--active');
    $('.tabs__content-item').removeClass('tabs__content-item--active');
    $($(this).attr('href')).toggleClass('tabs__content-item--active');
  });

  $(document).mouseup(function (e){
		var selectBtn = $('.jq-selectbox__select--active'); 
		if (!selectBtn.is(e.target)
		    && selectBtn.has(e.target).length === 0) {
      selectBtn.removeClass('jq-selectbox__select--active');
		} 
	});


  $('.product__like').on('click', function () {
    $(this).toggleClass('product__like--active')
  });

  $('.comments-form__label').on('click', function () {
    $('.comments-form__label').removeClass('comments-form__label--selected');
    $(this).addClass('comments-form__label--selected').prevAll('.comments-form__label').addClass('comments-form__label--selected');
  });

  $('.comments-form__label').hover(function() {
    $(this).toggleClass('comments-form__label--hover').prevAll('.comments-form__label').toggleClass('comments-form__label--hover');
  });

  $('.slider-product__list').slick({
    prevArrow: '<svg class="slider-product__arrow slider-product__arrow--left" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="white"/><path d="M22.0383 32.0149L38.0516 46.6079C38.5771 47.1307 39.4293 47.1307 39.9548 46.6079C40.4802 46.0851 40.4802 45.2369 39.9548 44.7141L24.907 31L39.9534 17.2859C40.4789 16.7631 40.4789 15.9148 39.9534 15.3921C39.428 14.8693 38.5758 14.8693 38.0503 15.3921L22.037 29.9851C21.7569 30.2638 21.6369 30.6332 21.6556 30.9986C21.6381 31.3654 21.7582 31.7348 22.0383 32.0149Z" fill="#505050"/></svg>',

    nextArrow: '<svg class="slider-product__arrow slider-product__arrow--right" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="white"/><path d="M39.9641 29.9851L23.9508 15.3921C23.4254 14.8693 22.5731 14.8693 22.0477 15.3921C21.5222 15.9149 21.5222 16.7631 22.0477 17.2859L37.0954 31L22.049 44.7141C21.5235 45.2369 21.5235 46.0852 22.049 46.6079C22.5745 47.1307 23.4267 47.1307 23.9521 46.6079L39.9654 32.0149C40.2455 31.7362 40.3656 31.3668 40.3469 31.0014C40.3643 30.6346 40.2443 30.2652 39.9641 29.9851Z" fill="#505050"/></svg>',

    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.slick-slider').slick('setPosition');

  $(document).on('click', '.slick-cloned', function(e) {
    var $slides = $(this)
    .parent()
    .children('.slick-slide:not(.slick-cloned)');
  
    $slides
      .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
      .trigger("click.fb-start", { $trigger: $(this) });
  
    return false;
  });

  $(document).on('opening', '.remodal', function () {
    $('.slider-popup__list').slick({
      prevArrow: '<svg class="slider-popup__arrow slider-popup__arrow--left" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M22.0383 32.0149L38.0516 46.6079C38.5771 47.1307 39.4293 47.1307 39.9548 46.6079C40.4802 46.0851 40.4802 45.2369 39.9548 44.7141L24.907 31L39.9534 17.2859C40.4789 16.7631 40.4789 15.9148 39.9534 15.3921C39.428 14.8693 38.5758 14.8693 38.0503 15.3921L22.037 29.9851C21.7569 30.2638 21.6369 30.6332 21.6556 30.9986C21.6381 31.3654 21.7582 31.7348 22.0383 32.0149Z" fill="#505050"/></svg>',

      nextArrow: '<svg class="slider-popup__arrow slider-popup__arrow--right" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M39.9641 29.9851L23.9508 15.3921C23.4254 14.8693 22.5731 14.8693 22.0477 15.3921C21.5222 15.9149 21.5222 16.7631 22.0477 17.2859L37.0954 31L22.049 44.7141C21.5235 45.2369 21.5235 46.0852 22.049 46.6079C22.5745 47.1307 23.4267 47.1307 23.9521 46.6079L39.9654 32.0149C40.2455 31.7362 40.3656 31.3668 40.3469 31.0014C40.3643 30.6346 40.2443 30.2652 39.9641 29.9851Z" fill="#505050"/></svg>',
      dots: true,
      responsive: [
        {
          breakpoint: 577,
          settings: {
            arrows: false,
          }
        }
      ]
    });
    $('.slider-popup__list').slick('setPosition');
  });

  $(document).on('opened', '.remodal', function () {
    $('.slider-popup__list').slick({
      prevArrow: '<svg class="slider-popup__arrow slider-popup__arrow--left" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M22.0383 32.0149L38.0516 46.6079C38.5771 47.1307 39.4293 47.1307 39.9548 46.6079C40.4802 46.0851 40.4802 45.2369 39.9548 44.7141L24.907 31L39.9534 17.2859C40.4789 16.7631 40.4789 15.9148 39.9534 15.3921C39.428 14.8693 38.5758 14.8693 38.0503 15.3921L22.037 29.9851C21.7569 30.2638 21.6369 30.6332 21.6556 30.9986C21.6381 31.3654 21.7582 31.7348 22.0383 32.0149Z" fill="#505050"/></svg>',

      nextArrow: '<svg class="slider-popup__arrow slider-popup__arrow--right" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M39.9641 29.9851L23.9508 15.3921C23.4254 14.8693 22.5731 14.8693 22.0477 15.3921C21.5222 15.9149 21.5222 16.7631 22.0477 17.2859L37.0954 31L22.049 44.7141C21.5235 45.2369 21.5235 46.0852 22.049 46.6079C22.5745 47.1307 23.4267 47.1307 23.9521 46.6079L39.9654 32.0149C40.2455 31.7362 40.3656 31.3668 40.3469 31.0014C40.3643 30.6346 40.2443 30.2652 39.9641 29.9851Z" fill="#505050"/></svg>',
      dots: true,
      responsive: [
        {
          breakpoint: 577,
          settings: {
            arrows: false,
          }
        }
      ]
    });
    $('.slider-popup__list').slick('setPosition');
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
//mixitUp -------------------Помочь с рваной анимацией в слайдере товаров--------------------------------

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