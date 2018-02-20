import React from 'react'
import '../App.css'
import bambooTumalogFalls from '../images/bamboo-tumalog-falls.jpg'
import irishHungerMemorial from '../images/irish-hunger-memorial.jpg'
import lanternFestival from '../images/lantern-festival.jpg'
import sanRemigioBeach from '../images/san-remigio-beach.jpg'
import siriYanguBalcony from '../images/siri-yangu-balcony.jpg'
import siriYanguBoat from '../images/siri-yangu-boat.jpg'
import siriYanguBridge from '../images/siri-yangu-bridge.jpg'
import siriYanguPalmTree from '../images/siri-yangu-palm-tree.jpg'
import siriYanguTree from '../images/siri-yangu-tree.jpg'
import west35Pic1 from '../images/west35-pic1.jpg'
import west35Pic2 from '../images/west35-pic2.jpg'

class ImageContainer extends React.Component {

  clicked = () => {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${bambooTumalogFalls})`}} onMouseEnter={this.clicked}></section>
        <div className="separator"></div>
        <section className="portfolio-image-horizontal" style={{backgroundImage: `url(${irishHungerMemorial})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-horizontal" style={{backgroundImage: `url(${lanternFestival})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${sanRemigioBeach})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${siriYanguBridge})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${siriYanguPalmTree})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${siriYanguBoat})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${siriYanguTree})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${siriYanguBalcony})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${west35Pic1})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${west35Pic2})`}}></section>
      </div>
    )
  }
}

export default ImageContainer
