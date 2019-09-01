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
};

const onMouseLeave = (e) => {
};

const getElemColor = e => e.target.dataset.color;

window.addEventListener('DOMContentLoaded', (event) => {
  init();
});