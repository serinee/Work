$(document).ready(function(){

	//비디오 슬라이드
	var videos = $('.video-area ul');
	var video_count = videos.children().length;
	var video_position = 1 ;
	$('.btn-prev').click(function(){
		back();
	});

	$('.btn-next').click(function(){
		next();
	});

	function back(){
		if(1<video_position){
			videos.animate({left:'+=750px'});
			video_position--;
		}
	}
	function next(){
		if(video_count > video_position){
			videos.animate({left:'-=750px'});
			video_position++;

		}
	}

	//시계 flipclock
	var clock;
	clock = $('.clock').FlipClock({
		clockFace:'TwentyFourHourClock'
	});

	//글자 수 카운트
	$('.text-area').keyup(function(e){
		var content = $(this).val();
		$('.text-count').html("("+content.length+"/ 500)");
	});


	//board page-wrap
	$('.page-wrap a').eq(5).addClass('active');
	$('.page-wrap a').click(function(){
		$('.page-wrap a').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	
	


})