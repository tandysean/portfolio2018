
function appendNewElement(el, className, rootElement) {
  let base = document;
  if (rootElement) {
    base = rootElement
  }
  let element = document.createElement(el);
  element.classList.add(className);
  base.appendChild(element);
}

export {appendNewElement}
