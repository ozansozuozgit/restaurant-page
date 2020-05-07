import barBackground from './bar-background.jpg';
import drinksMenu from './drinks-menu.png';
const drinksTab = () => {
  // Change menu
  const moduleDiv = document.querySelector('#module-div');
  moduleDiv.innerHTML = `<img id='menu' src=${drinksMenu}>`;
  const background = document.querySelector('#background');
  background.style.backgroundImage = `url('${barBackground}')`;
  moduleDiv.style.display = 'flex';
};

export { drinksTab };
