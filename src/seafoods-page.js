import seaFoodsBackground from './seafoods-background.jpg';
import seaFoodsMenu from './seafoods-menu.png';
const seaFoodsTab = () => {
  //   Change menu
  const moduleDiv = document.querySelector('#module-div');
  moduleDiv.innerHTML = `<img id='menu' src=${seaFoodsMenu}>`;
  const background = document.querySelector('#background');
  background.style.backgroundImage = `url('${seaFoodsBackground}')`;
  console.log('hi');
};

export { seaFoodsTab };
