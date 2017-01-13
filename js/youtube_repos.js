/*
// Find all YouTube videos
var $allVideos = $(".iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("container-fluid");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

    alert($(this).data('aspectRatio'));
});



// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();
*/

var $iframe = $('#video');
var $fluidEl = $('.wrapper');
$iframe.data('aspectRatio', $iframe.height / $iframe.width);
$iframe.removeAttr('width');
$iframe.removeAttr('height');

// When the window is resized
$(window).resize(function() {
  var newWidth = $fluidEl.width();
  $iframe.width(newWidth);
  $.iframe.height(newWidth * $iframe.data('aspectRatio'));
}).resize();
