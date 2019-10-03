function changeColor() {
  var timing = 0; //　変化するタイミングを微調整する

  var scrollY = window.pageYOffset;
  var body = document.body;

  var trigger1 = document.getElementById('mainVis');
  var trigger2 = document.getElementById('news');
  var trigger3 = document.getElementById('menu');
  var trigger4 = document.getElementById('access');

  var trigger1Y = trigger1.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
  var trigger2Y = trigger2.getBoundingClientRect().top;
  var trigger3Y = trigger3.getBoundingClientRect().top;
  var trigger4Y = trigger4.getBoundingClientRect().top;

  // 白背景の時はbodyの.bg-is-blackを削除
  // 黒背景の時はbodyに.bt-is-blackを付与
  if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
    body.classList.remove('section--white');
  } else if(trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
    body.classList.remove('section--white');
  } else {
    body.classList.add('section--white');
  }
}

window.addEventListener('scroll', changeColor);



$(function () {
    var topBtn = $('#top_btn');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 500; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});



// スクロール値取得
$(function(){
    $(window).scroll(function() {
     　　// .animation 配下の　.anm_modを対象に見る
     $(".animation .anm_mod, .animation .anm_mod01, .titleMenu").each(function() {
      // スクロール中、各UIパーツ　.anm_modがブラウザ画面内に入ったら activeクラスが付与される
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > position - windowHeight) {
       $(this).addClass("active");
      }
      // スクロール中、トップ画面付近まで戻ったら activeクラスを解除 ＝ 何度でもスクロールアニメが表現可能。一度しかアニメーションしたく無ければここを削除してください。
      //if (scroll < 100) {
       //$(this).removeClass("active");
      //}
     });
    });
});


// スライダー Slick
$(function() {
    $('.center-item').slick({
          infinite: true,
          dots:true,
          slidesToShow: 1,
          autoplaySpeed: 5000,
          centerMode: true, //要素を中央寄せ
          centerPadding:'100px', //両サイドの見えている部分のサイズ
          autoplay:true, //自動再生
          responsive: [{
               breakpoint: 480,
                    settings: {
                         centerMode: false,
               }
          }]
     });
});



// Flexbok 複数行左寄せ
$(function(){
  $('.menuCard > .menuItem').each(function(index,element){
    var w = $(element).width();
    $('.menuCard').append('<li style="height:0; width:'+ w +'px; margin:0;"></li>').hidden();
    });
});
