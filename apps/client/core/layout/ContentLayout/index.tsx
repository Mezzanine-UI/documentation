import { Typography } from '@mezzanine-ui/react';
import classes from './index.module.scss';

const ContentLayout: FC = () => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" color="text-primary">
        When To Use
      </Typography>
    </div>
  );
}

export default ContentLayout;