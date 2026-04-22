const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
	const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
	hamburger.setAttribute('aria-expanded', !isOpen);
	nav.toggleAttribute('data-open');
});
