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

    return (
        <Tippy
            // visible
            hideOnClick={hideOnClick}
            interactive={true}
            offset={[12, 8]}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 /* nếu mảng history nhiều hơn 1 item thì hiển thị component Header */ && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    // click vào icon back
                                    setHistory((prev) => prev.slice(0, prev.length - 1)); // xóa phần tử cuối mảng bằng slice
                                }}
                            />
                        )}
                        <div className={cx('scroll-able')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
