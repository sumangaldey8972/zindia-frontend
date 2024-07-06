import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasIntersected) {
                setHasIntersected(true);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasIntersected, options]);

    return [ref, hasIntersected];
};

export default useIntersectionObserver;
