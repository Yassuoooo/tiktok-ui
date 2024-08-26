import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem2({ hideOnClick = false }) {
    const renderItem = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('wrapper2')}>
                        <div className={cx('header2')}>
                            <img
                                className={cx('avatar2')}
                                src="https://www.sideshow.com/wp/wp-content/uploads/2022/09/Vergil-Closeup-Devil-May-Cry.jpg"
                                alt="account-avatar"
                            />
                            <div>
                                <Button primary className={cx('follow-btn2')}>
                                    Follow
                                </Button>
                            </div>
                        </div>
                        <div className={cx('body2')}>
                            <p className={cx('nick-name2')}>
                                <strong>username</strong>
                                <FontAwesomeIcon className={cx('check2')} icon={faCircleCheck} />
                            </p>
                            <p className={cx('full-name2')}>FullName</p>
                            <p className={cx('analytics2')}>
                                <strong className={cx('value2')}>8.2M </strong>
                                <span className={cx('label2')}>Followers</span>
                                <strong className={cx('value2')}>8.2M </strong>
                                <span className={cx('label2')}>Followers</span>
                            </p>
                        </div>
                        {/* 
                        <div className={cx('items')}>
                            <div className={cx('follow')}>
                                <p>6.9M</p>
                                <span>Followers</span>
                            </div>
                            <div className={cx('like')}>
                                <p>4444M</p>
                                <span>Likes</span>
                            </div>
                        </div> */}
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[800, 0]}
            offset={[-20, 0]}
            placement="bottom"
            render={renderItem}
            hideOnClick={hideOnClick}
        >
            <div className={cx('account-item')}>
                <img
                    src="https://www.sideshow.com/wp/wp-content/uploads/2022/09/Vergil-Closeup-Devil-May-Cry.jpg"
                    alt="account-avatar"
                    className={cx('avatar1')}
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>username</strong>
                        <FontAwesomeIcon className={cx('check1')} icon={faCircleCheck} />
                    </p>
                    <p className={cx('name')}>FullName</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem2.propTypes = {
    // account: PropTypes.object.isRequired,
};

export default AccountItem2;
