import React from 'react';

import './CustomInput.scss';

type CustomInput = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  checked?: boolean
};

const CustomInput: React.FC<CustomInput> = ({
  value,
  onChange,
  type,
  label,
  checked
}) => {
  return (
    <div className="input-wrapper">
      <div className="label">{label}</div>
      <input value={value} onChange={onChange} type={type} className="input" checked={checked} />
    </div>
  );
};

export default CustomInput;
