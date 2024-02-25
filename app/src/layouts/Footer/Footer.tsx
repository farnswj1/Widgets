import { FC } from 'react';
import { Container, Paper, Typography } from '@mui/material';

const year = new Date().getFullYear();

const Footer: FC = () => (
  <Paper component="footer" square>
    <Container maxWidth="lg">
      <Typography variant="body1" textAlign="center" paddingY={2}>
        &copy; {year} Justin Farnsworth
      </Typography>
    </Container>
  </Paper>
);

export default Footer;
