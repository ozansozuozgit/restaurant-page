import saladBackground from './salad-background.jpg';
import saladMenu from './salad-menu.png';
const saladTab = () => {
  // Change menu
  const moduleDiv = document.querySelector('#module-div');
  moduleDiv.innerHTML = `<img id='menu' src=${saladMenu}>`;
  const background = document.querySelector('#background');
  background.style.backgroundImage = `url('${saladBackground}')`;

};

export { saladTab };
