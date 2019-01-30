import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions/todoAction'


class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    const post = this.props.post ? (
      (
        <div>
          <h4 className="center">{ this.props.post.title }</h4>
          <p>{this.props.post.body }</p>
          <div className="center">
            <button onClick={ this.handleClick } type="submit" className="btn grey waves-effect waves-light">Delete<i className="material-icons right">delete</i></button>
          </div>
        </div>
      )
    ) : (
      <p className="center red-text">Loading page...</p>
    )
    return (
      <div className="container">
        { post }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post)
