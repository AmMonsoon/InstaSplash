import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Home from './components/Home';
import Explore from './components/Explore'
import { authenticate } from './store/session';
import Image from './components/Image'
import CreateImage from './components/AddImage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/images/explore' exact={true}>
          <Explore />
        </ProtectedRoute>
        <ProtectedRoute path='/images/following' exact={true}>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path='/images/add' exact={true}>
          <CreateImage />
        </ProtectedRoute>
        <ProtectedRoute path='/images/:imageId' exact={true} >
          <Image />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
