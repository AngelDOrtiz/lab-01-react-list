import React, { Component } from 'react';
import PotionItem from './PotionItem';
import './PotionList.css';


class PotionList extends Component {

  render() {
    
    const potions = this.props.potions;
    
    return (
      <ul className='PotionList'>
        {potions.map(potion => (
          <PotionItem key={potion.name} potionProp={potion}/>
        ))}
        
      </ul>
    );
  }
}

export default PotionList;