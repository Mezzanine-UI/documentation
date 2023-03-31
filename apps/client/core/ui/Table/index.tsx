import dynamic from 'next/dynamic';
import {
  Typography,
} from '@mezzanine-ui/react';

const MznTable = dynamic(() => import("@mezzanine-ui/react/Table"), {
  ssr: false,
});

const Table: FC = () => {
  return (
    <MznTable
      dataSource={[{
        id: 1,
        property: 'checked',
        required: true,
        description: 'Whether the checkbox is checked.\n[boolean] [undefined]',
        type: '',
        default: '',
      }, {
        id: 2,
        property: 'defaultChecked',
        required: true,
        description: 'Whether the checkbox is checked.\n[boolean] [undefined]',
        type: '',
        default: '',
      }, {
        id: 3,
        property: 'checked',
        required: true,
        description: 'If true, it means its children checkboxes have at least one unchecked.\n[boolean] [undefined]',
        type: 'false',
        default: 'ChangeEvent',
      }, {
        id: 4,
        property: 'checked',
        required: false,
        description: 'Since at Mezzanine we use a host element to wrap our input, most derived props will be passed to the host element. If you need direct control to the input element, use this prop to provide to it.\n\nNoticed that if you pass in an id within this prop, the rendered label element will have [htmlFor] sync with passed in id.\n\n[Pick<Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "children" | ... 285 more ... | "width">, "children" | ... 274 more ... | "width"> | undefined]',
        type: '',
        default: '',
      }, {
        id: 5,
        property: 'checked',
        required: false,
        description: 'The change event handler of input in checkbox.\n[((event: ChangeEvent<HTMLInputElement>) => void) | undefined]',
        type: '',
        default: '',
      }, {
        id: 6,
        property: 'checked',
        required: false,
        description: 'The size of checkbox.\n["small"] ["medium"] ["large"] [undefined]',
        type: '‘medium’',
        default: 'ChangeEvent',
      }]}
      columns={[{
        title: 'Property',
        dataIndex: 'property',
        width: 120,
      }, {
        title: 'Description',
        dataIndex: 'description',
        width: 384,
        ellipsis: false,
        render: (source) => <Typography variant="body2" color="text-primary">{source.description as string}</Typography>,
      }, {
        title: 'Type',
        dataIndex: 'type',
        render: (source) => `${source.type || '-'}`,
      }, {
        title: 'Default',
        dataIndex: 'default',
        render: (source) => `${source.default || '-'}`,
      }]}
    />
  );
}

export default Table;