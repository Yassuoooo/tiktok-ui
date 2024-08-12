import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faKeyboard,
    faCloudArrowUp,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Menu as MenuItems } from '~/components/Popper';
import { EnglishIcon } from '~/components/Icons';
import { FeedbackIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
// import { icon } from '@fortawesome/fontawesome-svg-core';

// console.log(images.logo);
const cx = classNames.bind(styles); // bind styles vào function cx giúp css tiện hơn

// currentUser = false:
const MENU_ITEMS = [
    {
        // icon: <FontAwesomeIcon icon={faEarthEurope} />,
        icon: <EnglishIcon />,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        // icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        icon: <FeedbackIcon />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

// console.log(Array.isArray(MENU_ITEMS)); // true

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        //console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    // currentUser = true:
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/userIns',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true, // dấu gạch trên Log out
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo: */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </Link>

                {/* Search: */}
                {/* render ra component Search: */}
                <Search />

                {/* Action: */}
                <div className={cx('actions')}>
                    {currentUser ? ( // nếu currentUser là true tương đương user đã login thì hiển thị:
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        // nếu ko có thì hiển thị:
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <MenuItems items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {/* nếu có currentUser thì dùng userMenu, ngược lại dùng MENU_ITEMS */}
                        {currentUser ? (
                            <Image // component Image cần ref để truyền cho Tippy trong component MenuItems
                                src="https://www.sideshow.com/wp/wp-content/uploads/2022/09/Vergil-Closeup-Devil-May-Cry.jpg"
                                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                                // src="fgfg" // hiển thị noImage nếu src lỗi
                                className={cx('user-avatar')}
                                alt="scum"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </MenuItems>
                </div>
            </div>
        </header>
    );
}

export default Header;
