const defaultColor = 'border-white';
let menu = null;

const init = () => {
  menu = document.querySelector('#menu');

  const links = document.querySelectorAll('a');
  links.forEach((e) => {
    e.addEventListener('mouseover', onMouseOver);
    e.addEventListener('mouseleave', onMouseLeave);
  });
}

const onMouseOver = (e) => {
  // console.log('Mouse over', e);
  const currentColor = getElemColor(e);
  menu.classList.remove(defaultColor);
  menu.classList.add(currentColor);
};

const onMouseLeave = (e) => {
  const currentColor = getElemColor(e);
  menu.classList.remove(currentColor);
  menu.classList.add(defaultColor);
};

const getElemColor = e => e.target.dataset.color;

window.addEventListener('DOMContentLoaded', (event) => {
  init();
});