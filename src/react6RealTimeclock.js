import React from 'react';
import ReactDom from "react-dom/client"

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

class Clock extends React.Component {
  constructor() {
    super()
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Jam Dunia</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

root.render(<Clock />)