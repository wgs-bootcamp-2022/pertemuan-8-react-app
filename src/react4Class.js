import React from 'react';
import ReactDom from "react-dom/client"
import { faker } from '@faker-js/faker';

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

class App extends React.Component {
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
                  <div className="text"> {this.props.comment}</div>
                </div>
            </div>
        </div>
        )
    }
}

const data = [
  {
    avatar : faker.image.avatar(),
    name : faker.name.firstName(),
    date : new Date().toLocaleTimeString(),
    comment : faker.lorem.lines()
  },
  {
    avatar : faker.image.avatar(),
    name : faker.name.firstName(),
    date : new Date().toLocaleTimeString(),
    comment : faker.lorem.lines()
  },
  {
    avatar : faker.image.avatar(),
    name : faker.name.firstName(),
    date : new Date().toLocaleTimeString(),
    comment : faker.lorem.lines()
  }
]

class Comment extends React.Component  {
    render(){
      return this.props.data.map((com, index) => (
        <div className='comment' key={index}>
          <App avatar={com.avatar} name={com.name} date={com.date} comment={com.comment}/>
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