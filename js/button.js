// JavaScript Document
(function ($) {
  $(function () {
    $('#nav-toggle').on('click', function () {
      $('body').toggleClass('open');
    });
  });
})(jQuery);

// スクロール
$('a[href^="#"]').click(function () {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

// グローバルナビメニューのリンクをクリックしたらページを閉じる
$(function () {
  $("#gloval-nav ul li a").on("click", function () {
    $("#gloval-nav ul").toggleClass();
    $("body").removeClass("open");
  });
});


// スクロールスライドイン
let winHeight, winScroll, scrollPos;
$(window).on('load scroll', function () {
  winScroll = $(window).scrollTop();
  winHeight = $(window).height();
  scrollPos = winHeight * 0.9 + winScroll;
  $(".slidein").each(function () {
    if ($(this).offset().top <= scrollPos) {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });
});

