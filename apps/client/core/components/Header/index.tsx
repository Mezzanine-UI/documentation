import {
  AppBar,
  AppBarBrand,
  AppBarMain,
  AppBarSupport,
  Navigation,
  NavigationItem,
  Input,
  Icon,
} from '@mezzanine-ui/react';
import { SearchIcon } from '@mezzanine-ui/icons';
import Image from 'next/image';
import logo from '@public/images/mezzanine.svg';
import classes from './index.module.scss';

const Header: FC = () => {
  return (
    <AppBar>
      <AppBarBrand>
        <Image src={logo} alt="" />
      </AppBarBrand>
      <AppBarMain className={classes.main}>
        <Navigation>
          <NavigationItem
            key="Foundation"
          >
            Foundation
          </NavigationItem>
          <NavigationItem
            key="Components"
            active
          >
            Components
          </NavigationItem>
          <NavigationItem
            key="Resources"
          >
            Resources
          </NavigationItem>
        </Navigation>
      </AppBarMain>
      <AppBarSupport className={classes.support}>
        <Input
          placeholder="Search..."
          prefix={<Icon icon={SearchIcon} className={classes.icon} />}
          clearable
          size="large"
        />
      </AppBarSupport>
    </AppBar>
  );
}

export default Header;