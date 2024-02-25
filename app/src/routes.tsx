import { FC } from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import {
  BodyMassIndex,
  FederalIncomeTax,
  Home,
  PageNotFound,
  RandomNumberGenerator,
  SalesTax,
  Widgets
} from 'pages';

const Routes: FC = () => (
  <BrowserRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/widgets">
      <Route index element={<Widgets />} />
      <Route path="body-mass-index" element={<BodyMassIndex />} />
      <Route path="federal-income-tax" element={<FederalIncomeTax />} />
      <Route path="random-number-generator" element={<RandomNumberGenerator />} />
      <Route path="sales-tax" element={<SalesTax />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
  </BrowserRoutes>
);

export default Routes;
