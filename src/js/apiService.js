import imageListTemplate from '../templates/image-list.hbs';
import { refs } from './refs';

console.log(refs);

export default function fetchQuery() {
  const options = {
    method: 'GET',
  };
  const search = 'dog';

  const key = '13118160-85f169275baea695b5828e8ed';

  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=1&per_page=12&key=${key}`,
    options,
  )
    .then(res => res.json())
    .then(images => images)
    .then(({ hits }) => {
      const markup = imageListTemplate(hits);

      refs.gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}
