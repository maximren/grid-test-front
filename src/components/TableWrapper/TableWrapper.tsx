import React from 'react';

import './TableWrapper.scss';

const TableWrapper: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <table className='main-wrapper'>
      {children}
    </table>
  );
};

export default TableWrapper;
