import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Page = () => {
  return (
    <div className="center-me">
      <StaticImage className="static-image" src="../images/orange.jpg" alt="An Orange" />
    </div>
  );
};

export default Page;
