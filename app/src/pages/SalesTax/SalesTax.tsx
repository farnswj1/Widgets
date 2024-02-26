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

const SalesTax: FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const data = new FormData(event.currentTarget);
    const price = Number(data.get('price'));
    const rate = Number(data.get('rate'));

    const result = round(price * ((100 + rate) / 100), 2);
    setResult(result.toFixed(2));
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
                  name="price"
                  label="Price before tax"
                  size="small"
                  defaultValue={100.00}
                  inputProps={{ min: 0, max: 1000000, step: 0.01 }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="rate"
                  label="Tax rate"
                  size="small"
                  defaultValue={6.5}
                  inputProps={{ min: 0, max: 100, step: 0.01 }}
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
            Sales tax is a government-imposed fee on the sale of goods and
            sometimes services. Sellers collect it from buyers during
            transactions, and the collected amount is sent to the government.
            Rates vary by location, and exemptions may apply for certain items.
            Sales tax is a significant revenue source for governments,
            supporting public services.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SalesTax;
