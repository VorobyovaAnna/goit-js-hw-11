import axios from 'axios';

const API_KEY = '24773711-fe92a58449d73928c22f0da31';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;


export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;

    }
    async fetchArticles() {
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${PER_PAGE}`);
                this.incrementPage();
                return response.data.hits;
            }
        catch (error) { onFetchError }
        
    }
    incrementPage() {
    this.page += 1;
    }
    resetPage() {
    this.page = 1;
    }
    
    get query() {
    return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
}
