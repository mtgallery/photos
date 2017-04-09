$(function(){
	if $('menu-trigger').on('click', function() {
		$('wrapper').addClass('bgFull');
		// 変化するポイント以前であればクラスを削除
	} else if ( $('wrapper').hasClass('bgFull') ) {
		$('wrapper').removeClass('bgFull');
	}
});
