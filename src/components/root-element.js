import React, { useEffect } from 'react';
import Gifffer from 'gifffer';

const RootElement = ({ children }) => {
  useEffect(() => {
    window.onload = function () {
      Gifffer();
    };
  }, []);

  return <>{children}</>;
};

export default RootElement;
