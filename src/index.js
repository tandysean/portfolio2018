import 'velocity-animate';
import './styles/styles.scss';
import {animateLine, animateNav, showContent, animateTitle} from './Animations/animations';
import {appendNewElement} from './helpers';


(function () {
  const titleElement = document.querySelector('#title');
  const titleText = document.querySelector('#title h1');
  const paragraph = document.querySelector('#title p');
  const siteWrapper = document.querySelector('#site-wrapper');

  /* initial decorative line */
  appendNewElement('div', 'horizontal-1', siteWrapper);

  /*run intro animations*/
  document.addEventListener('DOMContentLoaded', (e) => {
      animateLine('horizontal-1', 2000);
      animateTitle( titleElement, titleText, paragraph);
      animateLine('nav', 2500);
      animateNav();
      showContent()
  });
})();
