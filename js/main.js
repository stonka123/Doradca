const brgBtn = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')
const logoIcon = document.querySelector('.logo-icon')
const navItem = document.querySelectorAll('.nav__items-item')
const checkedIcon = document.querySelector('.menu-icon__cheeckbox')
const content = document.querySelector('.content')
const loadingPage = document.querySelector('.loading-page')

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

const bar = () => {
	var bar1 = new ldBar('.ldBar')

	var bar2 = document.getElementsByClassName('myItem1').ldBar
	bar1.set(100)
	// console.log(bar1)
	// showSite()
}
const showSite = () => {
	if (bar1.value > 50) {
		content.classList.add('content-show')
	}
}
// bar()
const showek = () => {
	content.classList.add('content-show')
	loadingPage.classList.add('loading-page-hidden')
}
setTimeout(showek, 2500)

brgBtn.addEventListener('click', showNav)
window.addEventListener('DOMContentLoaded', e => {
	bar()
})
