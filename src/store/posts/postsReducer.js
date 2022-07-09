import { createSlice } from '@reduxjs/toolkit'
// import PropTypes from 'prop-types'

const initialState = {
  posts: [
    { id: 1, title: 'example', content: 'example' },
    { id: 2, title: 'example', content: 'example' },
  ],
  post: {},
}

const postsReducer = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(action.payload)
    },
    removeSinglePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
  },
})

// postsReducer.actions.postUpdate.propTypes = {
//   payload: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//   }).isRequired,
// }

// postsReducer.actions.removeSinglePost.propTypes = {
//   payload: PropTypes.number.isRequired,
// }

// postsReducer.actions.addPosts.propTypes = {
//   payload: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//   }).isRequired,
// }

export const postActions = postsReducer.actions
console.log('postActions', postActions)
export default postsReducer.reducer
