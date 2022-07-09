import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {},
})

export const postActions = postsReducer.actions
console.log('postActions'.postActions)
export default postsReducer.reducer
