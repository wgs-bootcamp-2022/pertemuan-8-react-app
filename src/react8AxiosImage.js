import React from 'react';
import ReactDom from "react-dom/client"
import unsplash from "./data/data";
import "./image.css";


const element = document.getElementById("root")

const root = ReactDom.createRoot(element)



class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {spans:0}
    this.imageRef = React.createRef()
  }
  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height/10)
    this.setState({spans})
  }
  render(){
    return <img src={this.props.image.urls.regular} alt={this.props.image.description} ref={this.imageRef} 
    style={{gridRowEnd: `span ${this.state.spans}`}}/>
  }
}

const ImageList = (props)=> {
    const images = props.images.map((image) => {
      return <ImageCard key={image.id } image={image} />
    })
  
    return (
      <div className="image-gallery">
        <div className="column">
            <div className='image-list'>{images}</div>
        </div>
      </div>
    )
}

class SearchBar extends React.Component {
  state = { term: ""}

  onFormSubmit = (event) => {
      event.preventDefault()
      this.props.onSubmit(this.state.term)
  }

  render(){
      return(
          <div className='ui segment'>
              <form onSubmit={this.onFormSubmit} className='ui form'>
                  <div className='field'>
                      <label>Image Search</label>
                      <input
                          type="text"
                          value={this.state.term}
                          onChange={(e)=> this.setState({term: e.target.value})}
                      />
                  </div>
              </form>
          </div>
      )
  }
}

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (term) => {
      const response = await unsplash.get("/search/photos", {
          params: {query: term}
      })

      this.setState({ images: response.data.results })
      console.log(response.data.results)
  }

  render() {
      return (
          <div className='ui container' style={{ marginTop: "10px"}}>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <ImageList images={this.state.images} />
          </div>
      )
  }
}

root.render(<App />)