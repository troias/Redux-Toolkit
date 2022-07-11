import React from 'react'
import { useSelector } from 'react-redux'
import { createEntityAdapter } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

import { selectUserById } from '../../../store/users/usersReducer'
import {
  selectAllPosts,
  selectPostsByUser,
} from '../../../store/posts/postsReducer'

const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector((state) => selectUserById(state, userId))

  const postsForUser = useSelector((state) => selectPostsByUser(state, userId))

  // const postsForUser = useSelector((state) => {
  //   const allPosts = selectAllPosts(state)
  //   return allPosts.filter((post) => post.user === userId)
  // })

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}

export default UserPage
