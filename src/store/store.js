import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './posts/postsReducer'
import counterReducer from './counter/counterReducer'
import userReducer from './users/usersReducer'
import notificationsSlice from './notifications/notificationsSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    counter: counterReducer,
    users: userReducer,
    notifications: notificationsSlice,
  },
})

export default store
