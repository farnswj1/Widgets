import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import { CustomThemeProvider } from 'providers';
import { Footer, Header } from 'layouts';
import Routes from 'routes';

const App: FC = () => (
  <CustomThemeProvider>
    <BrowserRouter>
      <Header />
      <Box component="main" paddingY={5} marginBottom="auto">
        <Routes />
      </Box>
      <Footer />
    </BrowserRouter>
  </CustomThemeProvider>
);

export default App;
