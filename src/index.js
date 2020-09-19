import './css/normalize.css';
import './css/base-styles.css';
import './styles.css';
import 'material-icons/iconfont/material-icons.css';
import './scss/basicLightBox.scss';

import viewPnotify from './js/pnotify';

import imageListTemplate from './templates/image-list.hbs';

import { refs } from './js/refs';
import apiService from './js/apiService';

import createModal from './js/basiclightbox';

const throttle = require('lodash.throttle');

refs.searchForm.addEventListener('submit', handleSubmit);
// refs.moreBtn.addEventListener('click', handleShowMoreBtn);
refs.gallery.addEventListener('click', hadleOpenModal);
window.addEventListener(
  'scroll',
  throttle(() => {
    infinityScroll();
  }, 500),
);

function handleSubmit(event) {
  apiService.resetPage();
  resetImageCollection();
  getSearchQuery(event);
  generateGalleryPage();
  // showMoreBtn();
}

// function handleShowMoreBtn() {
//   apiService.incrementPage();
//   generateGalleryPage();
// }

function getSearchQuery(event) {
  event.preventDefault();

  apiService.query = event.target.query.value;
}

function resetImageCollection() {
  refs.gallery.innerHTML = '';
}

function generateGalleryPage() {
  apiService
    .fetchImages(apiService.searchQuery)
    .then(images => {
      const markup = imageListTemplate(images.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);

      getNumberOfImages(images);

      viewPnotify(apiService.page);
    })
    .catch(error => console.log(error));
}

// function showMoreBtn() {
//   refs.moreBtn.classList.remove('js-invisible');
// }

function getNumberOfImages(images) {
  apiService.totalImages = images.total;
}

function hadleOpenModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImageURL = event.target.dataset.source;

  createModal(largeImageURL);
}

function infinityScroll() {
  const viewPortBottom = document.documentElement.getBoundingClientRect()
    .bottom;
  if (viewPortBottom < document.documentElement.clientHeight + 100) {
    apiService.incrementPage();
    generateGalleryPage();
  }
}
