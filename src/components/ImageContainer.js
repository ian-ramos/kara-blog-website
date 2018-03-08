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
        <div className="separator"></div>*/}
        {this.portfolioImages()}
      </div>
    )
  }
}

export default ImageContainer
