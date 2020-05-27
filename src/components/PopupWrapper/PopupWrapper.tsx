import React, { ReactNode } from 'react';

import './PopupWrapper.scss';

type PopupWrapper = {
  children: ReactNode,
  onClick: (e: any) => void,
  onSubmit?: (value: any) => void,
}

const PopupWrapper: React.FC<PopupWrapper> = ({ children, onClick, onSubmit }) => {
  return (
    <div className="overlay" onClick={(e) => onClick(e)}>
      <form className="content" onClick={e => e.stopPropagation()} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

export default PopupWrapper;
