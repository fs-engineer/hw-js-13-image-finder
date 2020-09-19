import './css/normalize.css';
import './css/base-styles.css';
import './styles.css';
import 'material-icons/iconfont/material-icons.css';

import viewPnotify from './js/pnotify';

import imageListTemplate from './templates/image-list.hbs';

import { refs } from './js/refs';
import apiService from './js/apiService';

import openModal from './js/basiclightbox';

refs.searchForm.addEventListener('submit', handleSubmit);
refs.moreBtn.addEventListener('click', handleShowMoreBtn);

function handleSubmit(event) {
  apiService.resetPage();
  resetImageCollection();
  getSearchQuery(event);
  generateGalleryPage();
  showMoreBtn();
  viewPnotify(apiService.page);
}

function handleShowMoreBtn() {
  apiService.incrementPage();
  generateGalleryPage();
  viewPnotify(apiService.page);

  window.scrollTo({
    top: 10000,
    behavior: 'smooth',
  });
}

function getSearchQuery(event) {
  event.preventDefault();

  apiService.query = event.target.query.value;
}

function resetImageCollection() {
  refs.gallery.innerHTML = '';
}

function generateGalleryPage() {
  apiService.fetchImages(apiService.searchQuery).then(images => {
    const markup = imageListTemplate(images.hits);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  });
}

// function generateGalleryPage() {
//   apiService.fetchImages(apiService.searchQuery).then(({ images }) => {
//     const markup = imageListTemplate(images);
//     refs.gallery.insertAdjacentHTML('beforeend', markup);
//   });
// }

function showMoreBtn() {
  refs.moreBtn.classList.remove('js-invisible');
}
