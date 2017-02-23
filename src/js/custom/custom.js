$(function () {

		/*choose menu item
		 =========================================================*/
		$(document).ready(function () {

				$('.js-main-menu a').each(function () {
						var location = window.location.href;
						var link = this.href;
						if(location == link) {
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

	/*validation*/
		$('.contacts__form').validate({
				"rules": {
						name: {
								required: true
						},
						email: {
								required: true,
								email: true
						},
						phone: {
								required: true,
								digits: true
						}

				}
		});

    
});