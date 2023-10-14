/*
document.addEventListener('DOMContentLoaded', () => {
	const accordion = document.querySelectorAll('.footer__menu');
	accordion.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.menu__title');
			const content = self.querySelector('.menu__list');
			self.classList.toggle('footer__menu--active');
			if (self.classList.contains('footer__menu--active')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
});
*/