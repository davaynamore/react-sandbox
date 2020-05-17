import { GetServerResponse } from './types/requests';
import axios from 'axios';
import { API_URL } from './constants';

/**
 * @class RequestService
 * @classdesc Класс предоставляющий интерфейсы для запросов к апи
 */
class RequestService {
    private isFakeApi = false;

    private baseApiURL = this.isFakeApi ? 'FAKE_API_URL' : API_URL;

    private api = axios.create({ baseURL: this.baseApiURL });

    private getDataFromServerResponse: GetServerResponse = ({ data }) => data;

    /**
     * @method getPhotos - метод для демонстрации, который получает картинки с сервера jsonplaceholder
     */

    public getPhotos = (): Promise<void> => this.api
        .get('/photos')
        .then(this.getDataFromServerResponse)
        .catch((error) => {
            throw new Error(`Could not fetch data. Error: ${error}`);
        });
};

const Api = new RequestService();

export default Api;