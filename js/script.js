$(function () {
	$('#sideNav').load("/html/nav.html");
	$('#bootstrap-web').load("/html/bootstrap.html");
});

$(document).ready(function(){

	// 선택한 값으로 이동
	$(document).on('click', '.gotoB', function(){
		$('this').removeAttr("href");
		var offset = $('#Bootstrap').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});

	$(document).on('click', '.gotoBT', function(){
		$('this').removeAttr("href");
		var offset = $('#Bootstrap-theory').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});

	$(document).on('click', '.gotoBE', function(){
		$('this').removeAttr("href");
		var offset = $('#Bootstrap-Ex').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});
	

});