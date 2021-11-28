import axios from 'axios';
import config from '../config/apiConfg';

/**
 * /countries - array of countries
 * /cities - array of cities
 * /prices/cheap - array 
 */
class Api {
    constructor(config) {
        this.url = config.url;
    }
    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response.data;
        } catch(err) {
            console.error(err);
            return Promise.reject(err);
        }
    }
    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response.data;
        } catch(err) {
            console.error(err);
            return Promise.reject(err);
        }
    }
    prices(params) {}
}

const api = new Api(config);

export default api;