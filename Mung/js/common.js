// 모바일화면 햄버거메뉴
$(document).ready(function(){
	$('.trigger a').on('click', function(){
		$('.ham_box').show(); 
	});
	$('.exit a').on('click', function(){
		$('.ham_box').hide();
	});
});

// 메인화면 메뉴
$(document).ready(function(){
	$('.nav_right a').on('click', function(){
		$('.nav_box').show(); 
	});
	$('.exit a').on('click', function(){
		$('.nav_box').hide();
	});
});
