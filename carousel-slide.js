
	var slideInterval=3000;
	var slideNow=1;
	var slideCount=$('.slide-wrapper').children().length;
	var translateWidth=0;
	function nextSlide(){
		if(slideNow==slideCount||slideNow<=0||slideNow>slideCount){
			$('.slide-wrapper').css('transform','translate(0,0)');
			slideNow=1;
		} else{
			translateWidth=-$('.view-port').width()*(slideNow);
			$('.slide-wrapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'webkit-transform': 'translate('+translateWidth+'px,0)',
				'-ms-transform': 'translate('+translateWidth+'px,0)',
				'transition':'all 1s ease',
			});
			slideNow++;
		}
	}
	
	function prevSlide(){
		
		if(slideNow==1||slideNow<=0||slideNow>slideCount){
			translateWidth=-$('.view-port').width()*(slideCount-1);
			console.log("Stop");
			$('.slide-wrapper').css({
				'transform':'translate('+translateWidth+'px,0)',
				'webkit-transform':'translate('+translateWidth+'px,0)',
				'ms-transform':'translate('+translateWidth+'px,0)',
				'transition':'all 1s ease',
			});
			slideNow=slideCount;
		}else{
			translateWidth=-$('.view-port').width()*(slideNow-2);
			$('.slide-wrapper').css({
				'transform':'translate('+translateWidth+'px,0)',
				'-webkit-transform':'translate('+translateWidth+'px,0)',
				'-ms-transform':'translate('+translateWidth+'px,0)',
				'transition':'all 1s ease',
			});
			slideNow--;
		}
	}

   
	
	
	
	$(document).ready(function(){
		var switchInterval=setInterval(nextSlide,slideInterval);
		
	   
        
		
		$('.background-block').hover(function(){
		clearInterval(switchInterval);
		},function(){
			switchInterval=setInterval(nextSlide,slideInterval);
		});
		
		
		$('.prev-btn').click(function(){
			prevSlide();
		});
		
		$('.next-btn').click(function(){
			nextSlide();
		});
		
		
	});

	
