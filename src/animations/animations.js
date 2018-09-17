function animateLine(slectorClass, delay =0, time = 200, isHorizontal = true) {
  let line = document.querySelector(`.${slectorClass}`);

  if(isHorizontal) {
      Velocity(line, {'left': '0px'}, {'delay': delay}, time)
  }
}

function showContent() {
  const mainContentSection = document.querySelector('.main-content');
  setTimeout(() => mainContentSection.style.display='flex', 2000);
  Velocity(mainContentSection, {'opacity': 1}, {'delay': 4000}, 200, 'easeIn');
}

function animateNav() {
  const navBox = document.querySelector('.nav');
  const navList = document.querySelector('.navigation');
  const infoBox = document.querySelector('.info-box');
  const circleIndicator = document.querySelector('.info-box span');

  Velocity(navBox, {height: '25px'}, 2500, 200);
  Velocity(navList, {'opacity': '1'}, {'delay': 3000}, 200)
  Velocity(infoBox, {'opacity': '1'}, {'delay': 5000}, 200, 'easeIn')
  Velocity(circleIndicator, {'opacity':'0'}, {'loop': true, 'delay': 1500 }, 700 );
}

export {animateLine, animateNav, showContent}
