import React from 'react'
import '../App.css'

class PortfolioImage extends React.Component {

  state = {
    
  }

  render() {
    return (
      <div>
        <section className={this.props.style} style={{backgroundImage: `url(${this.props.path})`}}></section>
        <div className="separator"></div>
      </div>
    )
  }
}

export default PortfolioImage
