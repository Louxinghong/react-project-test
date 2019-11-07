import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      date: new Date(),
      name: 'louxiaohong'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  onChangeName(newName, e) {
    this.setState((state, props) => ({
      name: state.name + '和' + newName + '和' + props.name
    }))
  }

  render() {
    return (
      <div>
        <h2>Now Time is {this.state.date.toLocaleTimeString()}</h2>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.onChangeName('xiaohong')}>
          点击变化名称
        </button>
      </div>
    )
  }
}

export default Clock
