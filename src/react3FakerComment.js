import React from "react"
import ReactDom from "react-dom/client"
import { faker } from '@faker-js/faker';

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

const App = (props) => {
    return(
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                  <a href="/" className="author" >
                  {props.name}
                  </a>
                  <div className="metadata">
                      <span className="date"> Today at {props.date} </span>
                  </div>
                  <div className="text"> {props.comment}</div>
                </div>
            </div>
        </div>
    )
}

const Comment = () => {
  const comment = {
    avatar : faker.image.avatar(),
    name : faker.name.firstName(),
    date : new Date().toLocaleTimeString(),
    comment : faker.lorem.lines()
  }
  return (
    <App avatar = {comment.avatar} name = {comment.name} date = {comment.date} comment = {comment.comment} />
  )
}
root.render(<Comment />)


