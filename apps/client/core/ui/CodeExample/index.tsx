import { ReactElement, useState, useCallback } from 'react';
import { CopyBlock } from "react-code-blocks";
import {
  Button,
  Icon,
  IconButton,
  Message,
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
  sample: ReactElement;
  code: string;
}

const CodeExample: FC<CodeExampleProps> = ({
  sample,
  code,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const onCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    Message.success('複製成功！');
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.componentWrapper}>
        {sample}
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
            onClick={() => {
              onCopy(code);
            }}
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