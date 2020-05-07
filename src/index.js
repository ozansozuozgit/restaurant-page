import { landingPage } from './page-load';
import { drinksTab } from './drinks-page';
import { seaFoodsTab } from './seafoods-page';

import './styles.css';

const tabAnimation = () => {
  const moduleDiv = document.querySelector('#module-div');
  const background = document.querySelector('#background');
  // Used in conjuction with css, toggles from 0 opacity to 1, when active opacity is 1
  // By default elements are set to 0 opacity
  moduleDiv.classList.toggle('active');
  background.classList.toggle('active');
  setTimeout(function () {
    moduleDiv.classList.toggle('active');
    background.classList.toggle('active');
  }, 200);
};

landingPage();
document.querySelectorAll('.secondary-items').forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const tabNumber = e.target.dataset.tab;
    tabAnimation();
    switch (tabNumber) {
      case '0':
        drinksTab();
        break;
      case '1':
        seaFoodsTab();
        break;
    }
  });
});
