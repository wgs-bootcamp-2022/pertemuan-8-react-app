import React from 'react';
import ReactDom from "react-dom/client"

const element = document.getElementById("root")

const root = ReactDom.createRoot(element)

class Form extends React.Component {
    constructor(props){
      super(props)
      this.state = { firstName: "", lastName:""}

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        alert("A first name is "+ this.state.firstName +" And a last name is " + this.state.lastName)
        event.preventDefault()
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </label><br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value2={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </label><br />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

root.render(<Form />)