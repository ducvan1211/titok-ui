import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/asset/images';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleErr = () => {
        setFallBack(images.noImage);
    };
    return <img {...props} ref={ref} alt={alt} src={fallback || src} onError={handleErr} />;
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};
export default Image;
