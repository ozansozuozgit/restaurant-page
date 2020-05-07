import backgroundImage from './content-background.jpeg';
import coffeeImage from './coffee.svg';
import drinksImage from './drinks.svg';
import fishImage from './fish.svg';
import saladImage from './salad.svg';

const content = document.querySelector('#content');

const landingPage = () => {
  createMainDiv();
  homeTab();
  createSecondaryDiv();
};

const createMainDiv = () => {
  const mainDiv = document.createElement('div');
  mainDiv.id = 'main-div';
  const navBarItems = ['HOME', 'MENUS', 'RESERVATIONS', 'PRIVATE DINING', 'CONTACT US'];
  // navBar creation
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');
  for (const item of navBarItems) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('list-item');
    ul.appendChild(listItem);
  }
  //background image via css
  const background = document.createElement('div');
  background.id = 'background';
  // background.style.backgroundImage = `url('${backgroundImage}')`;
  background.classList.add('run-animation');

  // div for modules to be inserted
  const moduleDiv = document.createElement('div');
  moduleDiv.id = 'module-div';
  moduleDiv.classList.add('run-animation');

  const intro = document.createElement('h1');
  // 'We even have cashews as decoration!' + '\r\n' + '    We can cook anything!';
  // intro.textContent = `We even have cashews as decoration!
  //     We can cook anything you want!`;
  // intro.id = 'intro';

  navBar.appendChild(ul);
  moduleDiv.appendChild(intro);
  mainDiv.append(background, navBar, moduleDiv);
  content.appendChild(mainDiv);
};

const homeTab = () => {
  const moduleDiv = document.querySelector('#module-div');
  const background = document.querySelector('#background');
  moduleDiv.innerHTML = `<h1 id='intro'>We even have cashews as decoration!
      We can cook anything you want!</h1>`;
  background.style.backgroundImage = `url('${backgroundImage}')`;
};

const createSecondaryDiv = () => {
  const secondaryDiv = document.createElement('div');
  secondaryDiv.id = 'secondary-div';

  const tabItems = ['Drinks', 'Sea Foods', 'Cup Coffees', 'Fresh Salad'];
  const tabImages = [drinksImage, fishImage, coffeeImage, saladImage];
  const tabInfo = [
    'Best drinks within 10 meters!',
    'We stole them from bears!',
    'Basic starbucks stuff',
    'It is fresh enough to eat!',
  ];

  for (let i = 0; i < tabItems.length; i++) {
    const div = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h4');
    const info = document.createElement('p');

    div.classList.add('secondary-items');
    div.setAttribute('data-tab', i);
    image.src = tabImages[i];
    title.textContent = tabItems[i];
    info.textContent = tabInfo[i];
    div.append(image, title, info);
    secondaryDiv.append(div);
  }
  content.appendChild(secondaryDiv);
};

export { landingPage, homeTab };
