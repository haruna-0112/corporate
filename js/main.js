$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });

 
  $(function () {
    $('.js-menu__item__link').each(function () {
      $(this).on('click', function () {
        $(this).toggleClass('on');
        $("+.submenu", this).slideToggle()
        return false;
      });
    });
  });
  //topスライドショー
  $(".bg-slider").bgSwitcher({
    images: ["img/top1.jpg", "img/top2.jpg", "img/top3.jpg"], // 切り替える背景画像を指定
    interval: 4000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間を指定します。
    easing: "swing", // エフェクトのイージングをlinear,swingから指定
  });

});