import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { Navbar } from './app/Navbar'
import PostList from './components/features/posts/postList'

function App() {
  // const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts)

  console.log('Posts', posts)

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <h2>Welcome to the Redux Essentials example app!</h2>
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
        <PostList />
      </div>
    </Router>
  )
}

export default App
