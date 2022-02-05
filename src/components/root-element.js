import React, { useEffect } from 'react';
import Gifffer from 'gifffer';

const RootElement = ({ children }) => {
  useEffect(() => {
    Gifffer();
  }, []);

  return <>{children}</>;
};

export default RootElement;
