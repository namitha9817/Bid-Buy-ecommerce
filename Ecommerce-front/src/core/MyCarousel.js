import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '20px',
      width: '500px',
      paddingTop: '150px', 
      disable_box_shadow: 'True',
      disable_fade_in: 'True' 
    };
  }
}
export default MyCarousel;