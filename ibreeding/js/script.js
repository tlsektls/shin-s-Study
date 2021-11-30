$(document).ready(function() {
  // ****************  swipers
	const swiper1 = new Swiper(".swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: '.swiper-pagination',
		},
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			768: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 10
			}
		}
	});

	// AOS
	AOS.init();


});