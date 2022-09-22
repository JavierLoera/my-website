const header = document.getElementById(`header`);
const toggle = document.getElementById(`toggle`);
const navbar = document.getElementById(`navbar`);
const icon = document.getElementById(`icon`);
const intro = document.querySelector(".intro");

//intro
document.addEventListener("DOMContentLoaded", (e) => {
	setTimeout(() => {
		intro.classList.add("display-none");
	}, 4000);
});

//menu
document.onclick = function (e) {
	if (
		e.target.id != `header` &&
		e.target.id != `toggle` &&
		e.target.id != `navbar`
	) {
		toggle.classList.remove(`active`);
		navbar.classList.remove(`active`);
	}
};
icon.onclick = function (e) {
	e.stopPropagation();
	toggle.classList.toggle(`active`);
	navbar.classList.toggle(`active`);
};

/*scroll locomotive*/
const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	tablet: { smooth: true },
	smartphone: { smooth: true },
});

//cursor

let cursor = document.getElementById("cursor");

if (innerWidth > 760) {
	document
		.getElementsByTagName("body")[0]
		.addEventListener("mousemove", function (e) {
			(cursor.style.left = e.clientX + "px"),
				(cursor.style.top = e.clientY + "px");
		});

	function addHover(t) {
		cursor.classList.add("hover");
	}
	function removeHover(t) {
		cursor.classList.remove("hover");
	}

	removeHover();

	function hoverOutTarget(e) {
		e.addEventListener("mouseover", addHover),
			e.addEventListener("mouseout", removeHover);
	}

	for (
		let i = document.querySelectorAll(".hover-target"), a = i.length - 1;
		a >= 0;
		a--
	) {
		hoverOutTarget(i[a]);
	}
}


document.addEventListener("DOMContentLoaded", () => {
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 10,
		slidesPerGroup: 2,
		allowTouchMove: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			bulletClass: 'swiper-pagination-bullet',
		},
		breakpoints: {
			500: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});



})
