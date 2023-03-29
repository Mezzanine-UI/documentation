import { Typography } from '@mezzanine-ui/react';
import classes from './index.module.scss';

type UnorderedListProps = {
  title?: string;
  items: string[];
}

const UnorderedList: FC<UnorderedListProps> = ({
  title,
  items,
}) => {
  return (
    <div className={classes.root}>
      {title && (
        <Typography variant="body1" color="text-primary">{title}</Typography>
      )}
      <ul className={classes.list}>
        {items.map((item, index) => (
          <li key={index}>
            <Typography variant="body1" color="text-primary">{item}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnorderedList;