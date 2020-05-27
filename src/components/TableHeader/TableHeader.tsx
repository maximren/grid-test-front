import React from 'react';

import './TableHeader.scss';

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr className="table-header">
        <th className="header-row" />
        <th className="header-row" />
        <th className="header-row">Employee ID</th>
        <th className="header-row">Name</th>
        <th className="header-row">Active</th>
        <th className="header-row">Department</th>
        <th className="header-row" />
      </tr>
    </thead>
  );
};

export default TableHeader;
