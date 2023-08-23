import { forwardRef, useState } from 'react';
import images from '~/asset/images';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleErr = () => {
        setFallBack(images.noImage);
    };
    return <img {...props} ref={ref} alt={alt} src={fallback || src} onError={handleErr} />;
});

export default Image;
