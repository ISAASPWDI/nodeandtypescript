const axios = require('axios');
const httpClientPlugin = {
    get: async (url) => {
        return await axios.get(url);
    },
    post: async (url, body) => {
        return await axios({
            method: 'POST',
            url: url,
            data: body,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    put: async (url, body) => {
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
    delete: async (url) => {
        const res = await axios({
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    }
}
module.exports = {
    http: httpClientPlugin,

};