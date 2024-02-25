import { FC, Fragment } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Information: FC = () => (
  <Fragment>
    <Typography paragraph>
      Body Mass Index (BMI) is a numerical measurement that is commonly
      used to assess an individual's body weight in relation to their
      height. It is a simple and widely used method for categorizing
      individuals into different weight status categories, which can help
      identify potential health risks associated with body weight. Here's
      a detailed summary of BMI:
    </Typography>
    <Typography variant="h5">
      Calculation
    </Typography>
    <Typography paragraph>
      BMI is calculated by dividing an individual's weight in kilograms
      by the square of their height in meters. The formula is expressed
      as follows:
    </Typography>
    <Typography textAlign="center" fontStyle="italic" paragraph>
      BMI = weight * 703 / (height * height)
    </Typography>
    <Typography paragraph>
      Where weight is in pounds (lbs.) and height is in inches.
    </Typography>
    <Typography variant="h5">
      BMI Categories
    </Typography>
    <Typography paragraph>
      BMI values are generally categorized into different ranges to
      assess an individual's weight status.
    </Typography>
    <List dense sx={{ marginBottom: 2 }}>
      <ListItem divider>
        <ListItemText>
          Underweight: BMI less than 18.5
        </ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>
          Normal weight: BMI between 18.5 and 24.9
        </ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>
          Overweight: BMI between 25 and 29.9
        </ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>
          Class 1 Obese (Moderate): BMI between 30 and 34.9
        </ListItemText>
      </ListItem>
      <ListItem divider>
        <ListItemText>
          Class 2 Obese (Severe): BMI between 35 and 39.9
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Class 3 Obese (Very severe or morbid obesity): BMI of 40 and above
        </ListItemText>
      </ListItem>          
    </List>
    <Typography variant="h5">
      Interpretation
    </Typography>
    <Typography paragraph>
      While BMI is a convenient screening tool, it has limitations. It
      does not directly measure body fat percentage or distribution.
      Athletes or individuals with high muscle mass may have a higher BMI
      despite having a low body fat percentage. BMI does not account for
      differences in fat distribution, and health risks can vary among 
      individuals with the same BMI.
    </Typography>
    <Typography variant="h5">
      Health Implications
    </Typography>
    <Typography paragraph>
      BMI is commonly used as an indicator of potential health risks
      associated with weight. Higher BMI values are generally associated
      with an increased risk of various health conditions, including
      cardiovascular diseases, diabetes, and certain types of cancer.
      Lower BMI values may indicate undernutrition and can also be
      associated with health risks.
    </Typography>
    <Typography variant="h5">
      Limitations
    </Typography>
    <Typography paragraph>
      BMI does not differentiate between lean mass and fat mass. It does
      not account for factors such as muscle mass, bone density, and
      distribution of fat. BMI may not be suitable for certain
      populations, such as athletes or the elderly, where muscle mass
      or other factors can affect interpretation.
    </Typography>
    <Typography variant="h5">
      Clinical Use
    </Typography>
    <Typography paragraph>
      BMI is widely used in clinical settings as a quick and simple
      assessment tool for identifying potential weight-related health
      risks. It is often used in conjunction with other health assessments
      to provide a more comprehensive understanding of an individual's
      health status.
    </Typography>
    <Typography paragraph>
      In summary, BMI is a widely used tool to assess and categorize
      individuals based on their weight relative to their height. While
      it provides a quick and easy screening method for potential health
      risks, it has limitations and should be interpreted alongside
      other health indicators for a more accurate assessment.
    </Typography>
  </Fragment>
);

export default Information;
