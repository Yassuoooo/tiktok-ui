import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    // return <button>{JSON.stringify(data)}</button>;
    // return <button>title</button>;
    const classes = cx('menu-item', {
        separate: data.separate, // lấy separate từ data và gán cho prop separate
    });
    return (
        <Button className={classes} iconLeft={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
