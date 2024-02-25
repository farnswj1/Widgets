import { WidgetCategory } from 'types';

const WIDGETS: WidgetCategory[] = [
  {
    name: 'Finances',
    widgets: [
      {
        name: 'Federal Income Tax Calculator',
        path: '/widgets/federal-income-tax'
      },
      {
        name: 'Sales Tax Calculator',
        path: '/widgets/sales-tax'
      }
    ]
  },
  {
    name: 'Health & Fitness',
    widgets: [
      {
        name: 'Body Mass Index Calculator',
        path: '/widgets/body-mass-index'
      }
    ]
  },
  {
    name: 'Math',
    widgets: [
      {
        name: 'Random Number Generator',
        path: '/widgets/random-number-generator'
      }
    ]
  }
];

export default WIDGETS;
