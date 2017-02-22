$(function () {

		/*choose menu item
		 =========================================================*/
		$(document).ready(function () {
				var location = window.location.href;
				var cur_url = '' + location.split('/').pop();
				$('.js-main-menu a').each(function () {
						var link = $(this).attr('href');
						if(cur_url == link){
								$('.js-main-menu__item').removeClass('active');
								$(this).addClass('active');
						}
				});
		});
		
    /*show main menu*/
		$('.js-show-main-menu').on('click', function () {
				var current = $(this).attr('data-menu');
				console.log(current);

				$('#' + current).slideToggle();
		});
    
		/*slick.js*/
		$('#js-main-slider').slick({
				arrows: false,
				dots: true,
				fade: true,
				speed: 4000,
				autoplay: true,
				autoplaySpeed: 4000


		});
    
});