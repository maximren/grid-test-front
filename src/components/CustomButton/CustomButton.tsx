import React from 'react';

import './CustomButton.scss';

const CustomButton: React.FC<any> = ({ name, onClick, type }) => {
  return (
    <button onClick={onClick} className='custom-button' type={type || 'button' }>
      {name}
    </button>
  )
}

export default CustomButton;
