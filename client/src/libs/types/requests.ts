import { AxiosResponse } from 'axios';


export interface GetServerResponse {
    (response: AxiosResponse<any>): any;
};