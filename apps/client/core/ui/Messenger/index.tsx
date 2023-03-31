import {
  Typography,
  Icon,
} from '@mezzanine-ui/react';
import { InfoCircleFilledIcon } from '@mezzanine-ui/icons';
import classes from './index.module.scss';

type MessengerProps = {
  children: string;
}

const Messenger: FC<MessengerProps> = ({
  children
}) => {
  return (
    <div className={classes.root}>
      <Icon icon={InfoCircleFilledIcon} size={24} color="primary" />
      <Typography variant="body1" color="text-primary">{children}</Typography>
    </div>
  );
}

export default Messenger;