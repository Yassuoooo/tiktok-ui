import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1]; // lấy phần tử cuối mảng
    // console.log(current); // in ra phần tử cuối mảng của history là data: items
    // console.log(history); // in ra mảng history
    // console.log(current.data[2]); // in ra phần tử cuối của data trong current

    const renderItems = () => {
        // return items.map((item, index) => (
        //     <div>
        //         <MenuItem key={index} data={item} />
        //     </div>
        // ));
        return current.data.map((item, index) => {
            // current tương đương { data: items }
            const isParent = !!item.subMenu; // kiểm tra xem phần tử nào có prop là subMenu
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.subMenu]);
                            // tạo mảng mới, giữ lại item mảng cũ là data: items và đẩy item.subMenu vào
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1)); // xóa phần tử cuối mảng bằng slice
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('content')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length >
                        1 /* nếu mảng history nhiều hơn 1 item thì hiển thị component Header của English */ && (
                        <Header
                            title={current.title}
                            onBack={handleBack} // click vào icon back
                        />
                    )}
                    <div className={cx('scroll-able')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        );
    };

    // xóa state history mới về lại state history cũ khi di chuột ra ngoài tippy
    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            // visible
            hideOnClick={hideOnClick}
            interactive={true}
            offset={[12, 8]}
            delay={[0, 700]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
