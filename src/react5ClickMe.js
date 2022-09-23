import React from 'react';
import ReactDom from "react-dom/client"
import data from "./data/commentData";

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increment(){
    this.setState(
      {
        count:this.state.count+1
      }
    );
  };
  render(){
    return (
    <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={this.props.avatar} />
            </a>
            <div className="content">
              <a href="/" className="author" >
              {this.props.name}
              </a>
              <div className="metadata">
                  <span className="date"> Today at {this.props.date} </span>
              </div>
              <div className="metadata">
                  <span className="like">| Liked: {this.state.count} </span>
              </div>
              <div className="text"> {this.props.comment}</div>
              <button className="increment"  onClick={(e)=>this.increment(e)}>Click Me</button>
            </div>
        </div>
    </div>
    )
  }
}


class Comment extends React.Component  {
  render(){
    return this.props.data.map((com, index) => (
      <div className='comment' key={index}>
        <App avatar={com.avatar} name={com.name} date={com.date} comment={com.comment} like={com.like}/>
      </div>
    ))
  }
}

const RunApp = () => {
  return <div>
    (
      <Comment data={data}/>
    )
  </div>
}

root.render(<RunApp />)