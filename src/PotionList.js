import React, { Component } from 'react';
import PotionItem from './PotionItem';
import './PotionList.css';


class PotionList extends Component {

  render() {
    return (
      <ul className='PotionList'><PotionItem/></ul>
    );
  }
}

export default PotionList;