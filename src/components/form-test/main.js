import React from 'react'

const numbers = [1, 2, 3, 4, 5]

class NumberList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const listItems = this.props.numbers.map(item => (
      <li key={item.toString()}>{item}</li>
    ))
    return <ul>{listItems}</ul>
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      article: '',
      selectedTeam: 'RNG'
    }
  }

  handleSubmit = event => {
    alert(
      '提交的名字：' +
        this.state.name +
        '提交的文章：' +
        this.state.article +
        '选择的队伍：' +
        this.state.selectedTeam
    )
    event.preventDefault()
  }

  handelNameChange = event => {
    console.log([event.target.name])
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleArticleChange = event => {
    this.setState({ article: event.target.value })
  }

  handleSelectChange = event => {
    this.setState({ selectedTeam: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NumberList numbers={numbers} />
        <label>
          名字：
          <input
            name="titleName"
            type="text"
            value={this.state.name}
            onChange={this.handelNameChange}
          />
        </label>
        <label>
          文章：
          <textarea
            value={this.state.article}
            onChange={this.handleArticleChange}
          />
        </label>
        <label>
          选择喜欢的队伍：
          <select
            value={this.state.selectedTeam}
            onChange={this.handleSelectChange}
          >
            <option value="RNG">RNG</option>
            <option value="SKT">SKT</option>
            <option value="EDG">EDG</option>
            <option value="IG">IG</option>
            <option value="OMG">OMG</option>
            <option value="FPX">FPX</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

export default NameForm
