import axios from 'axios';


export default axios.create({
    baseURL: 'http://acom.test',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },

    withCredentials: true,
})