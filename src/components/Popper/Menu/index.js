import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1]; // lấy phần tử cuối mảng
    // console.log(current);
    // console.log(current.data);

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
                            console.log(item.subMenu);
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
            interactive={true}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1)); // xóa phần tử cuối mảng bằng slice
                                }}
                            />
                        )}
                        {/* nếu mảng history có nhiều hơn 1 item thì hiển thị thẻ Header */}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
