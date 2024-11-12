import { getPhotos } from './js/pixabay-api';
import { displayPhotos } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const searchBox = document.querySelector('.search-input');
const loadingSpinner = document.querySelector('.loader');

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchBox.value;
  const photoList = document.querySelector('.photo-list');
  loadingSpinner.style.display = 'block';

  const params = new URLSearchParams({
    key: '47040880-6387dd83a064ed0d7a9fde087',
    q: `${searchRequest}`,
    image_type: photo,
    orientation: horizontal,
    safesearch: true,
    per_page: 9,
  });

  getPhotos(params)
    .then(data => {
      loadingSpinner.style.display = 'none';
      searchBox.value = '';
      if (data.hits.length === 0) {
        photoList.innerHTML = '';
        iziToast.error({
          title: 'Error',
          message: 'Sorry, no images found for your search. Try again!',
        });
      } else {
        displayPhotos(data.hits);
      }
    })
    .catch(error => {
      loadingSpinner.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: `Something went wrong. Error: ${error.message}`,
      });
    });
});

iziToast.settings({
  timeout: 10000,
  position: 'topRight',
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  onOpening: function () {},
  onClosing: function () {},
});
