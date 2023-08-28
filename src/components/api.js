import axios from 'axios';

const KEY = `38252438-c1dd9658c1d73d001717cee1b`;
axios.defaults.baseURL = `https://pixabay.com/api/`
// const searchQuery = '';


export const getImages = async (searchQuery, page) => {
    const response = await axios.get(`?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);

    return response.data; 
}