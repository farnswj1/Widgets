import { FC } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { CustomIconButton, RouterLink } from 'components';
import { usePaletteMode } from 'hooks';

const Header: FC = () => {
  const { palette } = useTheme();
  const setPaletteMode = usePaletteMode();
  const isDarkMode = palette.mode === 'dark';

  const handlePaletteMode = () => setPaletteMode(isDarkMode ? 'light' : 'dark');

  return (
    <AppBar component="header" position="sticky" enableColorOnDark>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <RouterLink to="/" underline="none" marginRight="auto">
            <Typography variant="h6">
              Widgets
            </Typography>
          </RouterLink>
          <CustomIconButton
            title={`Enable ${isDarkMode ? 'light' : 'dark'} mode.`}
            onClick={handlePaletteMode}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </CustomIconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
