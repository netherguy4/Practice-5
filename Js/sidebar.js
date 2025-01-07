"use strict"

const sidebar = document.querySelector('.sidebar');
sidebar.querySelector('.sidebar__buttons').addEventListener('click', (e) => {
	e.target.closest('li').classList.toggle('sidebar__button_active')
})
