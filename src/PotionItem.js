import React, { Component } from 'react';
import './PotionItem.css';

class PotionItem extends Component {

  render() {
    return (
      <li className="PotionItem">
        <h2>Potion of Healing</h2>
        <img alt='a red potion' src="https://www.pngitem.com/pimgs/m/87-879825_tww-red-potion-artwork-zelda-red-potion-hd.png"/>
        <p>2g</p>
      </li>
    );
  }
}

export default PotionItem;