import React from 'react';
import './ErrorModal.css';

export const ErrorModal = React.memo(({ children, onClose }) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={onClose} />
      <div className="error-modal">
        <h2>An Error Occurred!</h2>
        <p>{children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});
