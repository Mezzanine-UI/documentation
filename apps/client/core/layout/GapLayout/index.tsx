import { ReactElement } from 'react';
import { cx } from '@mezzanine-ui/react';
import classes from './index.module.scss';

type GapLayoutProps = {
  children: ReactElement | ReactElement[];
  horizontal?: boolean;
  gap: number;
}

const GapLayout: FC<GapLayoutProps> = ({
  children,
  horizontal = false,
  gap,
}) => {
  return (
    <div
      className={cx(classes.root, {
        [classes.horizontal]: horizontal,
      })}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default GapLayout;