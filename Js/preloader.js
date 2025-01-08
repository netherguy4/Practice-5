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
		"Img/header.webp",
		"Img/header2.webp",
		"Img/header3.webp"
	);
});