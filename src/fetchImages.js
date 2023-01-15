

export const fetchImages = async (inputValue, pageNr) => {
  const url = 'https://pixabay.com/api/';
  const API_KEY = '32869255-acb467910c721877b1bf35e4f';
  return await fetch(
    `${url}?key=${API_KEY}&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
