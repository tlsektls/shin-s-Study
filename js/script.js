$(function () {
	$('#sideNav').load("/html/nav.html");
	$('#bootstrap-web').load("/html/bootstrap.html");
	$('#jQuery-web').load("/html/jQuery.html");
	//$('#chart-web').load("/html/chart.html");
	

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

	$(document).on('click', '.gotoC', function(){
		$('this').removeAttr("href");
		var offset = $('#Chart').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});
	
	$(document).on('click', '.gotoCT', function(){
		$('this').removeAttr("href");
		var offset = $('#Chart-theory').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});

	$(document).on('click', '.gotoCTT', function(){
		$('this').removeAttr("href");
		var offset = $('#Chart-tool').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});

	$(document).on('click', ' .gotoJQ', function(){
		$('this').removeAttr("href");
		var offset = $('#jQuery-web').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});

	$(document).on('click', ' .gotoJQT', function(){
		$('this').removeAttr("href");
		var offset = $('#jQuery-theory').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});

	$(document).on('click', ' .gotoA', function(){
		$('this').removeAttr("href");
		var offset = $('#json-web').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});
	$(document).on('click', ' .gotoAT', function(){
		$('this').removeAttr("href");
		var offset = $('.wrap-swiper').offset();
		//선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top}, 400);
	});



});