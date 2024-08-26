import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import TippyContent from './TippyContent';
import styles from './SidebarTippy.module.scss';

const cx = classNames.bind(styles);
function SidebarTippy({ children }) {
    const renderItems = () => {
        return (
            <div className={cx('content')}>
                {/* <p>This is a popper content</p> */}
                <TippyContent />
            </div>
        );
    };

    const renderResult = () => {
        return (
            <div className={cx('content')} tabIndex="-1">
                <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
            </div>
        );
    };

    return (
        <Tippy
            visible
            interactive={true}
            offset={[12, 8]}
            delay={[0, 700]}
            placement="right-end"
            // trigger="click"
            render={renderResult}
        >
            {/* <button className={cx('button')}>Hover me</button> */}
            {children}
        </Tippy>
    );
}

SidebarTippy.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidebarTippy;
