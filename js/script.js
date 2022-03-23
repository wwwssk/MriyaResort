var swiper = new Swiper(".choose__main-swiper", {
	navigation: {
		nextEl: ".swiper-btn-next",
		prevEl: ".swiper-btn-prev",
	},
	pagination: {
		el: ".swiper-my-pagination",
		clickable: true,
	},
	keyboard: true,
	speed: 300,
	spaceBetween: 1500,
	allowTouchMove: false,
});
var swiper = new Swiper(".choose__swiper-first", {
	slidesPerView: 3,
	spaceBetween: 40,
	freeMode: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});
var swiper = new Swiper(".choose__swiper-second", {
	slidesPerView: 3,
	spaceBetween: 40,
	freeMode: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});
var swiper = new Swiper(".choose__swiper-third", {
	slidesPerView: 3,
	spaceBetween: 40,
	freeMode: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});
const headBurger = document.querySelector('.head__burger');
const menu__body = document.querySelector('.head-menu__body');

if (headBurger) {
	headBurger.addEventListener("click", function(e) {
		headBurger.classList.toggle('active');
		menu__body.classList.toggle('active');
	});
}

const modal = document.querySelector('.modal');
const menuBurger = document.querySelector('.menu__burger');
const headClose = document.querySelector('.head__close');
if (menuBurger) {
	menuBurger.addEventListener("click", function(e) {
		modal.classList.add('active');
	});
}
if (headClose) {
	headClose.addEventListener("click", function(e) {
		modal.classList.remove('active');
	});
}

$(document).ready(function() {
	$('.mobile-modal__link').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(400);
	});
});
