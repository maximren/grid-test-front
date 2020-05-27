import React from 'react';

import PopupWrapper from '../PopupWrapper';
import { User } from '../../types/user.types';

import './TargetUserCard.scss';

type TargetUserCardProps = {
  user: User;
  onClose: () => void
};

const TargetUserCard: React.FC<TargetUserCardProps> = ({ user, onClose }) => {
  return (
    <PopupWrapper onClick={onClose}>
      <div className="photo-container">
        <img
          src={require('../../assets/user-photo.svg')}
          alt=""
          className="user-photo"
        />
      </div>
      <div className="card-description">
        <div>Name: {user.name}</div>
        <div>EmployeeID: {user._id + 1}</div>
        <div>Active status: {user.empActive}</div>
        <div>Department: {user.empDepartment}</div>
      </div>
    </PopupWrapper>
  );
};

export default TargetUserCard;
