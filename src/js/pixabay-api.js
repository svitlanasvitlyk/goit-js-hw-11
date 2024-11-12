//image search

const url = new URL('https://pixabay.com/api/');
const searchParams = new SearchParams({
  key: '47040880-6387dd83a064ed0d7a9fde087',
  q: `${searchRequest}`,
  image_type: photo,
  orientation: horizontal,
  safesearch: true,
  per_page: 9,
});

url.search = params.toString();

const finalUrl = url.toString();
