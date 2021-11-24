// const anchors = document.querySelectorAll('a[href*="#"]');

// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (e) {
// 		e.preventDefault();

// 		const blockID = anchor.getAttribute("href").substr(1);

// 		document.getElementById(blockID).scrollIntoView({
// 			behavior: "smooth",
// 		});
// 	});
// }

const menuLinks = document.querySelectorAll(".header-nav__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				window.pageYOffset -
				document.querySelector("header").offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

const mainSlider = new Swiper(".slider-main", {
	keyboard: {
		enabled: true,
		onlyInViewport: false
	},

	// Optional parameters
	slidesPerView: 1,
	loop: true,
	clickable: true,
	autoplay: {
		delay: 2000
	},

	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1
	// 	},
	// 	768: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 32
	// 	},
	// 	992: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 32
	// 	}
	// },
	pagination: {
		bulletClass: ".slider-pagination",
		bulletActiveClass: ".slider-pagination__active",
		el: ".slider-pagination"
	},
	speed: 800,
	pagination: {
		el: ".swiper-pagination"
	},
	// Navigation arrows
	navigation: {
		nextEl: ".slider-button__next",
		prevEl: ".slider-button__prev"
	}
});

const objectSlider = new Swiper(".object-slider", {
	keyboard: {
		enabled: true,
		onlyInViewport: true
	},

	// Optional parameters
	slidesPerView: 6,
	spaceBetween: 32,
	loop: true,
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1
	// 	},
	// 	768: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 32
	// 	},
	// 	992: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 32
	// 	}
	// },

	speed: 800,

	// Navigation arrows
	navigation: {
		nextEl: ".object-slider__button_next",
		prevEl: ".object-slider__button_prev"
	}
});
