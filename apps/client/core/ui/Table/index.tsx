import dynamic from 'next/dynamic';
import {
  Typography,
} from '@mezzanine-ui/react';
import { TableColumn } from '@mezzanine-ui/core/table';
import classes from './index.module.scss';

const MznTable = dynamic(() => import("@mezzanine-ui/react/Table"), {
  ssr: false,
});

type DataSource = {
  id: string;
  property: string;
  required: boolean;
  description: string;
  type: string;
  default: string;
}

type TableProps = {
  dataSource: DataSource[];
}

const Table: FC<TableProps> = ({
  dataSource,
}) => {
  const columns: TableColumn<DataSource>[] = [
    {
      title: 'Property',
      dataIndex: 'property',
      width: 120,
      render: (source) => <Typography variant="body2" color="text-primary">{source.property}</Typography>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 384,
      ellipsis: false,
      render: (source) => <Typography variant="body2" color="text-primary" className={classes.description}>{source.description}</Typography>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      render: (source) => source.type ? <Typography variant="body2" color="text-primary" className={classes.code}>{source.type}</Typography> : '-',
    },
    {
      title: 'Default',
      dataIndex: 'default',
      render: (source) => source.default ? <Typography variant="body2" color="text-primary" className={classes.code}>{source.default}</Typography> : '-',
    }
  ];

  return (
    <MznTable
      dataSource={dataSource}
      columns={columns}
    />
  );
}

export default Table;