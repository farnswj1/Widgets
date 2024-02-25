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
import Information from './Information';

const categorizeBMI = (value: number) => {
  if (value < 18.5) return 'Underweight';
  else if (value < 25) return 'Healthy';
  else if (value < 30) return 'Overweight';
  else if (value < 35) return 'Obese Class 1';
  else if (value < 40) return 'Obese Class 2';
  else return 'Obese Class 3';
};

const BodyMassIndex: FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const data = new FormData(event.currentTarget);
    const weight = Number(data.get('weight'));
    const height = Number(data.get('height'));

    // Round the result to the nearest hundredth
    const result = (weight * 703) / (height ** 2);
    const roundedResult = Math.round(result * 100) / 100;
    const category = categorizeBMI(roundedResult);
    setResult(`${roundedResult} (${category})`);
  };

  return (
    <Container>
      <HeaderTypography>
        Body Mass Index Calculator
      </HeaderTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3} marginBottom={3}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="weight"
                  label="Weight (lbs.)"
                  size="small"
                  defaultValue={160}
                  inputProps={{ min: 10, max: 1500 }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="height"
                  label="Height (inches)"
                  size="small"
                  defaultValue={70}
                  inputProps={{ min: 5, max: 120 }}
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
          <Information />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BodyMassIndex;
