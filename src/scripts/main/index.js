import 'regenerator-runtime'
import 'bootstrap';
import '../../styles/app.scss'
import '../components/_components'
import AOS from 'aos';

import App from '../views/app'

const app = new App()

window.addEventListener('load', () => {
  app.renderPage()
  AOS.init();
});
