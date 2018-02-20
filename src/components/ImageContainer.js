import React from 'react'
import '../App.css'

class ImageContainer extends React.Component {

  clicked = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <section className="portfolio-image-vertical" id="bamboo-tumalog-falls" onMouseEnter={this.clicked}></section>
        <div className="separator"></div>
        <section className="portfolio-image-horizontal" id="irish-hunger-memorial"></section>
        <div className="separator"></div>
        <section className="portfolio-image-horizontal" id="lantern-festival"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="san-remigio-beach"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="siri-yangu-bridge"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="siri-yangu-palm-tree"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="siri-yangu-boat"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="siri-yangu-tree"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="siri-yangu-balcony"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="west35-pic1"></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" id="west35-pic2"></section>
      </div>
    )
  }
}

export default ImageContainer
