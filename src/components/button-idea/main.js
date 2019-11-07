import React from 'react'

function WarningBanner(props) {
  // 如果warn为false，则return null，阻止组件渲染，但是并不会影响组件的生命周期
  if (!props.warn) {
    return null
  }

  return <div className="warning">warning</div>
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOneToggleOn: true,
      isTwoToggleOn: true,
      isThreeToggleOn: true,
      showWarning: false
    }
    // 为了在回调中使用this，这个绑定是必不可少的
    this.handleOneClick = this.handleOneClick.bind(this)
  }

  handleOneClick() {
    this.setState(state => ({
      isOneToggleOn: !state.isOneToggleOn
    }))
  }

  handleTwoClick = () => {
    this.setState(state => ({
      isTwoToggleOn: !state.isTwoToggleOn
    }))
  }

  handleThreeClick() {
    this.setState(state => ({
      isThreeToggleOn: !state.isThreeToggleOn
    }))
  }

  handleShowWarning = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        {/* 如果没有在方法后面添加()，例如onClick={this.handleClick}，应该为这个方法绑定this，推荐 */}
        <button onClick={this.handleOneClick}>
          {this.state.isOneToggleOn ? 'isOneToggleOnON' : 'isOneToggleOnOFF'}
        </button>

        {/* class fields正确的绑定回调函数，create react app默认启用此语法，推荐 */}
        <button onClick={this.handleTwoClick}>
          {this.state.isTwoToggleOn ? 'isTwoToggleOnON' : 'isTwoToggleOnOFF'}
        </button>

        {/* 此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。
            在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，
            这些组件可能会进行额外的重新渲染。通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。 */}
        <button onClick={() => this.handleThreeClick()}>
          {this.state.isThreeToggleOn
            ? 'isThreeToggleOnON'
            : 'isThreeToggleOnOFF'}
        </button>

        {/* 向事件处理程序传递参数
        <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}

        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleShowWarning}>
          {this.state.showWarning ? 'hideWarning' : 'showWarning'}
        </button>
      </div>
    )
  }
}

export default Toggle
