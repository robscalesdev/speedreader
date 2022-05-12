import React, { Fragment, useState } from 'react';

import ProjectRoutes from './Routes';

import './fontStyles.css';

const App = () => {

  // creating a redux store of data that needs to be used globally
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [wpm, setWpm] = useState(250)

  const clearUser = () => {
    setUser(null)
  }

  return (
  <Fragment>
    {/* handles browser routing */}
    <ProjectRoutes 
      user={user} 
      setUser={setUser} 
      clearUser={clearUser}
      posts={posts}
      wpm={wpm}
      setWpm={setWpm}
      setPosts={setPosts}
      />
  </Fragment>
  );
}

export default App;
