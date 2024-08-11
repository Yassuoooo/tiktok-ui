import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    // dùng forwardRef truyền ref cho thẻ img ở trong để component MenuItems ở ngoài nhận đc ref
    // fallback: customFallback = images.noImage: truyền prop fallback trong trường hợp có prop fallback truyền từ ngoài vào
    // nếu ko có src thì setFallback cho fallback dùng hình noImage lấy từ images
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
        console.error(`Error loading image: ${src}`);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)} // css mặc định wrapper cho component Image
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export { Image };
