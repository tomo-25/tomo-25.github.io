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
  /*モーダルウィンドー*/
  $(function () {
    $("a.more").on("click", function () {
      $(".modal").addClass("open");
      $(".modal-title").html($(this).parents("article").find(".article-title").html());
      $(".modal-content").html($(this).parents('article').find(".article-content").html());
      $(".modal-image > img").attr(
        `src`,
        $(this).parents("article").find(`img`).attr(`src`)
      );
    });
    $(".modal-close-btn , .modal-bg").on("click", function () {
      $(".modal").removeClass("open");
      console.log("hogehoge");
      return false;
    });
  });
