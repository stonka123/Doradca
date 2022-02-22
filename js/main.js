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
}

const showek = () => {
	content.classList.add('content-show')
	loadingPage.classList.add('loading-page-hidden')
}
bar()
brgBtn.addEventListener('click', showNav)
// window.addEventListener('DOMContentLoaded', e => {
// 	bar()
// 	setTimeout(showek, 2500)
// 	console.log('zaladowano')
// })
