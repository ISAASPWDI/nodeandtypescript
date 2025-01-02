import axios from 'axios';
export const httpClientPlugin = {
    get: async (url: string) => {
        return await axios.get(url);
    },
    post: async (url: string, body : {}) => {
        return await axios({
            method: 'POST',
            url: url,
            data: body,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    put: async (url: string, body: {}) => {
        const res = await axios({
            method: 'PUT',
            url: url,
            data: body,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    },
    delete: async (url: string) => {
        const res = await axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
}
