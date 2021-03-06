import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { useSelector } from 'react-redux'
import AddPostForm from './components/features/posts/addPostsForm'

import { Navbar } from './app/Navbar'

import PostList from './components/features/posts/postList'
import SinglePostPage from './components/features/posts/singlePost'

import EditPostForm from './components/features/posts/editPost'
import UsersList from './components/features/users/usersList'
import UserPage from './components/features/users/usersPage'
import NotificationsList from './components/features/notifications/notificationsList'

function User(props) {
  return <h1>Hello!</h1>
}

function App() {
  // const dispatch = useDispatch()

  const posts = useSelector((state) => state.posts)

  console.log('Posts', posts)

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/notifications" component={NotificationsList} />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <PostList />
              </>
            )}
          />
          <Route
            path="/add-post"
            render={() => (
              <section>
                <AddPostForm />
              </section>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />

          <Route exact path="/posts/:postId/edit" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
