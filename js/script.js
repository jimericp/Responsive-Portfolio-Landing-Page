const timeline = gsap.timeline({ defaults: { opacity: 0, duration: 0.8 } });
timeline
  .from('.header', { y: '-50%', ease: 'power2.inOut' })
  .from('.nav__item', { stagger: 0.1 })
  .from('.designer-svg', { x: '100%', ease: 'power2.inOut' }, '<.2')
  .from('.hero', { x: -50, ease: 'power2.inOut' }, '<.3')
  .from('.anim', { duration: 0.4, y: '-50%', ease: 'power1' });

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  body.classList.toggle('overflow');
  nav.classList.toggle('active');
});
