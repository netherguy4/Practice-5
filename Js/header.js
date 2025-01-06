"use strict"
const header = document.querySelector('.header');
document.addEventListener('keydown', (e) => {
	if (e.code === 'Escape') {
		header.querySelector('.header__search-field').blur();
	}
})
header.addEventListener('click', (e) => {
	if (e.target.closest('li') && e.target.closest('li').classList.contains('header__item-search')) {
		header.querySelector('.header__nav').classList.add('disabled');
		header.querySelector('.header__search-form').classList.add('header__search-form_active');
		setTimeout(() => {
			header.querySelector('.header__search-field').focus();
		}, "300")
		header.querySelector('.header__search-field').addEventListener('blur', restoreNav);
	}
	function restoreNav() {
		header.querySelector('.header__nav').classList.remove('disabled');
		header.querySelector('.header__search-form').classList.remove('header__search-form_active');
		header.querySelector('.header__search-field').removeEventListener('blur', restoreNav);
	}
});
header.addEventListener('mouseover', (e) => {
	if (e.target.classList.contains('header__link')) {
		let image = e.target.querySelector('img');
		if (image) {
			let target = e.target.closest('a');
			image.classList.add('img_active');
			target.classList.add('header__link_active');
			target.parentNode.querySelector('.header__context-menu').classList.add('header__context-menu_active')
			target.parentNode.addEventListener('mouseleave', () => {
				image.classList.remove('img_active');
				target.classList.remove('header__link_active');
				target.parentNode.querySelector('.header__context-menu').classList.remove('header__context-menu_active')
			})
		}
	}
})
header.querySelector('.header__search-form').addEventListener('mousedown', (e) => {
	if (e.button === 0) e.preventDefault();
	if (e.target === header.querySelector('.header__search-img')) header.querySelector('.header__search-form').submit();
})