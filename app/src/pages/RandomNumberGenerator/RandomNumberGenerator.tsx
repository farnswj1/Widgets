import { FC, FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { HeaderTypography } from 'components';
import { round } from 'utils';

const RandomNumberGenerator: FC = () => {
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const data = new FormData(event.currentTarget);
    const min = Number(data.get('min'));
    const max = Number(data.get('max'));

    const result = min + round(Math.random() * (max - min));
    setResult(result);
  };

  return (
    <Container>
      <HeaderTypography>
        Sales Tax Calculator
      </HeaderTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3} marginBottom={3}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="min"
                  label="Minimum"
                  size="small"
                  defaultValue={1}
                  inputProps={{ min: 0, max: 1000000000 }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="max"
                  label="Maximum"
                  size="small"
                  defaultValue={100}
                  inputProps={{ min: 0, max: 1000000000 }}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Stack direction="row" spacing={3} alignItems="center">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              {result && <Typography>{result}</Typography>}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            This generator creates a random number within the
            specified range set above.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RandomNumberGenerator;
