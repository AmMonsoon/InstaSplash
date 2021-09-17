import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./loginform.css"
import logo from "../../logo.png"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const loginDemo = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/images/following' />;
  }

  return (
    <div className="login-page-container">
      <div className="login-section-container">
        <div className="logo__wapper">
          <img className="logo__image" src={logo} alt=""></img>
        </div>
        <div className="login__text">Log In</div>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="login-page-email">
            {/* <label htmlFor='email'>Email</label> */}
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="login-page-password">
            {/* <label htmlFor='password'>Password</label> */}
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button  className="login__submit--button" type='submit'>Login</button>
        </form>
        <button className="login-demo-btn" onClick={loginDemo}>Demo</button>
        <div className="login__signup">
          Don't have an account? <NavLink className="login-page-signup-link" to="/sign-up">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
