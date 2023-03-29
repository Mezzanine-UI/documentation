import {
  Tabs,
  TabPane,
  Tab,
} from '@mezzanine-ui/react';

const TabsLayout: FC = () => {
  return (
    <Tabs>
      <TabPane
        key="Design Guidelines"
        tab={(
          <Tab>Design Guidelines</Tab>
        )}
      >
        Design Guidelines
      </TabPane>
      <TabPane
        key="Code & Examples"
        tab={(
          <Tab>Code & Examples</Tab>
        )}
      >
        Code & Examples
      </TabPane>
    </Tabs>
  );
}

export default TabsLayout;