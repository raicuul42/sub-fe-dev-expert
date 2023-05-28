import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const mainContent = document.querySelector('#content');
const skipLink = document.querySelector('.skip-link');

const app = new App({
  button: document.querySelector('[data-menu-toggle-btn]'),
  drawer: document.querySelector('[data-navbar]'),
  content: mainContent,
});

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
