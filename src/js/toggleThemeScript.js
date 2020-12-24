/* Задаем возможные темы */
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

/* Находим необходимые элементы */
const refs = {
  body: document.querySelector('body'),
  toggleBtn: document.querySelector('#theme-switch-toggle'),
  currentTheme: localStorage.getItem('theme'),
};

/* Берем тему из локального хранилища, и задаем её в виде класса на body */
const savedTheme = localStorage.getItem('theme');
refs.body.classList.add(savedTheme);

/* Проверяем, открывается ли страница в первый раз 
(если это так, то при начале исполнения файла, на body присваивается класс null,
так как еще ничего нет в localStorage), если да - задаем тему по умолчанию - LIGHT */
primaryPageOpeningCheck();

/* Проверяем, является ли заданная ранее тема темной, если да - переводим ползунок в нужное положение*/
darkThemeCheck();

/* Вешаем слушатель событий на кнопку */
refs.toggleBtn.addEventListener('input', toggleBtnHandler);

/* Функция выполняемая при переключении кнопки: меняется тема и, тема, которая используется в данный момент, записывается в локальное хранилище */
function toggleBtnHandler() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);
  if (refs.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
}

/* Функция для проверки, является ли тема темной */
function darkThemeCheck() {
  if (savedTheme === Theme.DARK) {
    refs.toggleBtn.checked = true;
  }
}

/* Функция для проверки открывается ли страница в первый раз на данном устройстве или нет */
function primaryPageOpeningCheck() {
  if (refs.body.classList.contains(null)) {
    refs.body.classList.remove(null);
    refs.body.classList.add(Theme.LIGHT);
  }
}
