(function () {
  const titleElement = document.querySelector('.title-text');

  /*positioning */
  /*title element */
  Velocity(titleElement, {'left': '0px'}, { 'delay': 500 }, 500, 'easeOut'), {'delay': 1000};
  Velocity(titleElement, {'translate-y': '-300px'}, {'delay': 1000 }, 200, 'easeIn');


})();
