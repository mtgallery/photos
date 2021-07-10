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
