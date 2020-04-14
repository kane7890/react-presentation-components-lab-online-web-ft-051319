// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

  constructor()
  {
    super()
    this.state = {
      mood: "happy"

    }
  }

  handleClick = () => {
  //  event.preventDefault()
    var newMood;
    if (this.state.mood === "happy") {
      newMood = "sad"
    }
    else  {
      newMood = "happy"
    }
    this.setState({mood: newMood})
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}
export default SimpleComponent
