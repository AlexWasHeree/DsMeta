import React from 'react';
import icon from '../../assets/Vector.svg';
import './styles.css';

const NotificationBtn = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
};

export default NotificationBtn;
