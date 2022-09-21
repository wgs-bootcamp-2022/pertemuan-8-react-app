import React from "react"
import ReactDom from "react-dom/client"

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

const User = ({nama, pekerjaan})=>{
  return (
      <div>
          <h4>Nama : {nama} <br />Pekerjaan : {pekerjaan}</h4>      
      </div>
  )
}

const App = () => {
    return(
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
            </div>
            <div className="content">
                <a href="/" className="author">
                <User nama="Yahya" />
                </a>
            </div>
            <div className="metadata">
                <span className="date">{new Date().toLocaleTimeString()}</span>
            </div>
            <div className="text">Test Comment</div>
        </div>
    )
}

root.render(<App />)