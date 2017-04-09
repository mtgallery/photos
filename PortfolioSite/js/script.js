//DOMを読み込んだら
$(function(){

    console.log('DOMを読み込んだよ');

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
    $('.contents-bar a').on('click', function(evt){
        console.log('クリックしたよ');
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



    // スクロール中のイベントについて
    $(window).scroll(function(){

        //スクロール値をとる
        var dy = $(this).scrollTop();

        console.log(dy);

    });

});
