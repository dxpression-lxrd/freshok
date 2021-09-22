$(function(){
  $('.intro-slider__list').slick({
    prevArrow: '<svg class="intro-slider__arrow-left" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M22.0383 32.0149L38.0516 46.6079C38.5771 47.1307 39.4293 47.1307 39.9548 46.6079C40.4802 46.0851 40.4802 45.2369 39.9548 44.7141L24.907 31L39.9534 17.2859C40.4789 16.7631 40.4789 15.9148 39.9534 15.3921C39.428 14.8693 38.5758 14.8693 38.0503 15.3921L22.037 29.9851C21.7569 30.2638 21.6369 30.6332 21.6556 30.9986C21.6381 31.3654 21.7582 31.7348 22.0383 32.0149Z" fill="#505050"/></svg>',

    nextArrow: '<svg class="intro-slider__arrow-right" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="61" height="61" rx="6.5" fill="white" fill-opacity="0.8" stroke="#C1C1C1"/><path d="M39.9641 29.9851L23.9508 15.3921C23.4254 14.8693 22.5731 14.8693 22.0477 15.3921C21.5222 15.9149 21.5222 16.7631 22.0477 17.2859L37.0954 31L22.049 44.7141C21.5235 45.2369 21.5235 46.0852 22.049 46.6079C22.5745 47.1307 23.4267 47.1307 23.9521 46.6079L39.9654 32.0149C40.2455 31.7362 40.3656 31.3668 40.3469 31.0014C40.3643 30.6346 40.2443 30.2652 39.9641 29.9851Z" fill="#505050"/></svg>',
  });

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

