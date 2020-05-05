import backgroundImage from './content-background.jpg';

const landingPage = () => {
  const navBarItems = ['HOME', 'MENUS', 'RESERVATIONS', 'PRIVATE DINING', 'CONTACT'];
  const content = document.querySelector('#content');
  // navBar creation
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');
  for (const item of navBarItems) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.classList.add('list-item');
    ul.appendChild(listItem);
  }
  navBar.appendChild(ul);
  //Content info (background image and general info)
  const contentInfoContainer = document.createElement('div');
  contentInfoContainer.id = 'content-info-container';
  contentInfoContainer.style.backgroundImage = `url('${backgroundImage}')`;
  content.appendChild(contentInfoContainer);
  content.appendChild(navBar);
};

export { landingPage };
