import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postActions } from '../../../store/posts/postsReducer'
import { Link } from 'react-router-dom'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChangedHandler = (e) => setTitle(e.target.value)
  const onContentChangedHandler = (e) => setContent(e.target.value)

  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(postActions.addPosts({ id: nanoid(), title, content }))
    setTitle('') // reset form
    setContent('')
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" value={title} onChange={onTitleChangedHandler} />
        <label htmlFor="postContent">Content:</label>
        <textarea value={content} onChange={onContentChangedHandler} required />

        <button type="button" onClick={onSubmitHandler}>
          Save Post
        </button>
        <Link to="/">Back to Posts</Link>
      </form>
    </section>
  )
}

export default AddPostForm
