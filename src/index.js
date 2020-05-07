import { landingPage } from './page-load';
import { drinksTab } from './drinks-page';
import { seaFoodsTab } from './seafoods-page';

import './styles.css';

const tabAnimation = () => {
  const moduleDiv = document.querySelector('#module-div');
  const background = document.querySelector('#background');

  background.classList.toggle('run-animation');
  void background.offsetWidth;
  background.classList.toggle('run-animation');

  moduleDiv.classList.toggle('run-animation');
  void moduleDiv.offsetWidth;
  moduleDiv.classList.toggle('run-animation');
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
