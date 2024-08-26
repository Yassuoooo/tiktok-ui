import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import AccountItem2 from './AccountItem2';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem2 />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
