
import axios from 'axios';

export async function fetchImages(inputValue, pageNr) {

  try{
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '32869255-acb467910c721877b1bf35e4f';
    
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNr}`);
    return response.data;
  }catch(error){
    console.log(error);
  }
};