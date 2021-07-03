//DOMを読み込んだら
$(function(){

    // .pagetopのaをクリックしたら
    $('.pagetop a').on('click', function(evt){
        evt.preventDefault();//イベントの停止
        console.log(evt.target);

        //ページ全体を一番上にスクロールされる
        $('html, body').animate({scrollTop:0},1000,function(){
            console.log('ページトップのアニメーションが終わったよ');
        });
    });

    // header ul li a をクリックしたら
    $('.contents-bar a, .full-nav a').on('click', function(evt){
        evt.preventDefault();


        //1 リンク先の変数を付ける
        var targetName = $(this).attr('href');

        //2 targetNameの座標を保存する変数を作る
        var targetPos = $(targetName).offset().top; //offset 2つの値が仕様 object {top left}

        // $('html, body').animate({scrollTop:targetPos - 70},1000);
        $('html, body').animate({scrollTop:targetPos - 70},{duration:1000, easing:'easeOutQuad', complete:callBack});

    });



    

      // コース画像モーダル表示イベント
      $(".photo-item img").click(function () {
        // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
        $("#grayDisplay").html($(this).prop("outerHTML"));
        //そして、fadeInで表示する。
        $("#grayDisplay").fadeIn(200);
        return false;
      });

      // コース画像モーダル非表示イベント
      // モーダル画像背景 または 拡大画像そのものをクリックで発火
      $("#grayDisplay").click(function () {
        // 非表示にする
        $("#grayDisplay").fadeOut(200);
        return false;
      });


});
