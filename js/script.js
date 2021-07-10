//DOMを読み込んだら
$(function(){



    // header ul li a をクリックしたら
    $('.contents-bar a, .full-nav a').on('click', function(evt){
        evt.preventDefault();


        //1 リンク先の変数を付ける
        var targetName = $(this).attr('href');
        console.log(targetName);

        //2 targetNameの座標を保存する変数を作る
        var targetPos = $(targetName).offset().top; //offset 2つの値が仕様 object {top left}
        console.log(targetPos);

        // $('html, body').animate({scrollTop:targetPos - 70},1000);
        $('html, body').animate({scrollTop:targetPos - 70},{duration:1000, easing:'easeOutQuad', complete:callBack});

    });

    function callBack(){
        console.log('アニメーション終わったよ');
    }




    //モーダル表示時のスクロール無効化処理

    var scrollBlockerFlag;
    var scrollpos;

    function scrollBlocker(flag){
      if(flag){
        scrollpos = $(window).scrollTop();
        $('body').addClass('js_fixed').css({'top': -scrollpos});
        scrollBlockerFlag = true;
      } else {
        $('body').removeClass('js_fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        scrollBlockerFlag = false;
      }
    }


    //Galleryのモーダル処理
    $(function(){

      var focusFlag = false;

      $(document).on('click','.js_modalButton',function(){
        var imgurl = $(this).data('src');
        $('.bl_modalBlock_wrapper').css('background-image','url(' + imgurl + ')');
        $('body').addClass('js_openModal');
        scrollBlocker(true);
        setTimeout(function(){
          focusFlag = true;
        },200);
      });
      $(document).on('click','.js_modalButton_close',function(){
        $('body').removeClass('js_openModal');
        scrollBlocker(false);
        focusFlag = false;
      });

      $(document).on('click','.bl_modalBlock_closeButton',function(){
        $('body').removeClass('js_openModal');
        scrollBlocker(false);
        focusFlag = false;
      });

      //モーダル以外の部分がクリックされた場合にモーダルを閉じる処理
      $(document).on('click touchend', function(event) {
        if (!$(event.target).closest('.bl_modalBlock_wrapper').length && focusFlag) {
          focusFlag = false;
          scrollBlocker(false);
          $('body').removeClass('js_openModal');
        }
      });
    });


});


function init() {
    // スクロールして何ピクセルでアニメーションさせるか
    var px_change   = 510;
    // スクロールのイベントハンドラを登録
    window.addEventListener('scroll', function(evt){
        // 変化するポイントまでスクロールしたらクラスを追加
        if ( $(window).scrollTop() > px_change ) {
        $("header").addClass("bgColor");
        // 変化するポイント以前であればクラスを削除
        } else if ( $("header").hasClass("bgColor") ) {
        $("header").removeClass("bgColor");
        }
    });
}
window.onload = init();



function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
