import { Typography } from '@mezzanine-ui/react';
import GapLayout from '@core/layout/GapLayout';
import UnorderedList from '@core/ui/UnorderedList';

const Code: FC = () => {
  return (
    <>
      <div data-scroll-spy="Example">
        <GapLayout gap={16}>
          <Typography variant="h2" color="text-primary">
            Example
          </Typography>
          <GapLayout gap={48}>
            <GapLayout gap={12}>
              <Typography variant="h4" color="text-primary">
                Default
              </Typography>
              <UnorderedList
                items={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Fusce placerat orci egestas tristique pretium.',
                  'Vivamus vitae odio diam. Nam at enim purus.',
                  'Proin accumsan nulla semper velit rutrum varius. Ut id purus felis. Nullam tempus, nisl a faucibus tristique, urna ligula facilisis orci, id dapibus magna lacus eu neque. ',
                ]}
              />
            </GapLayout>
            <GapLayout gap={12}>
              <Typography variant="h4" color="text-primary">
                Controlled
              </Typography>
              <UnorderedList
                items={[
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  'Fusce placerat orci egestas tristique pretium.',
                ]}
              />
            </GapLayout>
            <GapLayout gap={12}>
              <Typography variant="h4" color="text-primary">
                Disabled
              </Typography>
              <Typography variant="body1" color="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat orci egestas tristique pretium.
              </Typography>
            </GapLayout>
          </GapLayout>
        </GapLayout>
      </div>
      <div data-scroll-spy="Props">
        <GapLayout gap={16}>
          <Typography variant="h2" color="text-primary">
            Props
          </Typography>
        </GapLayout>
      </div>
    </>
  );
}

export default Code;