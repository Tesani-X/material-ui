import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';
import * as Icons from '@mui/icons-material';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { pascalCase } from './utils';

interface Props extends SvgIconProps {
  baseClassName: string;
  icon: string;
  theme: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  width: number | string;
  height: number;
}

export function Icon(props: Props): JSX.Element | null {
  const { height, icon: iconProp, theme, width, ...other } = props;
  const iconName = `${iconProp && pascalCase(iconProp)}${theme === 'Filled' ? '' : theme}`;
  const MuiIcon = Object.keys(Icons).indexOf(iconName) !== -1 ? Icons[iconName] : undefined;

  return MuiIcon ? <MuiIcon style={{ width, height }} {...other} /> : null;
}

Icon.defaultProps = {
  baseClassName: 'material-icons',
  icon: 'add',
  theme: 'Filled' as 'Filled',
  width: 24,
  height: 24,
};

addPropertyControls(Icon, {
  baseClassName: {
    type: ControlType.String,
    title: 'Base class name',
  },
  icon: {
    type: ControlType.String,
    title: 'Icon',
  },
  theme: {
    type: ControlType.Enum,
    title: 'Theme',
    options: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'],
  },
});
