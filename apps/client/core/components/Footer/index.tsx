import { Typography } from '@mezzanine-ui/react';
import classes from './index.module.scss';

const Footer: FC = () => {
  return (
    <div className={classes.root}>
      <Typography color="text-primary" variant="body1">
        © 2022 Rytass Co., Ltd. All rights reserved
      </Typography>
    </div>
  );
}

export default Footer;