import React from "react";
import ReactDOM from "react-dom";

import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    OMG! I'm so sorry...this never happens...404
    <p><Link to="/">Back to the known universe</Link></p>
  </div>
);

export default NotFoundPage;