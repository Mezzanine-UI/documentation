import { Typography } from '@mezzanine-ui/react';
import Quotation from '@core/ui/Quotation';
import UnorderedList from '@core/ui/UnorderedList';
import Behavior from '@core/ui/Behavior';
import classes from './index.module.scss';

const Content: FC = () => {
  return (
    <>
      <div data-scroll-spy="When To Use" className={classes.section}>
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
      <div data-scroll-spy="Apperance and Styles" className={classes.section}>
        <Typography variant="h2" color="text-primary">
          Apperance and Styles
        </Typography>
        <Typography variant="body1" color="text-primary">
          Primarily for use in forms, checkboxes are used to collect input from users. Users can select a number of options ranging from zero to multiple options.
        </Typography>
        <UnorderedList title="Use checkboxes when:" items={['users have to select one or more options from a list of related items', 'an explicit action is required to apply settings.']} />
      </div>
      <div data-scroll-spy="States" className={classes.section}>
        <Typography variant="h2" color="text-primary">
          States
        </Typography>
        <Typography variant="body1" color="text-primary">
          Primarily for use in forms, checkboxes are used to collect input from users. Users can select a number of options ranging from zero to multiple options.
        </Typography>
        <UnorderedList title="Use checkboxes when:" items={['users have to select one or more options from a list of related items', 'an explicit action is required to apply settings.']} />
      </div>
      <div data-scroll-spy="Content guidelines" className={classes.section}>
        <Typography variant="h2" color="text-primary">
          Content guidelines
        </Typography>
        <UnorderedList items={['users have to select one or more options from a list of related items', 'an explicit action is required to apply settings.']} />
      </div>
      <div data-scroll-spy="Accessibility (Do And Don’t)" className={classes.section}>
        <Typography variant="h2" color="text-primary">
          Accessibility (Do And Don’t)
        </Typography>
        <Typography variant="body1" color="text-primary">
          Primarily for use in forms, checkboxes are used to collect input from users. Users can select a number of options ranging from zero to multiple options.
        </Typography>
        <Behavior
          title="Behavior 1"
          content={{
            do: <UnorderedList items={['users have to select one or more options from a list of related items', 'Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.']} />,
            dont: <UnorderedList items={['users have to select one or more options from a list of related items', 'Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet']} />,
          }}
        />
        <Behavior
          title="Behavior 2"
          content={{
            do: <UnorderedList items={['users have to select one or more options from a list of related items', 'Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.']} />,
            dont: <UnorderedList items={['users have to select one or more options from a list of related items', 'Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet']} />,
          }}
        />
        <Behavior
          title="Behavior 3"
          content={{
            do: <UnorderedList items={['users have to select one or more options from a list of related items', 'Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.']} />,
            dont: <UnorderedList items={['users have to select one or more options from a list of related items', 'Fusce placerat orci egestas tristique pretium. Lorem ipsum dolor sit amet']} />,
          }}
        />
      </div>
    </>
  );
}

export default Content;