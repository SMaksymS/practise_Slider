


// Подключаем наш slider
	$(document).ready(function(){
		$('.slider').slick({
			arrows:true,
			dots:true,
			adaptiveHeight:true,
			slidesToShow:4,
			slidesToScroll:1,
			speed:100,
			infinite:true,
			autoplay:false,
			// autoplaySpeed:,
			pauseOnFocus:true,
			pauseOnHover:true,
			draggable:false,
			swipe:true,
			touchMove:true,
			waitForAnimate:false,
			// variableWidth:true,
			// mobileFirst:true,

			responsive: [{
				breakpoint:1000,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint:700,
				settings: {
					slidesToShow:1,
				}
			},
		

			
				]

		});
	})
	// Подключаем наш slider
	