$(function () {
  //アニメーション属性を持つ要素を非表示、animated属性を追加
  $('*[animation]').addClass('invisible animated');

  $(window).scroll(function () {
    $('*[animation]').each(function () {
      //アニメーションをさせる要素の上の位置
      var imgPos = $(this).offset().top;
      //ウインドウ上部の位置
      var scroll = $(window).scrollTop();
      //アニメーションを発火させる位置
      var position = imgPos - window.innerHeight + window.innerHeight / 5;

      //animation属性に記載されたアニメーション名を取得
      if (this.hasAttribute('animation')) {
        var animation = this.getAttribute('animation');
      }
      //発火位置まで来たら要素を表示し、アニメーションをclass名に追加
      if (scroll > position) {
        $(this).removeClass('invisible').addClass(animation);
      }
    });
  });
});

//アコーディオン
$(function () {
  $('.article-title').on('click', function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass('open');
  });
});

//スムーススクロール
$(function () {
	$("a[href*=#]:not([href=#])").click(function () {
		var target = $($(this).attr("href")).offset().top;
		target -= 60;
		$("html, body").animate({ scrollTop: target }, 500);
		return false;
	});
});