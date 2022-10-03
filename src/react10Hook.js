import React, {useState} from 'react';
import ReactDom from "react-dom/client"



const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

function App() {
    const [date, setDate] = useState(new Date())

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return function cleanup() {
            clearInterval(timerID)
        }
    })

    function tick() {
        setDate(new Date())
    }
    return (
        <div>
          <h1>Jam Dunia</h1>
          <h2>{date.toLocaleTimeString()}</h2>
        </div>
      )
}

root.render(<App />)