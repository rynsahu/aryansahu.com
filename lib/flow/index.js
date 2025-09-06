export function render(childElement, rootElement) {
  if (childElement && typeof childElement === 'string') {
    rootElement.innerHTML = rootElement.innerHTML + childElement;
  } else {
    rootElement.appendChild(childElement);
  }
}

export function createElement(htmlTag, textContent, attributes, childElement) {
  const element = document.createElement(htmlTag);

  if (childElement && typeof childElement === 'string') {
    element.innerHTML = element.innerHTML + childElement;
  } else {
    element.textContent = textContent;
  }

  if (attributes) {
    for (let fieldName in attributes) {
      element.setAttribute(fieldName, attributes[fieldName]);
    }
  }

  return {
    element,
    render: (rootElement) => render(element, rootElement),
  }
}