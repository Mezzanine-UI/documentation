import { Typography, Checkbox } from '@mezzanine-ui/react';
import GapLayout from '@core/layout/GapLayout';
import UnorderedList from '@core/ui/UnorderedList';
import Messenger from '@core/ui/Messenger';
import CodeExample from '@core/ui/CodeExample';
import Table from '@core/ui/Table';

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
              <Messenger>Ver.3.0 Notice</Messenger>
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
              <CodeExample
                sample={(
                  <Checkbox size="large" defaultChecked>預設文字</Checkbox>
                )}
                code={"import React from 'react';\nimport { Checkbox } from 'antd';\nimport type { CheckboxChangeEvent } from 'antd/es/checkbox';\n\nconst onChange = (e: CheckboxChangeEvent) => { \n  console.log(`checked = ${e.target.checked}`); \n};\n\nconst App: React.FC = () => { \n  return (\n    <Checkbox onChange={onChange}>Checkbox</Checkbox>\n  );\n};\n\nexport default App;"}
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
          <GapLayout gap={12}>
            <Typography variant="body1" color="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat orci egestas tristique pretium.
            </Typography>
            <Table
              dataSource={[{
                id: '1',
                property: 'checked',
                required: true,
                description: 'Whether the checkbox is checked.\n[boolean] [undefined]',
                type: '',
                default: '',
              }, {
                id: '2',
                property: 'defaultChecked',
                required: true,
                description: 'Whether the checkbox is checked.\n[boolean] [undefined]',
                type: '',
                default: '',
              }, {
                id: '3',
                property: 'checked',
                required: true,
                description: 'If true, it means its children checkboxes have at least one unchecked.\n[boolean] [undefined]',
                type: 'false',
                default: 'ChangeEvent',
              }, {
                id: '4',
                property: 'checked',
                required: false,
                description: 'Since at Mezzanine we use a host element to wrap our input, most derived props will be passed to the host element. If you need direct control to the input element, use this prop to provide to it.\n\nNoticed that if you pass in an id within this prop, the rendered label element will have [htmlFor] sync with passed in id.\n\n[Pick<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "children" | ... 285 more ... | "width">, "children" | ... 274 more ... | "width"> | undefined]',
                type: '',
                default: '',
              }, {
                id: '5',
                property: 'checked',
                required: false,
                description: 'The change event handler of input in checkbox.\n[((event: ChangeEvent<HTMLInputElement>) => void) | undefined]',
                type: '',
                default: '',
              }, {
                id: '6',
                property: 'checked',
                required: false,
                description: 'The size of checkbox.\n["small"] ["medium"] ["large"] [undefined]',
                type: '‘medium’',
                default: 'ChangeEvent',
              }]}
            />
          </GapLayout>
        </GapLayout>
      </div>
    </>
  );
}

export default Code;