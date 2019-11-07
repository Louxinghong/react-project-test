import React from 'react'

const user = {
  firstName: 'Tom',
  lastName: 'player'
}

const news = {
  author: {
    avatarUrl: require('../../icons/1.png'),
    name: 'louxiaohong'
  },
  content: '@#^&@^$#^TR#@$#Y@!#H!#!@H#!',
  date: '2019-10-15'
}

function formatName(user) {
  if (JSON.stringify(user) !== '{}') {
    return user.firstName + '' + user.lastName
  }
  return 'Stranger'
}

class Avatar extends React.Component {
  render() {
    return (
      <img
        className="Avatar"
        src={this.props.users.avatarUrl}
        alt={this.props.users.name}
      />
    )
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar users={this.props.news.author} />
          <div className="Name">{this.props.news.author.name}</div>
          <div className="Content">{this.props.news.content}</div>
          <div className="date">{this.props.news.date}</div>
        </div>
      </div>
    )
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello, {this.props.name}</h3>
        <Comment news={news} />
        <h3>hello, {formatName(user)}</h3>
      </div>
    )
  }
}

export default Welcome
