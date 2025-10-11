import classNames from 'classnames';
import {FC, memo, PropsWithChildren, useEffect, useRef, useState} from 'react';

interface Props {
  className?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

const AnimateOnScroll: FC<PropsWithChildren<Props>> = memo(({children, className, once = true, rootMargin = '0px', threshold = 0.15}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once && el) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      {root: null, rootMargin, threshold},
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return (
    <div className={classNames(
        className,
        'transform transition-all duration-700 will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      )} ref={ref}>
      {children}
    </div>
  );
});

AnimateOnScroll.displayName = 'AnimateOnScroll';
export default AnimateOnScroll;
