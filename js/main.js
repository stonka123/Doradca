// Can be used with JavaScript
// -----------------------------
const brgBtn = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')

const showNav = () => {
	nav.classList.toggle('nav-active')
}

brgBtn.addEventListener('click', showNav)
