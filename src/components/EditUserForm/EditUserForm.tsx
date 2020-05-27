import React, { useState } from 'react';
import { connect } from 'react-redux';

import { User } from '../../types/user.types';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import PopupWrapper from '../PopupWrapper';
import { editUser } from '../../store/actions/user.actions';
import BeatLoader from 'react-spinners/BeatLoader';

import './EditUserForm.scss';

type EditUserForm = {
  user: User;
  onClose: () => void;
  editUser: (
    id: number,
    name?: string,
    empActive?: string,
    empDepartment?: string,
  ) => void;
};

const EditUserForm: React.FC<EditUserForm> = ({ user, onClose, editUser }) => {
  const [name, setName] = useState(user.name);
  const [empDepartment, setEmpDepartment] = useState(user.empDepartment);
  const [empActive, setEmpActive] = useState(user.empActive);

  const onSubmit = (e: any) => {
    e.preventDefault();
    editUser(user._id, name, empActive, empDepartment);
    onClose();
  };

  if (!user)
    return (
      <PopupWrapper onClick={onClose} onSubmit={(e: any) => onSubmit(e)}>
        <BeatLoader />
      </PopupWrapper>
    );

  return (
    <PopupWrapper onClick={onClose} onSubmit={(e: any) => onSubmit(e)}>
      <div className="edit-form-container">
        <CustomInput
          label="Name:"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          label="Department:"
          value={empDepartment}
          type="text"
          onChange={(e) => setEmpDepartment(e.target.value)}
        />
        <CustomInput
          value={empActive}
          onChange={() => setEmpActive('true')}
          type="checkbox"
          label="True"
          checked={empActive === 'true'}
        />
        <CustomInput
          value={empActive}
          onChange={() => setEmpActive('false')}
          type="checkbox"
          label="False"
          checked={empActive === 'false'}
        />
        <CustomButton name="Edit" type="submit" />
      </div>
    </PopupWrapper>
  );
};

const mapDispatchToProps = {
  editUser,
};

export default connect(null, mapDispatchToProps)(EditUserForm);
