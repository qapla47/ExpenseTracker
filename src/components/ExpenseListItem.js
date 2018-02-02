import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div className="expense">
    <Link to={`/edit/${id}`}>
      <h3> {description} </h3>
    </Link>
    <p className="expense__text">
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
