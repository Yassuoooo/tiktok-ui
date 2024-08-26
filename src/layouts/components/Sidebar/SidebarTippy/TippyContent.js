import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './SidebarTippy.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function TippyContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-item')}>
                <img
                    className={cx('avatar')}
                    src="https://www.sideshow.com/wp/wp-content/uploads/2022/09/Vergil-Closeup-Devil-May-Cry.jpg"
                    alt="account-avatar"
                />
                <p className={cx('items')}>
                    <strong className={cx('nick-name')}>username</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('full-name')}>FullName</p>
                <div className={cx('items')}>
                    <div className={cx('follow')}>
                        <p>6.9M</p>
                        <span>Followers</span>
                    </div>
                    <div className={cx('like')}>
                        <p>4444M</p>
                        <span>Likes</span>
                    </div>
                </div>
            </div>
            <Button primarySuggest className={cx('follow-btn')}>
                Follow
            </Button>
        </div>
    );
}

export default TippyContent;
