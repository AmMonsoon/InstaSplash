import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
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
  const currentUser = useSelector(state => state.session.user)


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
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar userId={currentUser?.id}/>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar userId={currentUser?.id}/>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Redirect to="/images/following"></Redirect>
        </ProtectedRoute>
        <ProtectedRoute path='/images/explore' exact={true}>
          <NavBar userId={currentUser?.id}/>
          <Explore />
        </ProtectedRoute>
        <ProtectedRoute path='/images/following' exact={true}>
          <NavBar userId={currentUser?.id}/>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path='/images/add' exact={true}>
          <NavBar userId={currentUser?.id}/>
          <CreateImage />
        </ProtectedRoute>
        <ProtectedRoute path='/images/:imageId' exact={true} >
          <NavBar userId={currentUser?.id}/>
          <Image />
        </ProtectedRoute>
        <ProtectedRoute path='/'>
          <NavBar  userId={currentUser?.id} />
          <h1>404 Page Not Found</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
