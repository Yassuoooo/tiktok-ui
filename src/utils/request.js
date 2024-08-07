import axios from 'axios';

// tạo instance request bằng axios chứa url host name và protocol
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// custom method get
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data; // res trả về sẽ là response.data
};

export default request;
