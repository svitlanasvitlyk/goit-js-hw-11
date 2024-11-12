import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('form');
const inputField = searchForm.querySelector('input');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a');

function showLoading() {
  iziToast.info({ title: 'Loading', message: 'Fetching images...' });
}

function hideLoading() {
  iziToast.hide();
}

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchQuery = inputField.value.trim();

  if (searchQuery === '') {
    iziToast.error({ title: 'Error', message: 'Please enter a search term.' });
    return;
  }

  showLoading();
  const images = await fetchImages(searchQuery);

  hideLoading();
  if (images.length === 0) {
    iziToast.warning({
      title: 'No Results',
      message: 'Sorry, no images found. Please try again!',
    });
    return;
  }

  renderImages(images);

  lightbox.refresh();
});
