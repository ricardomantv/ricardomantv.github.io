var $grid = $('#grid');
function loadMasonry() {
  $grid.imagesLoaded(function() {
    $grid.isotope({
      itemSelector: '.grid-item',
      masonry: {
        fitWidth: true,
        gutter: 20,
        stagger: 50,
        transitionDuration: '0.750s',
        resize: true,
      }
    });
  });
}

// bind filter on click
$('#filter-buttons').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({filter: filterValue});
});

// change selected class on button
$('#filter-buttons').each(function(i, buttonGroup){
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    var $oldSelected = $buttonGroup.find('.btn-primary');
    $oldSelected.removeClass('btn-primary');
    $oldSelected.addClass('btn-secondary');
    $(this).removeClass('btn-secondary');
    $(this).addClass('btn-primary');
  })
});
