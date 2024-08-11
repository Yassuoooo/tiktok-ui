import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Image } from '~/components/Image';

const cx = classNames.bind(styles); // bind styles vào function cx giúp css tiện hơn

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                // src="https://www.sideshow.com/wp/wp-content/uploads/2022/09/Vergil-Closeup-Devil-May-Cry.jpg"
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                    {/* chỉ hiển thị tick khi prop tick của object là true */}
                </h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    // dùng PropTypes để kiểm tra xem kiểu dữ liệu của prop data có phải là object và bắt buộc nhận data
};

export default AccountItem;
