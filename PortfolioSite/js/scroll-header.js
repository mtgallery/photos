function init() {
// スクロールして何ピクセルでアニメーションさせるか
var px_change   = 1000;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(evt){
// 変化するポイントまでスクロールしたらクラスを追加
if ( $(window).scrollTop() > px_change ) {
$("header").addClass("changeColor-gray");
// 変化するポイント以前であればクラスを削除
} else if ( $("header").hasClass("changeColor-white") ) {
$("header").removeClass("changeColor-gray");
}
});
}
window.onload = init();
