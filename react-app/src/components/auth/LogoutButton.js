import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  }

  return (
    <button className="logout_button" onClick={onLogout} style={buttonStyle}>
      <i class="fas fa-angle-double-right"></i>

    </button>

  )
};

export default LogoutButton;
