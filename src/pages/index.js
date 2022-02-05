import React, { useEffect } from 'react';
import Gifffer from 'gifffer';

import lemon from '../gifs/lemon.gif';

const Page = () => {
  useEffect(() => {
    window.onload = function () {
      Gifffer();
    };
  });

  return (
    <div>
      <img data-gifffer={lemon} alt="A Lemon" />
    </div>
  );
};

export default Page;
