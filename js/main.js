// Can be used with JavaScript
// -----------------------------
const brgBtn = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')
const logoIcon = document.querySelector('.logo-icon')

const showNav = () => {
	nav.classList.toggle('nav-active')
	logoIcon.classList.toggle('logo-icon--active')
}

brgBtn.addEventListener('click', showNav)
