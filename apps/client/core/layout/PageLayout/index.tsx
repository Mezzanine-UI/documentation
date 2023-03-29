import {
  Typography,
} from '@mezzanine-ui/react';
import classes from './index.module.scss';

const PageLayout: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div className={classes.block}>
          <Typography variant="h1" color="text-primary" className={classes.title}>
            Checkbox
          </Typography>
          <Typography variant="body1" color="text-primary" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales tortor eu ipsum porta dignissim. Cras faucibus laoreet urna, id hendrerit velit malesuada nec. Fusce iaculis massa diam, vel placerat nisl bibendum sed. Quisque non interdum nibh. Nulla scelerisque est sed molestie cursus.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default PageLayout;