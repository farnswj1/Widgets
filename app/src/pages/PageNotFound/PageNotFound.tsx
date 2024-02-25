import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { HeaderTypography, RouterLink } from 'components';

const PageNotFound: FC = () => (
  <Container>
    <HeaderTypography>Page Not Found!</HeaderTypography>
    <Typography>
      This page doesn't exist.
      Click <RouterLink to ="/">here</RouterLink> to
      return to the home page.
    </Typography>
  </Container>
);

export default PageNotFound;
