import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

// các trường hợp của btn:
function Button({
    to,
    href,
    onClick,
    children,
    iconLeft,
    iconRight,
    className,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    me = false,
    la = false,
    ...passProps
}) {
    // to: đường dẫn nội bộ, href: đường dẫn chuyển đến web khác, onClick: sự kiện
    let Comp = 'button'; // mặc định

    // props: các prop nội bộ
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to; // nếu có to thì đưa to vào props
        Comp = Link; // đường dẫn nội bộ bằng Link của react-router-dom
    } else if (href) {
        // nếu có href thì đưa href vào props
        props.href = href;
        Comp = 'a'; // đường dẫn chuyển đến web khác bằng thẻ a
    }

    const classes = cx('wrapper', {
        [className]: className,
        // thêm CSS từ prop className nếu className được truyền vào, cho phép CSS từ bên ngoài component Button.
        primary,
        outline,
        text,
        rounded,
        disabled,
        me,
        la,
    });

    // disabled:
    if (disabled) {
        delete props.onClick;
    }

    return (
        // rải các prop vào bằng spread
        <Comp className={classes} {...props}>
            {iconLeft && <span className={cx('icon-login')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon-login')}>{iconRight}</span>}
        </Comp>
    );
}

export default Button;
