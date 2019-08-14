import React from "react";

import '../scss/widgets/_app.scss';
import '../scss/widgets/_outer-page.scss';

const Page404 = () => {
  return (
    <div className="app__page404 outer-page">
      <div className="message">
        <h1>404</h1>
        <h3>Page Not Found!!!</h3>
      </div>
    </div>
  );
};

export default Page404;
