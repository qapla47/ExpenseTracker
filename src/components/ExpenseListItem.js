import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div className="expense">
    <Link to={`/edit/${id}`}>
      <h3> {description} </h3>
    </Link>
    <p className="expense__text">
      {numeral(amount/100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('MMMM DD, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
