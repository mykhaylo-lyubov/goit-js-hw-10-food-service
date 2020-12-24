import itemsTemplate from '../templates-handlebars/menu-items.hbs';
import menuItems from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menuItems);

menuRef.insertAdjacentHTML('afterbegin', markup);
