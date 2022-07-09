import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SinglePostPage = ({ match }) => {
  console.log('match', match)
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === +postId)
  )

  console.log('SinglePostPagePost', post)

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
      <Link to={`edit/${post.id}`} className="edit-post">
        Edit
      </Link>
    </section>
  )
}

//Note Params comes in a string so we need to parse it to an integer
SinglePostPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default SinglePostPage
