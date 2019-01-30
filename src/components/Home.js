import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="card" key={ post.id }>
            <div className="card-content">
              <Link to={ '/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <p className="center red-text">You currently do not have any posts</p>
    )
    return (
      <div className="container">
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)

