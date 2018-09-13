(function () {
  const titleElement = document.querySelector('#title');
  const titleText = document.querySelector('#title h1');
  const paragraph = document.querySelector('#title p');
  const siteWrapper = document.querySelector('#site-wrapper');

  /* animations */
  function animateLine(slectorClass, delay =0, time = 200, isHorizontal = true) {
    let line = document.querySelector(`.${slectorClass}`);

    if(isHorizontal) {
        Velocity(line, {'left': '0px'}, {'delay': delay}, time)
    }
  }

  function appendNewElement(el, className, rootElement) {
    let base = document;
    if (rootElement) {
      base = rootElement
    }
    let element = document.createElement(el);
    element.classList.add(className);
    base.appendChild(element);
  }

  function createNav(root) {
    let list = document.createElement('ul');
    list.classList.add('navigation');
    let aboutLink = document.createElement('li');
    aboutLink.innerHTML ='<a href="#about">about</a>';

    let projectsLink = document.createElement('li');
    projectsLink.innerHTML = '<a href="#projects">projects</a>';

    let contactLink = document.createElement('li');
    contactLink.innerHTML = '<a href="#contact">get in touch</a>';
    list.appendChild(aboutLink);
    list.appendChild(projectsLink);
    list.appendChild(contactLink);
    root.appendChild(list);
  }

  function animateNav() {
    const navBox = document.querySelector('.nav');
    const nav = createNav(navBox);
    const navList = document.querySelector('.navigation');
    const infoBox = document.querySelector('.info-box');
    const circleIndicator = document.querySelector('.info-box span');

    Velocity(navBox, {height: '25px'}, 2500, 200);
    Velocity(navList, {'opacity': '1'}, {'delay': 3000}, 200)
    Velocity(infoBox, {'opacity': '1'}, {'delay': 5000}, 200, 'easeIn')
    Velocity(circleIndicator, {'opacity':'0'}, {'loop': true, 'delay': 1500 }, 700 );
  }

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
