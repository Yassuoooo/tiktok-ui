import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); // bind styles vào function cx giúp css tiện hơn

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
