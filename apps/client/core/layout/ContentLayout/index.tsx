import { ReactElement, useRef } from 'react';
import ScrollSpy from '@core/ui/ScrollSpy';
import classes from './index.module.scss';

type ContentLayoutProps = {
  children: ReactElement;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  children,
}) => {
  const scrollSpyRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={classes.root}>
      <div ref={scrollSpyRef} className={classes.content}>
        {children}
      </div>
      <ScrollSpy containerRef={scrollSpyRef} />
    </div>
  );
}

export default ContentLayout;