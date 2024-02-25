import { FC } from 'react';
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle'
import { HeaderTypography, RouterLink } from 'components';
import { WIDGETS } from 'data';

const Widgets: FC = () => (
  <Container>
    <HeaderTypography>
      Select a widget.
    </HeaderTypography>
    <Grid container spacing={2}>
      {
        WIDGETS.map(category => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <Typography variant="h6">
              {category.name}
            </Typography>
            <List dense>
              {
                category.widgets.map(widget => (
                  <ListItem
                    component={RouterLink}
                    to={widget.path}
                    key={widget.name}
                    disablePadding
                  >
                    <ListItemIcon>
                      <CircleIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      {widget.name}
                    </ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
        ))
      }
    </Grid>
  </Container>
);

export default Widgets;
