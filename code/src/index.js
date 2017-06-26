const h = (name, ...children) => {
  const elt = document.createElement(name);

  if(children.length > 0 && !children[0].tagName) {
    const attrs = children.shift();

    for(let attr of Object.keys(attrs)) {
      elt[attr] = attrs[attr];
    }
  }

  for(let child of children) {
    if(typeof child === 'string') {
      elt.appendChild(document.createTextNode(child));
    } else {
      elt.appendChild(child);
    }
  }

  return elt;
}

const render = (root, element) => {
  while(root.hasChildNodes()) {
    root.removeChild(root.lastChild);
  }

  root.appendChild(element);    
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Content Loaded");

  render(document.getElementById('root'), 
    h('h1', {
      className: 'head',
      onclick: (e) => console.log("Header clicked")
    }, 'Hello world')
  );
});
