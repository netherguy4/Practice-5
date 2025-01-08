"use strict"

document.addEventListener("DOMContentLoaded", () => {
	const images = new Array();

	function preloadImages(...images) {
		images.forEach((image, i) => {
			image = new Image();
			image.src = preloadImages.arguments[i];
		});
	};

	// Предварительная загрузка нужных картинок
	preloadImages(
		"header.jpg",
		"header2.jpg",
		"header3.jpg"
	);
});