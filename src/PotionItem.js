import React, { Component } from 'react';
import './PotionItem.css';

class PotionItem extends Component {

  render() {

    const potion = this.props.potionProp;
    

    return (
      <li className="PotionItem">
        <h2>{potion.name}</h2>
        <img alt={potion.name} src={potion.url}/>
        <p>{potion.price}gold</p>
      </li>
    );
  }
}

export default PotionItem;