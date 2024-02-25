import { FC } from 'react';
import { IconButton, IconButtonProps, Tooltip } from '@mui/material';

interface CustomIconButtonProps extends IconButtonProps {
  href?: string;
}

const CustomIconButton: FC<CustomIconButtonProps> = ({ title, ...rest }) => (
  <Tooltip title={title} arrow>
    <IconButton color="inherit" {...rest} />
  </Tooltip>
);

export default CustomIconButton;
