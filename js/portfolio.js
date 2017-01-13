function loadMasonry() {
  var $grid = $('#grid');
  $grid.imagesLoaded(function() {
    $grid.masonry({
      fitWidth: true,
      gutter: 20,
      stagger: 30,
      itemSelector: '.grid-item',
    });
  });

  /*
  var $grid = $('.grid').masonry({
    fitWidth: true,
    gutter: 20,
    stagger: 30,
    itemSelector: '.grid-item',

    isAnimated: true,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
  */
}
