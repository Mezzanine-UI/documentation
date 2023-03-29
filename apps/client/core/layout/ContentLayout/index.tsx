import { Typography } from '@mezzanine-ui/react';
import Quotation from '@core/ui/Quotation';
import UnorderedList from '@core/ui/UnorderedList';
import classes from './index.module.scss';

const ContentLayout: FC = () => {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
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
        <Typography variant="h2" color="text-primary">
          Apperance and Styles
        </Typography>
        <Typography variant="body1" color="text-primary">
          Primarily for use in forms, checkboxes are used to collect input from users. Users can select a number of options ranging from zero to multiple options.
        </Typography>
        <UnorderedList title="Use checkboxes when:" items={['users have to select one or more options from a list of related items', 'an explicit action is required to apply settings.']} />
      </div>
    </div>
  );
}

export default ContentLayout;