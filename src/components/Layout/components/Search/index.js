import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem as Account } from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();

    const hanldeSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClear = () => {
        setSearchValue('');
        // setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleFocus = () => {
        setShowResults(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    return (
        <HeadlessTippy // hiển thị bảng search bên dưới thẻ input
            interactive={true}
            visible={showResults && searchResult.length > 0}
            // chỉ hiển thị HeadlessTippy khi showResults là true và có giá trị nhập trong thẻ input searchResult
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <Account />
                        <Account />
                        <Account />
                        <Account />
                        <Account />
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
                {!!searchValue && ( // convert searchValue sang kiểu boolean và nếu có searchValue thì mới render button clear
                    <button className={cx('clear')} onClick={handleClear}>
                        {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
