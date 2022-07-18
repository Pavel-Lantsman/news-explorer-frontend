import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import './Popup.css';

const Popup = ({
  children,
  isVisible,
  closePopup,
  ...props
}) => {
  const containerRef = useRef(null);

  const handleClickEvent = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      closePopup();
    }
  };

  const handleKeydownEvent = (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickEvent);
      document.addEventListener('keydown', handleKeydownEvent);
    }

    return () => {
      document.removeEventListener('click', handleClickEvent);
      document.removeEventListener('keydown', handleKeydownEvent);
    };
  }, [isVisible]);

  return (
    <div
      className={classNames(
        'popup',
        isVisible && 'popup_visible',
      )}
    >
      <div
        className={classNames(
          'popup__container',
          isVisible && 'popup__container_visible',
        )}
        ref={containerRef}
      >
        <button
          type="button"
          onClick={closePopup}
          className="popup__close-button"
          title="Close"
          aria-label="Close"
        />

        <div
          className={classNames(
            'popup__content-container',
            props.className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
