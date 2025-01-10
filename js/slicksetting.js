$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 850,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 1100,
			settings: { slidesToShow: 3 },
		},
	],
});
