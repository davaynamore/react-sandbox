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

    private getErrorFromServerResponse: GetServerResponse = (error) => error;

    /**
     * @method getPhotos - метод для демонстрации, который получает картинки с сервера jsonplaceholder
     */

    public getPhotos = (): Promise<void> => this.api
        .get('/photos')
        .then(this.getDataFromServerResponse)
        .catch(this.getErrorFromServerResponse);
};

export default new RequestService();
