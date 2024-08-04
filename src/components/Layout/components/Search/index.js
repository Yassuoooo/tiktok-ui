import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem as Account } from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const hanldeSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleFocus = () => {
        setShowResults(true);
    };

    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult([1]);
        // }, 0);
        if (!searchValue.trim()) {
            // xóa khoảng cách bằng trim nếu ko có searchValue
            setSearchResult([]); // xóa mảng state searchResult nếu ko còn giá trị trên input
            return;
        }
        setLoading(true); // trong lúc nhập input sẽ hiển thị icon loading
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`) // fetch api get
            .then((res) => res.json()) // chuyển respone sang json
            .then((res) => {
                setSearchResult(res.data); // dùng setSearchResult đẩy data trong respone vào [] của state searchResult
                setLoading(false); // sau khi nhập input xong sẽ ẩn icon loading
            })
            .catch(() => {
                // ẩn icon loading nếu có lỗi
                setLoading(false);
            });
    }, [searchValue]);

    return (
        <HeadlessTippy // hiển thị bảng search bên dưới thẻ input
            interactive={true}
            visible={showResults && searchResult.length > 0}
            // chỉ hiển thị HeadlessTippy khi showResults là true và có giá trị nhập trong thẻ input searchResult
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <Account key={result.id} data={result} /> // truyền data là kết quả lấy từ api
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults} // khi click ra ngoài khung search result sẽ ẩn đi
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search..."
                    spellCheck={false}
                    onChange={hanldeSearch}
                    onFocus={handleFocus} // khi focus thẻ input sẽ hiện lại bảng search
                />
                {!!searchValue && // convert searchValue sang kiểu boolean
                    !loading && ( // nếu có searchValue và state loading là false thì mới render button clear
                        <button className={cx('clear')} onClick={handleClear}>
                            {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                {/* hiển thị icon loading khi state loading là true */}
                <button className={cx('search-btn')}>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
