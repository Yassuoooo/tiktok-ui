import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from './SuggestedAccounts';
import SuggestedAccounts2 from './SuggestedAccounts/SuggestedAccounts2';
import config from '~/config';
import { ForYouIcon, FollowingIcon, LiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles); // bind styles vào function cx

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<ForYouIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts2 label="Suggested accounts" />
            <SuggestedAccounts2 label="Following accounts" />
        </aside>
    );
}

export default Sidebar;
