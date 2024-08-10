import * as httpRequest from '~/utils/httpRequest';

// tạo api search
export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            // https://tiktok.fullstack.edu.vn/api/users/search
            params: {
                q,
                type,
            },
        });
        return res.data; // response.data.data
    } catch (error) {
        console.error('fetchApi error:', error);
    }
};
