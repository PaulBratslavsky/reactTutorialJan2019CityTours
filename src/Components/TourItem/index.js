import React, { Component } from 'react';
import './TourItem.scss';

class TourItem extends Component { 

  state = {
    showInfo: false
  };

  onClickShowInfo = () => {

    console.log("Button Clicked");

    /*
    if ( this.state.showInfo === false ) {
      this.setState({
        showInfo: true
      });
    } else {
      this.setState({
        showInfo: false
      })
    }
    */

    // MORE CONSICE WAY TO DO THE ABOVE LOGIC
    this.setState({
      showInfo: !this.state.showInfo
    });
    
  }

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { onClickRemoveTour } = this.props;

    return (
      <article className="tour">
        <div className="image-container">
          <img className="tour-image" src={img} alt="City Tour Image" />
          <span onClick={ () => onClickRemoveTour(id) } className="close-button"><i className="fas fa-window-close" /></span>
        </div>

        <div className="tour-info">
          <h3>{name}</h3>
          <h4>{city}</h4>
          <h5><span><i onClick={ this.onClickShowInfo } className="fas fa-caret-square-down" /></span></h5>
          
          {this.state.showInfo && <p>{info}</p> }
          
        </div>
      </article>
    )
  }
}

export default TourItem;
