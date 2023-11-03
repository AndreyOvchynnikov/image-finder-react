import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38175846-4e34d29612c397988723af481';

export const getPicturesRequest = async (searchQuery, page) => {
    const request = await axios.get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    const { data } = request;
    return data.hits
}