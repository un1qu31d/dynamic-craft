AOS.init();

$(function () {
  $('.header-switcher').on('click', function () {
    $('.component.type--header').toggleClass('status--active-menu');
  });

  $('.scroll-top-switcher').on('click', function () {
    (function scrollUp(to, duration) {
      setTimeout(function() {
        document.querySelector('html').scrollTop = Math.max(document.querySelector('html').scrollTop + ((to - document.querySelector('html').scrollTop) / duration * 10), 0);
        if (document.querySelector('html').scrollTop > to) scrollUp(to, duration - 10);
      }, 10);
    })(0, 600);
  });

  $('.component.type--slider').slider();
});