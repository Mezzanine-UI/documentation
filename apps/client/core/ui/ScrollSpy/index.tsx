import {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import scrollIntoView from 'scroll-into-view';
import { Button, Typography, cx } from '@mezzanine-ui/react';
import { useScrollSpy } from '@core/hooks/useScrollSpy';
import classes from './index.module.scss';

export interface ScrollSpyProps {
  containerRef: MutableRefObject<HTMLDivElement | null> | null;
  top?: number;
  style?: CSSProperties;
  className?: string;
}

const SCROLL_SPY_PORTAL_UID = 'scroll-spy';

const ScrollSpy: FC<ScrollSpyProps> & {
  SCROLL_SPY_PORTAL_UID: string;
} = ({
  containerRef,
}) => {
  const ref = useRef<HTMLElement | null>(
    (typeof window !== 'undefined' ? window.document.getElementById(SCROLL_SPY_PORTAL_UID) : null) || null,
  );
  const { current, children } = useScrollSpy(containerRef);

  const handleClickItem = useCallback((item: HTMLElement) => {
    scrollIntoView(item, {
      time: 200,
      align: { top: 0, topOffset: 0 },
    });
  }, []);

  useEffect(() => {
    ref.current = ref.current || (typeof window !== 'undefined' ? window.document.getElementById(SCROLL_SPY_PORTAL_UID) : null) || null;
  }, []);

  return (
    <div className={classes.root}>
      {children?.map((scrollSpyItem: HTMLDivElement) => {
        const { dataset: { scrollSpy = '' } } = scrollSpyItem;

        return (
          !!scrollSpy && (
            <Button
              key={scrollSpy}
              type="button"
              size="small"
              onClick={() => handleClickItem(scrollSpyItem)}
              className={cx(classes.navButton, {
                [classes.active]: current === scrollSpy,
              })}
            >
              <Typography variant="h6" color="text-secondary" className={classes.navText}>
                {scrollSpy}
              </Typography>
            </Button>
          )
        );
      })}
    </div>
  );
};

ScrollSpy.SCROLL_SPY_PORTAL_UID = SCROLL_SPY_PORTAL_UID;

export default ScrollSpy;