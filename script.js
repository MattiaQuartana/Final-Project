$(document).ready(function() {
    $(".div-block.black").click(function() {
      $("#popup").show();
    });
  });
  

const owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });

  const modal = $('.modal');
  const poly = $('#poly');
  const close = $('.close');

  poly.click(() => {
    modal.fadeIn();
    owl.trigger('refresh.owl.carousel');
    owl.trigger('play.owl.autoplay');
  });

  close.click(() => {
    modal.fadeOut();
    owl.trigger('stop.owl.autoplay');
  });