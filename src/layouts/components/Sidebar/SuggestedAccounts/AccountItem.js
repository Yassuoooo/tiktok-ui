import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                src="https://www.sideshow.com/wp/wp-content/uploads/2022/09/Vergil-Closeup-Devil-May-Cry.jpg"
                alt="account-avatar"
                className={cx('avatar')}
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>username</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>FullName</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    // account: PropTypes.object.isRequired,
};

export default AccountItem;
