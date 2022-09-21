import React from "react"
import ReactDom from "react-dom/client"
import { faker } from '@faker-js/faker';

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

const User = ({name, comment})=>{
  return (
      <div>
          {name}    
          {comment}    
      </div>
  )
}

const App = () => {
    return(
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                  <a href="/" className="author">
                  <User name={faker.name.firstName()}/>
                  </a>
                  <div className="metadata">
                      <span className="date"> Today at {new Date().toLocaleTimeString()} </span>
                  </div>
                  <div className="text"> <User comment={faker.lorem.lines()}/></div>
                </div>
            </div>
        </div>
    )
}

const Func = () =>{
  return (
    <div>
      <App />
      <App />
      <App />
    </div>
  )
}
root.render(<Func />)
