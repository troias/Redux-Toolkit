import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './posts/postsReducer'
import counterReducer from './counter/counterReducer'
import userReducer from './users/usersReducer'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
    users: userReducer,
  },
})

export default store
