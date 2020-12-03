/*ハンバーガーメニュー*/
(function($) {
    var $body   = $('body');
    var $btn   = $('.nav-toggle');
    var $mask  = $('#mask');
    var $wrapper = $('.nav-wrapper')
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $body.hasClass( open ) ) {
        $body.addClass( open );
      } else {
        $body.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $body.removeClass( open );
    });
    //wrapper close
    $wrapper.on('click',function() {
      $body.removeClass ( open );
    });
  } )(jQuery);
  /*モーダルウィンドウ*/
  $(function () {
    $("a.more").on("click", function () {
      scrollPos = $(window).scrollTop();
      $(".modal").addClass("open");
      $('body').addClass('fixed').css({ top: -scrollPos });
      $(".modal-title").html($(this).parents("article").find(".article-title").html());
      $(".modal-content").html($(this).parents('article').find(".article-content").html());
      $(".modal-image > img").attr(
        `src`,
        $(this).parents("article").find(`img`).attr(`src`)
      );
    });
    $(".modal-close-btn , .modal-bg").on("click", function () {
      $(".modal").removeClass("open");
      $('body').removeClass('fixed').css({ top: 0 });
      $(window).scrollTop(scrollPos);
      console.log("hogehoge");
      return false;
    });
  });
