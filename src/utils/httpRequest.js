import axios from 'axios';

// console.log(process.env.REACT_APP_BASE_URL);

// tạo instance request bằng axios chứa url host name và protocol
const httpRequest = axios.create({
    // baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    baseURL: process.env.REACT_APP_BASE_URL, // lấy url từ environment variable REACT_APP_BASE_URL
});

// custom method get
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data; // res trả về sẽ là response.data
};

export default httpRequest;
