'use strict';

const mediaQuery = window.matchMedia('(max-width: 1024px)');
handle(mediaQuery);
mediaQuery.addListener(handle);
function handle(mm) {
	if (mm.matches) {
		$(function () {
			$('.hamburger').on('click', function () {
				$('.hamburger, .global_nav').toggleClass('active');
			});
			$('.global_nav a[href]').on('click', function (event) {
				$('.hamburger').trigger('click');
			});

			$('a[href^="#"]').click(function () {
				var speed = 500;
				var href = $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top;
				$("html, body").animate({
					scrollTop: position
				}, speed, "swing");
				return false;
			});

			ScrollReveal().reveal('.works_img', {
				duration: 1000,
				delay: 100,
				origin: 'bottom',
				distance: '80px',
				easing: 'ease',
			});

			var headimgEnd = $('.nav_end').offset().top;
			var distance = 0;
			$(document).scroll(function () {
				distance = $(this).scrollTop();
				if (headimgEnd <= distance) {
					$('.head_img').addClass('none');
				} else {
					$('.head_img').removeClass('none');
				}
			});
		});
	} else {
		// 1025px以上のときの処理
		$(function () {
			$('a[href^="#"]').click(function () {
				var speed = 500;
				var href = $(this).attr("href");
				var target = $(href == "#" || href == "" ? 'html' : href);
				var position = target.offset().top;
				$("html, body").animate({
					scrollTop: position
				}, speed, "swing");
				return false;
			});
			var navEnd = $('.nav_end').offset().top;
			var distance = 0;
			$(document).scroll(function () {
				distance = $(this).scrollTop();
				if (navEnd <= distance) {
					$('.global_nav').addClass('none');
				} else {
					$('.global_nav').removeClass('none');
				}
			});
		});
	}
}
