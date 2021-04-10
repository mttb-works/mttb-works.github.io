'use strict';

const mediaQuery = window.matchMedia('(max-width: 1024px)');
// ページが読み込まれた時に実行
handle(mediaQuery);
// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addListener(handle);
function handle(mm) {
	if (mm.matches) {
		// 1024px以下のときの処理
		$(function () {
			// ハンバーガーメニュー
			$('.hamburger').on('click', function () {
				$('.hamburger, .global_nav').toggleClass('active');
			});
			$('.global_nav a[href]').on('click', function (event) {
				$('.hamburger').trigger('click');
			});
			// スムーススクロール
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
			// スクロールフェード
			ScrollReveal().reveal('.about_img, .about_text, .history_text, .works_img', {
				duration: 1000,
				delay: 100,
				origin: 'bottom',
				distance: '80px',
				easing: 'ease',
			});
			// スクロールNONE
			var headimgEnd = $('.form_flex_item').offset().top;
			//ページ上部からの距離を取得
			var distance = 0;
			$(document).scroll(function () {
				distance = $(this).scrollTop();
				//スクロールした距離を取得
				if (headimgEnd <= distance) {
					//スクロール距離が『.form_flex_item』の位置を超えたら
					$('.head_img').addClass('none');
					//class『none』を追加
				} else {
					$('.head_img').removeClass('none');
					//『.form_flex_item』より上部に戻ったらclass『none』を削除
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
			ScrollReveal().reveal('.about_img, .about_text, .history_text', {
				duration: 1000,
				delay: 100,
				origin: 'bottom',
				distance: '80px',
				easing: 'ease',
			});
			ScrollReveal().reveal('.fade_01', {
				duration: 1000,
				delay: 100,
				origin: 'bottom',
				distance: '80px',
				easing: 'ease',
			});
			ScrollReveal().reveal('.fade_02', {
				duration: 1000,
				delay: 200,
				origin: 'bottom',
				distance: '80px',
				easing: 'ease',
			});
			ScrollReveal().reveal('.fade_03', {
				duration: 1000,
				delay: 300,
				origin: 'bottom',
				distance: '80px',
				easing: 'ease',
			});
			var navEnd = $('.contact').offset().top;
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
