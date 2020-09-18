import './css/normalize.css';
import './css/base-styles.css';
import './styles.css';

import fetchQuery from './js/apiService';
import { refs } from './js/refs';

let searchQuery = null;

refs.form.addEventListener('submit', getSearchQuery);

function getSearchQuery(event) {
  event.preventDefault();
  const inputValue = event.target[0].value;
  searchQuery = inputValue;
}
fetchQuery();
