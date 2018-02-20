import React from 'react'
import '../App.css'

class ImageContainer extends React.Component {

  render() {
    return (
      <div>
        <section className="portfolio-image" id="bamboo"></section>
        <div className="separator"></div>
        <section className="portfolio-image" id="irish"></section>
      </div>
    )
  }
}

export default ImageContainer
