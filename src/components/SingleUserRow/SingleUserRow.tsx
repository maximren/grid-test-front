import React, { useState } from 'react';
import { connect } from 'react-redux';

import TargetUserCard from '../TargetUserCard';
import CustomButton from '../CustomButton';
import EditUserForm from '../EditUserForm';
import { deleteTargetUser } from '../../store/actions/user.actions';

import './SingleUserRow.scss';

const SingleUserRow: React.FC<any> = ({
  user,
  deleteTargetUser,
}) => {
  const [cardId, setCardId] = useState<any>(null);
  const [editId, setEditId] = useState<any>(null);

  const closeForm = (setter: (value: null) => void) => {
    setter(null)
  }

  const id = localStorage.getItem('id');

  return (
    <>
      <tr className="table-row">
        <td className="table-row-section">
          <CustomButton name="View" onClick={() => setCardId(user._id)} />
        </td>
        <td className="table-row-section">
          <CustomButton name="Edit" onClick={() => setEditId(user._id)} />
        </td>
        <td className="table-row-section">{user._id + 1}</td>
        <td className="table-row-section">{user.name}</td>
        <td className="table-row-section">{user.empActive}</td>
        <td className="table-row-section">{user.empDepartment}</td>
        <td className="table-row-section">
          {id !== user._id.toString() && <CustomButton name="Delete" onClick={() => deleteTargetUser(user._id)} />}
        </td>
      </tr>
      {cardId === user._id && <TargetUserCard user={user} onClose={() => closeForm(setCardId)} />}
      {editId === user._id && <EditUserForm user={user} onClose={() => closeForm(setEditId)} />}
    </>
  );
};

const mapDispatchToProps = {
  deleteTargetUser,
}

export default connect(null, mapDispatchToProps)(SingleUserRow);
