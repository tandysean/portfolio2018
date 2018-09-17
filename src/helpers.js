function appendNewElement(el, className, rootElement=document) {
  let element = document.createElement(el);
  element.classList.add(className);
  rootElement.appendChild(element);
}

export {appendNewElement}
