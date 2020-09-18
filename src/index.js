import './css/normalize.css';
import './css/base-styles.css';
import './styles.css';

import 'material-icons/iconfont/material-icons.css';

import imageListTemplate from './templates/image-list.hbs';

import apiService from './js/apiService';
import { refs } from './js/refs';

refs.searchForm.addEventListener('submit', hendleSubmit);
refs.moreBtn.addEventListener('click', () => {
  apiService.incrementPage();
  createGalleryPage();
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth',
  });
});

function hendleSubmit(event) {
  getSearchQuery(event);
  createGalleryPage();
  apiService.resetPage();
  showMoreBtn();
}

function getSearchQuery(event) {
  event.preventDefault();

  const inputValue = event.target[0].value;

  apiService.searchQuery = inputValue;
}

function createGalleryPage() {
  apiService.fetchImages(apiService.searchQuery).then(images => {
    const markup = imageListTemplate(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  });
}

function showMoreBtn() {
  refs.moreBtn.classList.remove('js-invisible');
}
