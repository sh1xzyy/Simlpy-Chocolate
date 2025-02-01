// =========== Modal Overlay ===========
document
	.getElementById('open-modal-review-btn')
	.addEventListener('click', () => {
		document.getElementById('modal-review').classList.add('is-open')
	})

document.getElementById('close-modal-review').addEventListener('click', () => {
	document.getElementById('modal-review').classList.remove('is-open')
})

window.addEventListener('keydown', event => {
	if (event.key === 'Escape')
		document.getElementById('modal-review').classList.remove('is-open')
})

// =========== Menu ===========
document.getElementById('open-mobile-menu').addEventListener('click', () => {
	document.getElementById('mobile-menu').classList.add('is-open')
})

document.getElementById('close-mobile-btn').addEventListener('click', () => {
	document.getElementById('mobile-menu').classList.remove('is-open')
})
// =========== Scroll To Top ===========
const scrollToTop = document.getElementById('scroll__to-top')
window.onscroll = function () {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		scrollToTop.classList.add('is-active')
	} else {
		scrollToTop.classList.remove('is-active')
	}
}
scrollToTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
