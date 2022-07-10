import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

const incrementAsync = createAsyncThunk('counter/incrementAsync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { incrementBy: 5 }
})

const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    reset: (state) => {
      state.counter = 0
    },
  },
})

export const counterActions = counterReducer.actions
export default counterReducer.reducer
