import React, { Component } from 'react';
import './PotionSearch.css';

class PotionSearch extends Component {
    
  render() {

    return (
      <form className="PotionSearch">
        
        <input type="text"></input>
        <select name="sort">
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        
        <button>Search</button>
      
      </form>
    );
  }
}

export default PotionSearch;