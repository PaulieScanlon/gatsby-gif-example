import React from 'react';

import lemon from '../gifs/lemon.gif';

const Page = () => {
  return (
    <div>
      <img data-gifffer={lemon} alt="A Lemon" style={{ opacity: 0 }} />
    </div>
  );
};

export default Page;
