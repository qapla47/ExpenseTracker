import moment from 'moment';

export default [{
  id: '1',
  description: 'Guinness',
  note: 'favorite standby',
  amount: 500,
  createdAt: 0
},
{
  id: '2',
  description: 'Chocolate Bock',
  note: 'aweful',
  amount: 400,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'Blood Orange Gose',
  note: 'tasty!',
  amount: 600,
  createdAt: moment(0).add(4, 'days').valueOf()
}]