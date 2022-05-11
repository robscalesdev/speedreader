import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Header from '../Layout/Header'
import Home from '../Project/Home'
import Prompts from 'Project/Prompts';

// AUTH ROUTES
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import ChangePassword from '../Auth/ChangePassword'

import history from '../browserHistory';
// import Project from 'Project';
// import PageError from 'shared/components/PageError';

const ProjectRoutes = ({ user, setUser, clearUser, posts, setPosts }) => (
  <main>
    <Header user={user} />
    <Routes history={history}>
      <Route
        path='/sign-up'
        element={
          <SignUp setUser={setUser} />
        }
      />
      <Route
        path='/sign-in'
        element={
          <SignIn setUser={setUser} />
        }
      />
      <Route
        path='/sign-out'
        element={
          <SignOut
            clearUser={clearUser}
            user={user}
          />
        }
      />
      <Route
        path='/change-password'
        element={
          <ChangePassword user={user} />
        }
      />
      <Route
        path='/'
        element={<Home 
          posts={posts}
          setPosts={setPosts} />}
      />
      <Route
        path='/story/:id'
        element={<Prompts posts={posts} />}
      />
    </Routes>
  </main>
);

export default ProjectRoutes;
