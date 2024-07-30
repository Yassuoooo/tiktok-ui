import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // return <button>{JSON.stringify(data)}</button>;
    // return <button>title</button>;
    return (
        <Button className={cx('menu-item')} iconLeft={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
