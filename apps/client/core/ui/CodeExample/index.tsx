import { useState } from 'react';
import { CopyBlock } from "react-code-blocks";
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
import { theme } from './constants/theme';
import classes from './index.module.scss';

type CodeExampleProps = {
  code: string;
}

const CodeExample: FC<CodeExampleProps> = ({
  code,
}) => {
  const [isShown, setIsShown] = useState(true);
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
          <CopyBlock
            language="jsx"
            text={code}
            showLineNumbers={false}
            theme={theme}
          />
        </div>
      )}
    </div>
  );
}

export default CodeExample;