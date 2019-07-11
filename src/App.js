// Youssef Selkani
// 2019

import React, { Component } from 'react'
import './App.css'

export default class LikeDislike extends Component {
  constructor (props) {
    super(props)
    this.state = {
      likes: 99,
      dislikes: 99
    }
  }

  like = () => {
    this.setState({ likes: this.state.likes + 1, liked: true })
    if (this.state.disliked) {
      this.prevDislike()
    }
  }

  dislike = () => {
    this.setState({ dislikes: this.state.dislikes + 1, disliked: true })
    if (this.state.liked) {
      this.prevLike()
    }
  }

  prevLike = () => {
    this.setState({ likes: this.state.likes - 1, liked: false })
  }

  prevDislike = () => {
    this.setState({ dislikes: this.state.dislikes - 1, disliked: false })
  }

  render () {
    let { likes, dislikes, liked, disliked } = this.state
    return (
      <div className='App'>
      <h2>Youssef Selkani</h2>
      <br />
        {liked ? (
          <button
            style={{ backgroundColor: 'darkblue', color: '#fff' }}
            onClick={this.prevLike}
            className='btn'
          >
            Like | {likes}
          </button>
        ) : (
          <button className='btn' onClick={this.like}>
            Like | {likes}
          </button>
        )}
        <br />
        {disliked ? (
          <button
            className='btn'
            style={{ backgroundColor: 'darkblue', color: '#fff' }}
            onClick={this.prevDislike}
          >
            Dislike | {dislikes}
          </button>
        ) : (
          <button className='btn' onClick={this.dislike}>
            Dislike | {dislikes}
          </button>
        )}
      </div>
    )
  }
}
