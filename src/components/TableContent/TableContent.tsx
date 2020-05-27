import React from 'react';

import { TableContentProps } from './TableConten.type';
import { User } from '../../types/user.types';
import SingleUserRow from '../SingleUserRow';

const TableContent: React.FC<TableContentProps> = ({ users, searchIndex }) => {
  let filteredArray = users.filter(user => user.name.toLowerCase().indexOf(searchIndex.toLowerCase()) !== -1)

  const renderUsers = () => {
    return users.length > 0 ? (
      filteredArray.map((user: User) => (
        <SingleUserRow
          key={user._id}
          user={user}
        />
      ))
    ) : (
      <tr>
        <td />
        <td />
        <td />
        <td className="no-users-container">Users not found</td>
      </tr>
    );
  };

  return <tbody>{renderUsers()}</tbody>;
};

export default TableContent;
