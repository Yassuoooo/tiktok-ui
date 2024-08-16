import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItem = ({ title, to, icon }) => {
    return (
        // truyền className dưới dạng function
        // dùng isActive của nav để bắt và css cho active, nav là object trả về từ callback khi NavLink đc active
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} end>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
