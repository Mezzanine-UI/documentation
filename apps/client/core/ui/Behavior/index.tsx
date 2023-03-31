import { ReactElement } from 'react';
import { Typography, Icon, cx } from '@mezzanine-ui/react';
import { CheckCircleFilledIcon, TimesCircleFilledIcon } from '@mezzanine-ui/icons';
import classes from './index.module.scss';

type BehaviorProps = {
  title: string;
  content: {
    do: ReactElement;
    dont: ReactElement;
  },
}

const Behavior: FC<BehaviorProps> = ({
  title,
  content,
}) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" color="text-primary">{title}</Typography>
      <div className={classes.blocks}>
        <div className={cx(classes.block, classes.do)}>
          <div className={classes.titleWrapper}>
            <Icon icon={CheckCircleFilledIcon} color="success" size={28} />
            <Typography variant="h4" color="text-primary">Do</Typography>
          </div>
          {content.do}
        </div>
        <div className={cx(classes.block, classes.dont)}>
          <div className={classes.titleWrapper}>
            <Icon icon={TimesCircleFilledIcon} color="error" size={28} />
            <Typography variant="h4" color="text-primary">Don’t</Typography>
          </div>
          {content.dont}
        </div>
      </div>
    </div>
  );
}

export default Behavior;