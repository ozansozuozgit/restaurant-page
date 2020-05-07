import { landingPage } from './page-load';
import { drinksTab } from './drinks-page';
import { seaFoodsTab } from './seafoods-page';

import './styles.css';

landingPage();
document.querySelectorAll('.secondary-items').forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const tabNumber = e.target.dataset.tab;
    const moduleDiv = document.querySelector('#module-div');
    moduleDiv.style.opacity = '0';
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
