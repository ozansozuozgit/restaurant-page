import coffeeBackground from './coffee-background.jpg';
import coffeesMenu from './coffee-menu.png';
const coffeeTab = () => {
  // Change menu
  const moduleDiv = document.querySelector('#module-div');
  moduleDiv.innerHTML = `<img id='menu' src=${coffeesMenu}>`;
  const background = document.querySelector('#background');
  background.style.backgroundImage = `url('${coffeeBackground}')`;
  console.log('coffee');
};

export { coffeeTab };
