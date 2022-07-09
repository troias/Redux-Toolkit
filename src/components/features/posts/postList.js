import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postActions } from '../../../store/posts/postsReducer'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts)

  console.log('PostsListposts', posts)
  const dispatch = useDispatch()

  const removePostsHandler = (id) => {
    console.log('clicked')
    dispatch(postActions.removeSinglePost(id))
  }

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      {console.log('PostsId', post.id)}
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <button
        className="remove-post"
        onClick={() => removePostsHandler(post.id)}
      >
        Delete
      </button>

      {/* <Link to={`/posts/${post.id}/edit`} className="edit-post">
        <button className="edit-post">Edit</button>
      </Link> */}

      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
