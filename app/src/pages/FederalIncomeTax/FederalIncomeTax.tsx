import { FC, FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { HeaderTypography } from 'components';

type FilingStatus = 'S' | 'MJ' | 'MS' | 'HH';
type Bracket = { [key: number]: number };
type TaxBrackets = { [key in FilingStatus]: Bracket };

const BRACKETS: TaxBrackets = {
  S: {
    0.37: 578125,
    0.35: 231250,
    0.32: 182100,
    0.24: 95375,
    0.22: 44725,
    0.12: 11000,
    0.10: 0
  },
  MJ: {
    0.37: 693750,
    0.35: 462500,
    0.32: 364200,
    0.24: 190750,
    0.22: 89450,
    0.12: 22000,
    0.10: 0
  },
  MS: {
    0.37: 346875,
    0.35: 231250,
    0.32: 182100,
    0.24: 95375,
    0.22: 44725,
    0.12: 11000,
    0.10: 0
  },
  HH: {
    0.37: 578100,
    0.35: 231250,
    0.32: 182100,
    0.24: 95350,
    0.22: 59850,
    0.12: 15700,
    0.10: 0
  }
};

const calculateFederalIncomeTax = (value: number, status: FilingStatus) => {
  const bracket = BRACKETS[status];
  let current = value;
  let sum = 0;

  for (const tax in bracket) {
    const threshold = bracket[tax]

    if (current >= threshold) {
      const amount = Number(tax) * (current - threshold);
      const roundedAmount = Math.round(amount * 100) / 100;
      sum += roundedAmount
      current = threshold;
    }
  }
  return sum;
};

const FederalIncomeTax: FC = () => {
  const [status, setStatus] = useState<FilingStatus>('S');
  const [result, setResult] = useState<string | null>(null);

  const handleStatusChange = (event: SelectChangeEvent<FilingStatus>) => {
    setStatus(event.target.value as FilingStatus);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const data = new FormData(event.currentTarget);
    const income = Number(data.get('income'));
    const status = data.get('status') as FilingStatus;

    // Round the result to the nearest hundredth
    const result = calculateFederalIncomeTax(income, status);
    setResult(result.toFixed(2));
  };

  return (
    <Container>
      <HeaderTypography>
        Federal Income Tax Calculator
      </HeaderTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3} marginBottom={3}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="income"
                  label="Taxable income"
                  size="small"
                  defaultValue={50000.00}
                  inputProps={{ min: 0, max: 10000000, step: 0.01 }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="status"
                  label="Filing Status"
                  size="small"
                  value={status}
                  onChange={handleStatusChange}
                  fullWidth
                  required
                >
                  <MenuItem value="S">Single</MenuItem>
                  <MenuItem value="MJ">Married - Filing Jointly</MenuItem>
                  <MenuItem value="MS">Married - Filing Separately</MenuItem>
                  <MenuItem value="HH">Head of Household</MenuItem>
                </Select>
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
            Federal income tax is a system where individuals and businesses pay
            taxes on their earnings. It's a progressive system, meaning higher
            incomes pay higher percentages. People choose filing statuses like
            single or married, impacting tax rates. Deductions and credits can
            lower taxable income.
          </Typography>
          <Typography paragraph>
            Not all income is taxed. Taxpayers may have taxes withheld from
            paychecks or make estimated payments. The filing deadline is
            usually April 15th. Forms like Form 1040 are used to report income.
            Tax planning helps minimize tax liability.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FederalIncomeTax;
