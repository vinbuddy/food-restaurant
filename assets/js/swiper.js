const swiper = new Swiper('.swiper', {

	loop: true,
	speed: 1200,

	// delay 5s
	autoplay: 
	{
		delay: 5000,
		disableOnInteraction: false // khi có tương tác (click, touch) thì autoplay sẽ vẫn chạy
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},


});

const swiper2 = new Swiper('.swiper2', {
	// Optional parameters
	speed: 1200,
	loop: true,

	slidesPerView: 2,

	//delay 6s
	autoplay: 
	{
		delay: 6000,
		disableOnInteraction: false // khi có tương tác (click, touch) thì autoplay sẽ vẫn chạy
	},

	breakpoints: {
        // when window width is >= 1
        1: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },

		800: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
    },
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	
});