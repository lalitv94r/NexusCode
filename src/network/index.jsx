import { isFormData } from '../utils/constants';
import { getBaseURL } from './appConfig';

const fetchRequest = {
    version: '/v1',

    get(api_endpoint) {
        return this.apiResponse('GET', api_endpoint);
    },

    post(api_endpoint, body) {
        return this.apiResponse('POST', api_endpoint, body);
    },

    put(api_endpoint, body) {
        return this.apiResponse('PUT', api_endpoint, body);
    },

    patch(api_endpoint, body) {
        return this.apiResponse('PATCH', api_endpoint, body);
    },

    delete(api_endpoint) {
        return this.apiResponse('DELETE', api_endpoint);
    },

    apiResponse(method, api_endpoint, body) {
        let url = getBaseURL() + this.version + api_endpoint;
        let formData = isFormData(body);
        let headers = {};
            
        if(!formData){
            headers = {
                "Content-Type":"application/json"
            }
        }
    
        return new Promise((resolve, reject) => {
            const requestOptions = {
                method: method,
                headers: headers,
                // credentials: 'include'
            };

            if (body) {
                if(formData) {
                    requestOptions.body = body;
                } else {
                    requestOptions.body = JSON.stringify(body);
                }
            }

            fetch(url, requestOptions)
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    resolve(responseJson);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};

export default fetchRequest;