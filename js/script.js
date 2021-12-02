"use strict";

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

// Меню бургер
const iconMenu = document.querySelector(".header__menu-mobile");
const menuBody = document.querySelector(".header-nav");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}

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
		delay: 3000
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
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		580: {
			slidesPerView: 2
		},
		769: {
			slidesPerView: 4,
			spaceBetween: 25
		},
		992: {
			slidesPerView: 6,
			spaceBetween: 32
		}
	},

	speed: 400,

	// Navigation arrows
	navigation: {
		nextEl: ".object-slider__button_next",
		prevEl: ".object-slider__button_prev"
	}
});

// let phoneTest =
// 	/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// let nameTest = "";

// let inp = document.querySelector(".form__number");
// let error = document.querySelector(".form__error");

// document.querySelector(".form__button").onclick = function (e) {
// 	e.preventDefault();
// 	if (!validate(phoneTest, inp.value)) {
// 		notValid(inp, error, "Введите данные");
// 	} else {
// 		valid(inp, error, "");
// 	}
// };

// function validate(regex, inp) {
// 	return regex.test(inp);
// }

// function notValid(inp, el, mess) {
// 	inp.classList.add("is-invalid");
// 	el.innerHTML = mess;
// }
// function valid(inp, el, mess) {
// 	inp.classList.remove("is-invalid");
// 	inp.classList.add("is-valid");
// 	el.innerHTML = mess;
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	const form = document.getElementById("form");
// 	form.addEventListener("submit", formSend);

// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		if (error === 0) {
// 			form.classList.add("_sending");
// 			let response = await fetch("sendmail.php", {
// 				method: "POST",
// 				body: formData
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				alert(result.message);
// 				formPreview.innerHTML = "";
// 				form.reset();
// 				form.classList.remove("_sending");
// 			} else {
// 				alert("Ошибка");
// 				form.classList.remove("_sending");
// 			}
// 		} else {
// 			alert("Заполните обязательные поля");
// 		}
// 	}

// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll("._req");

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if (input.classList.contains("_email")) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else {
// 				if (input.value === "") {
// 					formAddError(input);
// 					error++;
// 				}
// 			}
// 		}
// 		return error;
// 	}
// 	function formAddError(input) {
// 		input.parentElement.classList.add("_error");
// 		input.classList.add("_error");
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove("_error");
// 		input.classList.remove("_error");
// 	}
// 	//Функция теста email
// 	function emailTest(input) {
// 		return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
// 			input.value
// 		);
// 	}

// //Получаем инпут file в переменную
// const formImage = document.getElementById("formImage");
// //Получаем див для превью в переменную
// const formPreview = document.getElementById("formPreview");

// //Слушаем изменения в инпуте file
// formImage.addEventListener("change", () => {
// 	uploadFile(formImage.files[0]);
// });

// function uploadFile(file) {
// 	// провераяем тип файла
// 	if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
// 		alert("Разрешены только изображения.");
// 		formImage.value = "";
// 		return;
// 	}
// 	// проверим размер файла (<2 Мб)
// 	if (file.size > 2 * 1024 * 1024) {
// 		alert("Файл должен быть менее 2 МБ.");
// 		return;
// 	}

// 	var reader = new FileReader();
// 	reader.onload = function (e) {
// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
// 	};
// 	reader.onerror = function (e) {
// 		alert("Ошибка");
// 	};
// 	reader.readAsDataURL(file);
// }
// });
