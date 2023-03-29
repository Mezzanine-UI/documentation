import { Typography } from '@mezzanine-ui/react';
import Quotation from '@core/ui/Quotation';
import classes from './index.module.scss';

const ContentLayout: FC = () => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" color="text-primary">
        When To Use
      </Typography>
      <Quotation>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Quotation>
      <Typography variant="body1" color="text-primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat orci egestas tristique pretium. Vivamus vitae odio diam. Nam at enim purus.
      </Typography>
      <Typography variant="body1" color="text-primary">
        Praesent molestie enim et sem bibendum, id sagittis velit volutpat. Sed nec magna vehicula, nulla semper velit venenatis ante et, rhoncus odio.
      </Typography>
    </div>
  );
}

export default ContentLayout;