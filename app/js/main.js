$(function(){
  $('.slider').slick({
    prevArrow: '<img class="slider__arrow-left" src="images/slider/arrow-left.svg" alt="Стрелка влево">',
    nextArrow: '<img class="slider__arrow-right" src="images/slider/arrow-right.svg" alt="Стрелка вправо">',
  });

  var mixer = mixitup('.best-goods__list');
});
