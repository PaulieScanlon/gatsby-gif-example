import React, { useEffect } from 'react';
import Gifffer from 'gifffer';

const PageElement = ({ children }) => {
  useEffect(() => {
    Gifffer();
  }, []);

  return <>{children}</>;
};

export default PageElement;
