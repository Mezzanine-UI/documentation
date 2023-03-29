import { Typography } from '@mezzanine-ui/react';
import classes from './index.module.scss';

type QuotationProps = {
  children: string;
}

const Quotation: FC<QuotationProps> = ({
  children,
}) => {
  return (
    <Typography variant="body1" color="text-secondary" className={classes.root}>
      {children}
    </Typography>
  );
}

export default Quotation;