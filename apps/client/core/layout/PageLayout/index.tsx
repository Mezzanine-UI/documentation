import {
  Typography,
} from '@mezzanine-ui/react';
import TabsLayout from '@core/layout/TabsLayout';
import ContentLayout from '@core/layout/ContentLayout';
import classes from './index.module.scss';

type PageLayoutProps = {
  title: string;
  description: string;
}

const PageLayout: FC<PageLayoutProps> = ({
  title,
  description,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <div className={classes.block}>
          <Typography variant="h1" color="text-primary" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" color="text-primary" className={classes.description}>
            {description}
          </Typography>
        </div>
      </div>
      <TabsLayout tabs={[{
        id: 'Design Guidelines',
        name: 'Design Guidelines',
        component: <ContentLayout />
      }, {
        id: 'Code & Examples',
        name: 'Code & Examples',
        component: <ContentLayout />
      }]} />
    </div>
  );
}

export default PageLayout;