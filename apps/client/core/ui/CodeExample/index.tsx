import { useState } from 'react';
import {
  Button,
  Icon,
  IconButton,
} from '@mezzanine-ui/react';
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from '@mezzanine-ui/icons';
import {
  CopyIcon,
  MoonIcon,
  SunIcon,
} from '@public/icons';
import classes from './index.module.scss';

const CodeExample: FC = () => {
  const [isShown, setIsShown] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.componentWrapper}>
        預設文字
      </div>
      <div className={classes.actionsWrapper}>
        <Button
          type="button"
          prefix={(
            <Icon icon={isShown ? ChevronUpIcon:  ChevronDownIcon} />
          )}
          onClick={() => {
            setIsShown(state => !state);
          }}
        >
          {isShown ? 'Hide Code' : 'Show Code'}
        </Button>
        <div>
          <IconButton
            type="button"
            size="large"
            onClick={() => {
              setIsDark(state => !state);
            }}
          >
            <Icon icon={isDark ? SunIcon : MoonIcon} />
          </IconButton>
          <IconButton
            type="button"
            size="large"
          >
            <Icon icon={CopyIcon} />
          </IconButton>
        </div>
      </div>
      {isShown && (
        <div className={classes.codeWrapper}>
          {"import React from 'react';\nimport { Checkbox } from 'antd';\nimport type { CheckboxChangeEvent } from 'antd/es/checkbox';\n\nconst onChange = (e: CheckboxChangeEvent) => { console.log(`checked = ${e.target.checked}`); };\n\nconst App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;\n\nexport default App;"}
        </div>
      )}
    </div>
  );
}

export default CodeExample;