const brgBtn = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')
const logoIcon = document.querySelector('.logo-icon')
const navItem = document.querySelectorAll('.nav__items-item')
const checkedIcon = document.querySelector('.menu-icon__cheeckbox')

const showNav = () => {
	nav.classList.toggle('nav-active')
	logoIcon.classList.toggle('logo-icon--active')

	navItem.forEach(el => {
		el.addEventListener('click', () => {
			nav.classList.remove('nav-active')
			logoIcon.classList.remove('logo-icon--active')
			nav.classList.remove('nav-active')
			checkedIcon.checked = false
		})
	})
}

brgBtn.addEventListener('click', showNav)
