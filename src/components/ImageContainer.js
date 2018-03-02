import React from 'react'
import '../App.css'
import PortfolioImage from './PortfolioImage'
import imageInfo from '../images/imageInfo'

class ImageContainer extends React.Component {

  clicked = () => {
    console.log('clicked');
  }

  portfolioImages = () => {
    return imageInfo.map((imageInfo, idx) => <PortfolioImage key={idx} {...imageInfo} />)
  }

  render() {
    return (
      <div>
        {/*<section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['bambooTumalogFalls']})`}} onMouseEnter={this.clicked}></section>
        <div className="separator"></div>
        <section className="portfolio-image-horizontal" style={{backgroundImage: `url(${imagePaths['irishHungerMemorial']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-horizontal" style={{backgroundImage: `url(${imagePaths['lanternFestival']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['sanRemigioBeach']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['siriYanguBridge']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['siriYanguPalmTree']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['siriYanguBoat']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['siriYanguTree']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['siriYanguBalcony']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['west35Pic1']})`}}></section>
        <div className="separator"></div>
        <section className="portfolio-image-vertical" style={{backgroundImage: `url(${imagePaths['west35Pic2']})`}}></section>*/}
        {this.portfolioImages()}
      </div>
    )
  }
}

export default ImageContainer
