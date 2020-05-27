import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';

import TableHeader from '../../components/TableHeader';
import TableWrapper from '../../components/TableWrapper';
import TableContent from '../../components/TableContent';
import { fetchUsers, fetchMoreUsers } from '../../store/actions/user.actions';
import Header from '../../components/Header';

import './UserTablePage.scss';
import { usersSelector } from '../../store/selectors';
import { User } from '../../types/user.types';

type UserTablePageProps = {
  users: User[],
  hasMore: boolean,
  fetchMoreUsers: (value: number) => void;
  fetchUsers: () => void;
}

const UserTablePage: React.FC<UserTablePageProps> = (props) => {
  const [search, setSearch] = useState('');

  useLayoutEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <>
      <Header
        onSearch={setSearch}
        value={search}
      />
      <TableWrapper>
        <TableHeader />
        <TableContent users={props.users} searchIndex={search} />
      </TableWrapper>
      {props.hasMore && (
        <div
          className="pagination-bar"
          onClick={() => props.fetchMoreUsers(props.users.length)}
        >
          Load more users
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  users: usersSelector(state),
  hasMore: state.usersReducer.hasMore,
});

const mapDispatchToProps = {
  fetchUsers,
  fetchMoreUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTablePage as any);
