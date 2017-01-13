function loadMasonry() {
  var $grid = $('#grid');
  $grid.imagesLoaded(function() {
    $grid.masonry({
      fitWidth: true,
      gutter: 20,
      stagger: 50,
      itemSelector: '.grid-item',
      transitionDuration: '0.750s',
      resize: true,
    });
  });
}
