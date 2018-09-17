import 'velocity-animate';
import './styles/styles.scss';
import {animateLine, animateNav} from './Animations/animations';
import {appendNewElement} from './helpers';


(function () {
  const titleElement = document.querySelector('#title');
  const titleText = document.querySelector('#title h1');
  const paragraph = document.querySelector('#title p');
  const siteWrapper = document.querySelector('#site-wrapper');

  /* animations */

  function showContent() {
    const mainContentSection = document.querySelector('.main-content');
    setTimeout(() => mainContentSection.style.display='flex', 2000);
    Velocity(mainContentSection, {'opacity': 1}, {'delay': 4000}, 200, 'easeIn');
  }
  /* created Elements */
  /* create horizontal line and add to page */

  appendNewElement('div', 'horizontal-1', siteWrapper);
  appendNewElement('div', 'nav', titleElement);

  /*positioning */
  /*title element */
  Velocity(titleElement, {'left': '0px'}, { 'delay': 500 }, 500, 'easeOut'), {'delay': 1000};
  Velocity(titleElement, {'top': '0px'}, {'delay': 1000 }, 200, 'easeIn');
  Velocity(titleText, {'font-size': '1.2em'}, {'delay': 2500}, 250);
  Velocity(paragraph, {'font-size': '0.8em'}, {'delay': 2500}, 250);



  /*animate horizontalLine */
  document.addEventListener('DOMContentLoaded', (e) => {
      animateLine('horizontal-1', 2000);
      animateLine('nav', 2500);
      animateNav();
      showContent()
  });

})();
