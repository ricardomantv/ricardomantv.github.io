function loadMasonry() {
  var $grid = $('.grid').masonry({
    isFitWidth: true,
    gutter: 20,
    itemSelector: '.grid-item',

    isAnimated: true,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
}
