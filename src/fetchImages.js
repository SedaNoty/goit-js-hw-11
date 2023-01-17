
// export const fetchImages = async (inputValue, pageNr) => {
//   const url = 'https://pixabay.com/api/';
//   const API_KEY = '32869255-acb467910c721877b1bf35e4f';
//   return await fetch(
//     `${url}?key=${API_KEY}&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
//   )
//     .then(async response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         throw new Error(response.status);
//       }
//       return await response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

// ================================================

import axios from 'axios';

export async function fetchImages(inputValue, pageNr) {

  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '32869255-acb467910c721877b1bf35e4f';
  
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNr}`);
  return response.data;
};