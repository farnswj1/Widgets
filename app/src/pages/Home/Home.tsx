import { FC } from 'react';
import { Container } from '@mui/material';
import { ButtonLink, HeaderTypography } from 'components';

const Home: FC = () => (
  <Container>
    <HeaderTypography>
      Welcome to Widgets!
    </HeaderTypography>
    <ButtonLink
      variant="contained"
      color="primary"
      size="large"
      to="/widgets"
    >
      Explore
    </ButtonLink>
  </Container>
);

export default Home;
