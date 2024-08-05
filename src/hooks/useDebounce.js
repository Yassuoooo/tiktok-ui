import { useState, useEffect } from 'react';

// tạo custom hook useDebounce:
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        // set state debouncedValue giá trị value sau mỗi lần setTimeout với time là delay truyền vào

        return () => clearTimeout(handler); // hàm cleanup xóa setTimeout khi component unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]); // callback trên gọi lại khi deps value thay đổi

    return debouncedValue; // trả về state debouncedValue
}

export default useDebounce;
